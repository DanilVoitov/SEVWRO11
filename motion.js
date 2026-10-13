'use strict';
(() => {
  const preference = matchMedia('(prefers-reduced-motion: reduce)');
  const desktopPointer = matchMedia('(min-width: 900px) and (pointer: fine)');
  let manuallyDisabled = false;
  try { manuallyDisabled = localStorage.getItem('severo:motion') === 'off'; } catch {}
  const disabled = () => preference.matches || manuallyDisabled;
  const ease = 'cubic-bezier(.22,1,.36,1)';
  const activeAnimations = new Set();
  const elementAnimations = new WeakMap();

  function animate(element, frames, options) {
    if (!element || disabled() || !element.animate) return null;
    elementAnimations.get(element)?.cancel();
    const animation = element.animate(frames, options);
    activeAnimations.add(animation);
    elementAnimations.set(element, animation);
    animation.finished.catch(() => {}).finally(() => {
      activeAnimations.delete(animation);
      if (elementAnimations.get(element) === animation) elementAnimations.delete(element);
    });
    return animation;
  }

  // Elements are visible in the document; motion is an optional enhancement.
  function reveal(element, delay = 0) {
    const image = element.hasAttribute('data-reveal-image') && !element.hasAttribute('data-parallax');
    animate(element, image
      ? [{ opacity: .65, transform: 'scale(1.035)' }, { opacity: 1, transform: 'scale(1)' }]
      : [{ opacity: 0, transform: 'translateY(16px)' }, { opacity: 1, transform: 'translateY(0)' }],
    { duration: image ? 1200 : 900, delay, easing: ease, fill: 'backwards' });
  }

  const header = document.querySelector('.site-header');
  const progress = document.querySelector('.reading-progress');
  const parallaxImages = [...document.querySelectorAll('[data-parallax]')];
  const visibleImages = new Set();
  const originalTransforms = new Map(parallaxImages.map(element => [element, {
    value: element.style.getPropertyValue('transform'),
    priority: element.style.getPropertyPriority('transform')
  }]));
  let scrollFrame = 0;
  const canParallax = () => !disabled() && desktopPointer.matches && !document.hidden;

  function resetParallax() {
    parallaxImages.forEach(element => {
      const original = originalTransforms.get(element);
      if (original.value) element.style.setProperty('transform', original.value, original.priority);
      else element.style.removeProperty('transform');
    });
  }

  function updateScroll() {
    scrollFrame = 0;
    const available = document.documentElement.scrollHeight - innerHeight;
    const amount = available > 0 ? Math.max(0, Math.min(1, scrollY / available)) : 0;
    const positions = canParallax() ? [...visibleImages].map(element => {
      // Measure the stationary image frame, avoiding feedback from its transform.
      const rect = (element.parentElement || element).getBoundingClientRect();
      const distance = (innerHeight / 2 - rect.top - rect.height / 2) / ((innerHeight + rect.height) / 2);
      const limit = Math.min(12, rect.height * .015);
      return [element, Math.max(-1, Math.min(1, distance)) * limit];
    }) : [];
    if (progress) progress.style.transform = `scaleX(${amount})`;
    header?.classList.toggle('scrolled', scrollY > 30);
    positions.forEach(([element, offset]) => {
      element.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0) scale(1.045)`;
    });
  }

  function scheduleScroll() {
    if (!scrollFrame && !document.hidden) scrollFrame = requestAnimationFrame(updateScroll);
  }

  function syncMotion() {
    document.documentElement.classList.toggle('motion-off', disabled());
    document.querySelectorAll('[data-motion-toggle]').forEach(button => {
      button.setAttribute('aria-pressed', String(disabled()));
      button.textContent = disabled() ? 'Анимация: выкл.' : 'Анимация: вкл.';
      button.disabled = preference.matches;
      button.title = preference.matches ? 'Уменьшение движения включено в настройках устройства' : 'Управление анимацией сайта';
    });
    if (disabled()) activeAnimations.forEach(animation => animation.cancel());
    if (!canParallax()) resetParallax();
    scheduleScroll();
  }

  document.querySelectorAll('[data-motion-toggle]').forEach(button => button.addEventListener('click', () => {
    manuallyDisabled = !manuallyDisabled;
    try { localStorage.setItem('severo:motion', manuallyDisabled ? 'off' : 'on'); } catch {}
    syncMotion();
  }));
  preference.addEventListener('change', syncMotion);
  desktopPointer.addEventListener('change', syncMotion);
  syncMotion();

  document.querySelectorAll('[data-intro]').forEach((element, index) => reveal(element, Math.min(index * 100, 400)));
  let revealObserver;
  if ('IntersectionObserver' in window) {
    revealObserver = new IntersectionObserver(entries => {
      let stagger = 0;
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        reveal(entry.target, Math.min(stagger++ * 65, 195));
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: .08 });
    document.querySelectorAll('[data-reveal], [data-reveal-image], .product').forEach(element => {
      if (!element.hasAttribute('data-intro') && !element.hasAttribute('data-parallax')) revealObserver.observe(element);
    });

    const parallaxObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) visibleImages.add(entry.target);
        else visibleImages.delete(entry.target);
      });
      scheduleScroll();
    }, { threshold: 0 });
    parallaxImages.forEach(element => parallaxObserver.observe(element));
  }

  document.addEventListener('severo:filter', () => {
    document.querySelectorAll('.product:not([hidden])').forEach((card, index) => {
      revealObserver?.unobserve(card);
      reveal(card, Math.min(index * 40, 160));
    });
    scheduleScroll();
  });

  const materials = {
    suede: ['01 / SUEDE', 'Глубокий табачный оттенок и мягкий ворс. Свет меняет поверхность при каждом движении.'],
    knit: ['02 / KNITWEAR', 'Сливочный оттенок и рельефная вязка. Объём, который делает простой силуэт выразительным.'],
    wool: ['03 / WOOL', 'Тёмный шоколад и матовая поверхность. Мягкие складки, спокойные линии и пластичность формы.']
  };
  const tabs = [...document.querySelectorAll('[data-material]')];
  const panel = document.querySelector('#material-description');
  function chooseMaterial(tab) {
    const data = materials[tab.dataset.material];
    if (!data || !panel) return;
    tabs.forEach(button => {
      const selected = button === tab;
      button.setAttribute('aria-selected', String(selected));
      button.tabIndex = selected ? 0 : -1;
    });
    panel.setAttribute('aria-labelledby', tab.id);
    const number = panel.querySelector('.material-number');
    const description = panel.querySelector('p');
    if (number) number.textContent = data[0];
    if (description) description.textContent = data[1];
    animate(panel, [{ opacity: .3, transform: 'translateY(6px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 550, easing: ease });
    scheduleScroll();
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => chooseMaterial(tab));
    tab.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next !== undefined) {
        event.preventDefault();
        tabs[next].focus();
        chooseMaterial(tabs[next]);
      }
    });
  });

  addEventListener('scroll', scheduleScroll, { passive: true });
  addEventListener('resize', scheduleScroll);
  addEventListener('load', scheduleScroll, { once: true });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(scrollFrame);
      scrollFrame = 0;
    } else scheduleScroll();
  });
  scheduleScroll();
})();
