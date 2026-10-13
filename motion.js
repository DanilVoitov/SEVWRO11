'use strict';
(() => {
  const preference = matchMedia('(prefers-reduced-motion: reduce)');
  let manuallyDisabled = false;
  try { manuallyDisabled = localStorage.getItem('severo:motion') === 'off'; } catch {}
  const disabled = () => preference.matches || manuallyDisabled;
  const activeAnimations = new Set();
  function animate(element, frames, options) {
    if (!element || disabled() || !element.animate) return null;
    const animation = element.animate(frames, options);
    activeAnimations.add(animation);
    animation.finished.catch(() => {}).finally(() => activeAnimations.delete(animation));
    return animation;
  }
  const frames = [...document.querySelectorAll('.hero-frame')];
  const selectors = [...document.querySelectorAll('[data-slide]')];
  const pause = document.querySelector('.slide-pause');
  const caption = document.querySelector('#slide-caption');
  const captions = [
    ['Спокойная уверенность', 'Замша / табачный оттенок'],
    ['В своём ритме', 'Трикотаж / сливочный оттенок'],
    ['За рамками формального', 'Мягкая шерсть / шоколадный оттенок']
  ];
  let current = 0;
  let paused = false;
  let heroVisible = true;
  let timer;
  let progressAnimation;
  let driftAnimation;
  const canPlay = () => !disabled() && !paused && heroVisible && !document.hidden;
  function syncPause() {
    if (!pause) return;
    const stopped = paused || disabled();
    pause.setAttribute('aria-pressed', String(stopped));
    pause.setAttribute('aria-label', stopped ? 'Включить смену образов' : 'Остановить смену образов');
    pause.firstElementChild.textContent = stopped ? '▷' : 'Ⅱ';
    pause.disabled = disabled();
  }
  function stopCycle() {
    clearTimeout(timer);
    progressAnimation?.cancel();
    driftAnimation?.cancel();
    progressAnimation = null;
    driftAnimation = null;
  }
  function schedule() {
    clearTimeout(timer);
    if (!canPlay()) {progressAnimation?.pause(); driftAnimation?.pause(); return;}
    if (progressAnimation && Number(progressAnimation.currentTime) < 7200) {
      progressAnimation.play(); driftAnimation?.play();
      timer = setTimeout(() => changeSlide((current + 1) % frames.length), 7200 - Number(progressAnimation.currentTime));
      return;
    }
    stopCycle();
    progressAnimation = animate(selectors[current]?.firstElementChild, [{transform:'scaleX(0)'},{transform:'scaleX(1)'}], {duration:7200,easing:'linear',fill:'forwards'});
    driftAnimation = animate(frames[current]?.querySelector('img'), [{transform:'scale(1.065)'},{transform:'scale(1.01)'}], {duration:8400,easing:'linear',fill:'forwards'});
    timer = setTimeout(() => changeSlide((current + 1) % frames.length), 7200);
  }
  function changeSlide(index, manual = false) {
    if (!frames[index]) return;
    stopCycle();
    if (manual) paused = true;
    frames.forEach((frame, i) => {
      frame.classList.toggle('current', i === index);
      if (i === index) frame.removeAttribute('aria-hidden'); else frame.setAttribute('aria-hidden', 'true');
    });
    selectors.forEach((button, i) => {
      button.classList.toggle('selected', i === index);
      button.setAttribute('aria-pressed', String(i === index));
    });
    current = index;
    document.querySelector('#slide-number').textContent = `0${index + 1} / 03`;
    caption.replaceChildren(document.createTextNode(captions[index][0]));
    const sub = document.createElement('small'); sub.textContent = captions[index][1]; caption.append(sub);
    animate(caption, [{opacity:0,transform:'translateY(8px)'},{opacity:1,transform:'translateY(0)'}], {duration:650,easing:'ease-out'});
    syncPause(); schedule();
  }
  selectors.forEach(button => button.addEventListener('click', () => changeSlide(Number(button.dataset.slide), true)));
  pause?.addEventListener('click', () => {paused = !paused; syncPause(); schedule();});
  document.addEventListener('visibilitychange', schedule);
  if ('IntersectionObserver' in window) {
    const heroObserver = new IntersectionObserver(entries => {heroVisible = entries[0].isIntersecting; schedule();}, {threshold:.12});
    heroObserver.observe(document.querySelector('.hero'));
  }
  function syncMotion() {
    document.documentElement.classList.toggle('motion-off', disabled());
    document.querySelectorAll('[data-motion-toggle]').forEach(button => {
      button.setAttribute('aria-pressed', String(disabled()));
      button.textContent = disabled() ? 'Анимация: выкл.' : 'Анимация: вкл.';
      button.disabled = preference.matches;
      button.title = preference.matches ? 'Уменьшение движения включено в настройках устройства' : 'Управление анимацией сайта';
    });
    if (disabled()) {stopCycle(); activeAnimations.forEach(animation => animation.cancel());}
    syncPause(); schedule();
  }
  document.querySelectorAll('[data-motion-toggle]').forEach(button => button.addEventListener('click', () => {
    manuallyDisabled = !manuallyDisabled;
    try {localStorage.setItem('severo:motion', manuallyDisabled ? 'off' : 'on');} catch {}
    syncMotion();
  }));
  preference.addEventListener('change', syncMotion);
  syncMotion();
  document.querySelectorAll('[data-intro]').forEach((element, index) => {
    animate(element, [{opacity:0,transform:'translateY(18px)'},{opacity:1,transform:'translateY(0)'}], {duration:1000,delay:index * 110,easing:'cubic-bezier(.22,1,.36,1)',fill:'backwards'});
  });
  if ('IntersectionObserver' in window) {
    const reveal = new IntersectionObserver(entries => {
      entries.forEach((entry, i) => {
        if (!entry.isIntersecting) return;
        animate(entry.target, [{opacity:0,transform:'translateY(25px)'},{opacity:1,transform:'translateY(0)'}], {duration:850,delay:Math.min(i * 85,255),easing:'cubic-bezier(.22,1,.36,1)',fill:'backwards'});
        reveal.unobserve(entry.target);
      });
    }, {threshold:.08});
    document.querySelectorAll('[data-reveal], .product').forEach(element => reveal.observe(element));
  }
  document.addEventListener('severo:filter', () => {
    document.querySelectorAll('.product:not([hidden])').forEach((card, index) => {
      card.getAnimations().forEach(animation => animation.cancel());
      animate(card, [{opacity:.2,transform:'translateY(12px)'},{opacity:1,transform:'translateY(0)'}], {duration:450,delay:Math.min(index * 35,180),easing:'ease-out',fill:'backwards'});
    });
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
    if (!data) return;
    tabs.forEach(button => {const selected = button === tab; button.setAttribute('aria-selected',String(selected)); button.tabIndex = selected ? 0 : -1;});
    panel.setAttribute('aria-labelledby', tab.id);
    panel.querySelector('.material-number').textContent = data[0];
    panel.querySelector('p').textContent = data[1];
    panel.getAnimations().forEach(animation => animation.cancel());
    animate(panel, [{opacity:0,transform:'translateY(6px)'},{opacity:1,transform:'translateY(0)'}], {duration:350,easing:'ease-out'});
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => chooseMaterial(tab));
    tab.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next !== undefined) {event.preventDefault(); tabs[next].focus(); chooseMaterial(tabs[next]);}
    });
  });
  const header = document.querySelector('.site-header');
  const progress = document.querySelector('.reading-progress');
  let scrollTicking = false;
  function updateScroll() {
    const available = document.documentElement.scrollHeight - innerHeight;
    progress.style.transform = `scaleX(${available > 0 ? Math.min(1, scrollY / available) : 0})`;
    header.classList.toggle('scrolled', scrollY > 30);
    scrollTicking = false;
  }
  addEventListener('scroll', () => {if (!scrollTicking) {scrollTicking = true; requestAnimationFrame(updateScroll);}}, {passive:true});
  addEventListener('resize', updateScroll);
  updateScroll();
})();
