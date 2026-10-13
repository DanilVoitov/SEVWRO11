'use strict';
const products = [
  {id:'suede',name:'Куртка из замши',category:'casual',tag:'EVERYDAY ESSENTIAL',image:'hero.jpg',price:64900,color:'Табачный',hex:'#9a6b43',material:'Отборная натуральная замша · подкладка из вискозы',description:'Лаконичная куртка на молнии с мягким воротником и свободной посадкой. Табачный оттенок сочетается со светлыми брюками, денимом и молочным трикотажем.',sizes:['S','M','L','XL','XXL']},
  {id:'knit',name:'Джемпер фактурной вязки',category:'casual',tag:'SOFT EVERYDAY',image:'knit.jpg',price:24900,color:'Сливочный',hex:'#e0d4bc',material:'Тонкая шерсть мериноса · фактурная вязка',description:'Объёмный трикотаж с круглым вырезом, мягкой линией плеча и широкими манжетами. Самостоятельный образ с брюками или уютный слой под куртку.',sizes:['S','M','L','XL','XXL']},
  {id:'blazer',name:'Пиджак мягкой формы',category:'classic',tag:'RELAXED TAILORING',image:'tailoring.jpg',price:48900,color:'Шоколадный',hex:'#514032',material:'Премиальная костюмная шерсть · мягкая конструкция',description:'Однобортный пиджак с естественной линией плеча и накладными карманами. Носите с трикотажным поло и светлыми брюками или с футболкой и джинсами.',sizes:['S','M','L','XL','XXL']},
  {"id": "trousers-sand", "name": "Брюки из хлопкового твила", "category": "casual", "tag": "COTTON TWILL", "image": "trousers-sand.jpg", "price": 21900, "color": "Песочный", "hex": "#baa17e", "material": "Плотный хлопковый твил · свободная посадка", "description": "Прямые брюки с мягкими складками и комфортной посадкой. Плотный хлопковый твил подчёркивает чистые линии, а песочный оттенок легко сочетается с футболками и замшей.", "sizes": ["46", "48", "50", "52", "54", "56"], "sizeGuide": "Ориентир по обхвату талии: 46 — 78–82 см, 48 — 82–86 см, 50 — 86–90 см, 52 — 90–94 см, 54 — 94–98 см, 56 — 98–102 см. Измеряйте по естественной линии талии."},
  {"id": "trousers-brown", "name": "Шерстяные брюки со складками", "category": "casual", "tag": "SOFT WOOL", "image": "trousers-brown.jpg", "price": 32900, "color": "Шоколадный", "hex": "#5c4535", "material": "Мягкая шерсть · выразительная драпировка", "description": "Шоколадные брюки со складками у пояса и прямыми штанинами. Мягкая шерстяная ткань придаёт силуэту пластичность. Носите со сливочным джемпером или светлой футболкой.", "sizes": ["46", "48", "50", "52", "54", "56"], "sizeGuide": "Ориентир по обхвату талии: 46 — 78–82 см, 48 — 82–86 см, 50 — 86–90 см, 52 — 90–94 см, 54 — 94–98 см, 56 — 98–102 см. Измеряйте по естественной линии талии."},
  {"id": "tee-ivory", "name": "Футболка Ivory", "category": "casual", "tag": "PREMIUM COTTON", "image": "tee-ivory.jpg", "price": 8900, "color": "Молочный", "hex": "#e8dfcc", "material": "Премиальный хлопок · плотное джерси", "description": "Молочная футболка из плотного хлопкового джерси с круглым вырезом и спокойной линией плеча. Чистая форма и приятная фактура делают её основой многослойных образов.", "sizes": ["S", "M", "L", "XL", "XXL"]},
  {"id": "tee-cocoa", "name": "Футболка Cocoa", "category": "casual", "tag": "PREMIUM COTTON", "image": "tee-cocoa.jpg", "price": 8900, "color": "Какао", "hex": "#775443", "material": "Премиальный хлопок · мягкое джерси", "description": "Глубокий оттенок какао и мягкое хлопковое джерси. Свободный крой, аккуратная горловина и минимум деталей — футболка, которую легко сочетать со светлыми брюками и трикотажем.", "sizes": ["S", "M", "L", "XL", "XXL"]},
  {"id": "sweatshirt", "name": "Свитшот свободного кроя", "category": "casual", "tag": "OFF-DUTY COMFORT", "image": "sweatshirt.jpg", "price": 17900, "color": "Тёплый тауп", "hex": "#a08c77", "material": "Плотный хлопковый футер · мягкая фактура", "description": "Расслабленный свитшот со спущенным плечом, круглым вырезом и эластичными манжетами. Плотный хлопковый футер и мягкий оттенок тауп — для спокойных выходных и повседневного ритма.", "sizes": ["S", "M", "L", "XL", "XXL"]},
  {"id": "suit-brown", "name": "Шерстяной костюм Espresso", "category": "classic", "tag": "WOOL SUIT / TWO PIECES", "image": "suit-brown.jpg", "price": 94900, "color": "Эспрессо", "hex": "#493529", "material": "Премиальная костюмная шерсть · комплект из двух вещей", "description": "Костюм-двойка насыщенного оттенка эспрессо: однобортный пиджак и брюки из одной шерстяной ткани. Мягкая конструкция плеча и спокойный силуэт соединяют классическую форму с современным комфортом.", "contents": "В комплект входят пиджак и брюки. Рубашка и обувь в стоимость не включены.", "sizes": ["46", "48", "50", "52", "54", "56"], "sizeGuide": "Размер костюма по обхвату груди: 46 — 92 см, 48 — 96 см, 50 — 100 см, 52 — 104 см, 54 — 108 см, 56 — 112 см. Комплект включает пиджак и брюки одного размера; значения служат ориентиром."},
  {"id": "suit-charcoal", "name": "Шерстяной костюм Graphite", "category": "classic", "tag": "WOOL SUIT / TWO PIECES", "image": "suit-charcoal.jpg", "price": 98900, "color": "Графитовый", "hex": "#55524e", "material": "Тонкая костюмная шерсть · матовая фактура", "description": "Графитовый костюм-двойка из тонкой шерстяной ткани. Однобортный пиджак с аккуратными лацканами и прямые брюки создают сдержанный образ для встреч и особых поводов.", "contents": "В комплект входят пиджак и брюки. Рубашка и обувь в стоимость не включены.", "sizes": ["46", "48", "50", "52", "54", "56"], "sizeGuide": "Размер костюма по обхвату груди: 46 — 92 см, 48 — 96 см, 50 — 100 см, 52 — 104 см, 54 — 108 см, 56 — 112 см. Комплект включает пиджак и брюки одного размера; значения служат ориентиром."}
];

const money = value => new Intl.NumberFormat('ru-RU').format(value) + ' ₽';
const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const productById = new Map(products.map(product => [product.id, product]));
const storageKeys = {wardrobe:'severo:wardrobe:v1', favorites:'severo:favorites:v1'};
const readStorage = (key, fallback) => {try {return JSON.parse(localStorage.getItem(key)) ?? fallback;} catch {return fallback;}};
const writeStorage = (key, value) => {try {localStorage.setItem(key, JSON.stringify(value));} catch { /* The experience remains usable when storage is unavailable. */ }};
function validateWardrobe(value) {
  if (!Array.isArray(value)) return [];
  const valid = [];
  for (const item of value.slice(0, 100)) {
    if (!item || typeof item !== 'object') continue;
    const product = productById.get(item.id);
    if (!product || !product.sizes.includes(item.size) || !Number.isInteger(item.quantity) || item.quantity < 1 || item.quantity > 10) continue;
    const existing = valid.find(entry => entry.id === item.id && entry.size === item.size);
    if (existing) existing.quantity = Math.min(10, existing.quantity + item.quantity);
    else valid.push({id:item.id, size:item.size, quantity:item.quantity});
  }
  return valid;
}
const cart = validateWardrobe(readStorage(storageKeys.wardrobe, []));
const storedFavorites = readStorage(storageKeys.favorites, []);
const favorites = new Set(Array.isArray(storedFavorites) ? storedFavorites.filter(id => productById.has(id)) : []);
const productDialog = document.querySelector('#product-dialog');
const orderDialog = document.querySelector('#order-dialog');
const lookDialog = document.querySelector('#look-dialog');
const productContent = document.querySelector('#product-content');
const orderContent = document.querySelector('#order-content');
const lookContent = document.querySelector('#look-content');
const productsContainer = document.querySelector('#products');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const dialogOpeners = new WeakMap();
let currentProduct = null;
let currentSize = null;
let activeFilter = 'all';
let toastTimer;

const heartIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/></svg>';
function picture(product, sizes = '(max-width: 700px) 50vw, 33vw', eager = false) {
  const stem = product.image.replace(/\.jpg$/i, '');
  return `<picture><source type="image/webp" srcset="assets/${stem}-640.webp 640w, assets/${stem}-1280.webp ${stem === 'hero' ? 1280 : 1024}w" sizes="${sizes}"><img src="assets/${product.image}" alt="${escapeHTML(product.name)}, ${escapeHTML(product.color.toLowerCase())} оттенок" loading="${eager ? 'eager' : 'lazy'}" decoding="async" width="1024" height="1365"></picture>`;
}
function favoriteButton(product, extraClass = '') {
  return `<button class="favorite-button ${extraClass}" data-favorite="${product.id}" aria-pressed="${favorites.has(product.id)}" aria-label="${favorites.has(product.id) ? 'Убрать из избранного' : 'В избранное'}: ${escapeHTML(product.name)}">${heartIcon}</button>`;
}
if (productsContainer && !productsContainer.querySelector('.product')) {
  productsContainer.innerHTML = products.map(product => `<article class="product ${product.contents ? 'suit-product' : ''}" data-id="${product.id}" data-category="${product.category}"><a href="#product=${product.id}" class="product-image" data-product="${product.id}" aria-label="Подробнее: ${escapeHTML(product.name)}">${picture(product)}<span class="product-tag">${product.tag}</span></a>${favoriteButton(product)}<div class="product-info"><h3><a href="#product=${product.id}" data-product="${product.id}">${escapeHTML(product.name)}</a></h3><span class="price">${money(product.price)}</span></div><p class="product-meta">${escapeHTML(product.material.split(' · ')[0])}</p><div class="product-bottom"><span aria-label="Цвет: ${product.color}"><i class="swatch" style="background:${product.hex}"></i>${product.color}</span><a class="choose" href="#product=${product.id}" data-product="${product.id}">Подробнее <span aria-hidden="true">↗</span></a></div></article>`).join('');
}

function toast(message) {
  const element = document.querySelector('#toast');
  if (!element) return;
  clearTimeout(toastTimer);
  element.textContent = message;
  element.classList.add('visible');
  toastTimer = setTimeout(() => element.classList.remove('visible'), 3500);
}
function updateBodyLock() {
  document.body.style.overflow = document.querySelector('dialog[open]') || document.querySelector('#menu-toggle[aria-expanded="true"]') ? 'hidden' : '';
}
function canFocus(element) {
  return element instanceof HTMLElement && element.isConnected && element.matches('a[href], button, input, select, textarea, [tabindex]') && !element.matches(':disabled') && !element.closest('[hidden]') && (!element.closest('dialog') || element.closest('dialog').open);
}
function restoreFocus(dialog) {
  let element = dialogOpeners.get(dialog);
  if (!canFocus(element)) element = [...document.querySelectorAll(`[data-product="${currentProduct?.id || ''}"]`)].find(canFocus) || document.querySelector(`[data-filter="${activeFilter}"]`);
  if (canFocus(element)) element.focus({preventScroll:true});
}
function openDialog(dialog, opener = document.activeElement) {
  if (!dialog) return;
  if (!dialog.open) dialogOpeners.set(dialog, opener);
  document.querySelectorAll('dialog[open]').forEach(other => {if (other !== dialog) other.close();});
  closeMenu(false);
  if (!dialog.open) dialog.showModal();
  updateBodyLock();
}
function productIdFromHash() {
  if (!location.hash.startsWith('#product=')) return null;
  try {return decodeURIComponent(location.hash.slice(9));} catch {return null;}
}
function plainHistoryState() {
  return history.state && typeof history.state === 'object' ? {...history.state} : {};
}
function clearProductRoute(useBack = false) {
  if (!productIdFromHash()) return;
  const state = plainHistoryState();
  if (useBack && state.severoProduct === true) {history.back(); return;}
  const previousHash = typeof state.severoReturnHash === 'string' && !state.severoReturnHash.startsWith('#product=') ? state.severoReturnHash : '';
  delete state.severoProduct;
  delete state.severoReturnHash;
  history.replaceState(state, '', location.pathname + location.search + previousHash);
}
function closeDialog(dialog) {
  if (!dialog?.open) return;
  dialog.close();
  if (dialog === productDialog) clearProductRoute(true);
  restoreFocus(dialog);
  updateBodyLock();
}
document.querySelectorAll('dialog').forEach(dialog => {
  dialog.addEventListener('cancel', event => {event.preventDefault(); closeDialog(dialog);});
  dialog.addEventListener('close', updateBodyLock);
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeDialog(dialog);
  });
});
function productCare(product) {
  if (product.id === 'suede') return 'В концепции коллекции: специализированная чистка замши, сухая щётка и хранение вдали от влаги. Для реальной вещи ориентируйтесь на её этикетку.';
  if (/шерсть|меринос/i.test(product.material)) return 'В концепции коллекции: бережная чистка и хранение в сложенном виде для трикотажа. Режим ухода за реальной вещью всегда указан на этикетке.';
  return 'В концепции коллекции: деликатная стирка при низкой температуре, без отбеливания. Для реальной вещи проверяйте рекомендации на этикетке.';
}
function renderProduct(id, opener) {
  const product = productById.get(id);
  if (!product || !productContent || !productDialog) return;
  currentProduct = product;
  currentSize = null;
  productContent.innerHTML = `<div class="product-layout"><div class="product-visual"><button class="product-photo ${product.contents ? 'full-outfit' : ''}" data-zoom data-photo-id="${product.id}" aria-pressed="false" aria-label="Увеличить фотографию: ${escapeHTML(product.name)}">${picture(product, '(max-width: 760px) 100vw, 50vw', true)}<span class="zoom-hint">Рассмотреть ближе <span aria-hidden="true">+</span></span></button>${favoriteButton(product, 'modal-favorite')}</div><div class="product-copy"><p class="eyebrow">${product.category === 'casual' ? 'EVERYDAY ESSENTIALS' : 'RELAXED TAILORING'}</p><h2 id="product-title">${escapeHTML(product.name)}</h2><p class="modal-price">${money(product.price)}</p><p class="modal-description">${escapeHTML(product.description)}</p><p class="product-material">${escapeHTML(product.material)}<br><span class="swatch" style="background:${product.hex}"></span> ${escapeHTML(product.color)}</p>${product.contents ? `<p class="modal-description">${escapeHTML(product.contents)}</p>` : ''}<fieldset><legend>Выберите размер</legend><div class="sizes">${product.sizes.map(size => `<button class="size" data-size="${size}" aria-pressed="false">${size}</button>`).join('')}</div></fieldset><p class="selection-error" role="alert" id="selection-error"></p><button class="button modal-add" id="add-product">В мой гардероб <span aria-hidden="true">↗</span></button><details class="size-guide"><summary>Ориентир по размеру</summary><p>${escapeHTML(product.sizeGuide || 'Ориентир по обхвату груди: S — 92–96 см, M — 96–100 см, L — 100–104 см, XL — 104–110 см, XXL — 110–116 см. Измеряйте горизонтально по самой широкой части груди. Посадка моделей — свободная.')}</p><p>Размерная сетка — часть демонстрации, это не замеры реального изделия.</p></details><details class="size-guide"><summary>Материал и уход</summary><p>${escapeHTML(productCare(product))}</p></details><p class="demo-note">Портфолио-концепт. Изображения, характеристики и цены иллюстративны. Ваш выбор сохраняется в этом браузере.</p></div></div>`;
  openDialog(productDialog, opener);
  productDialog.scrollTop = 0;
}
function showProduct(id, opener = document.activeElement) {
  if (!productById.has(id)) return;
  const state = plainHistoryState();
  if (productIdFromHash()) {
    history.replaceState(state, '', '#product=' + encodeURIComponent(id));
  } else {
    state.severoProduct = true;
    state.severoReturnHash = location.hash;
    history.pushState(state, '', '#product=' + encodeURIComponent(id));
  }
  renderProduct(id, opener);
}
function syncProductRoute() {
  const id = productIdFromHash();
  if (id && productById.has(id)) {
    if (!productDialog?.open || currentProduct?.id !== id) renderProduct(id, document.activeElement);
  } else if (productDialog?.open) {
    productDialog.close();
    restoreFocus(productDialog);
    updateBodyLock();
  }
}
window.addEventListener('hashchange', syncProductRoute);

function visibleProducts(filter = activeFilter) {
  return products.filter(product => filter === 'all' || (filter === 'favorites' ? favorites.has(product.id) : product.category === filter));
}
function updateFavorites() {
  document.querySelectorAll('[data-favorite]').forEach(button => {
    const product = productById.get(button.dataset.favorite);
    if (!product) return;
    const selected = favorites.has(product.id);
    button.setAttribute('aria-pressed', String(selected));
    button.setAttribute('aria-label', `${selected ? 'Убрать из избранного' : 'В избранное'}: ${product.name}`);
  });
}
function applyFilter(filter, announce = false) {
  if (!['all', 'casual', 'classic', 'favorites'].includes(filter)) filter = 'all';
  activeFilter = filter;
  const visibleIds = new Set(visibleProducts().map(product => product.id));
  productsContainer?.querySelectorAll('.product').forEach(card => {
    const id = card.dataset.id || card.querySelector('[data-product]')?.dataset.product;
    card.hidden = !visibleIds.has(id);
  });
  document.querySelectorAll('[data-filter]').forEach(button => {
    const selected = button.dataset.filter === filter;
    button.classList.toggle('active', selected);
    button.setAttribute('aria-pressed', String(selected));
    const count = button.querySelector('sup');
    if (count) count.textContent = String(visibleProducts(button.dataset.filter).length).padStart(2, '0');
  });
  const counter = document.querySelector('#collection-count');
  if (counter) counter.textContent = `${String(visibleIds.size).padStart(2, '0')} ${visibleIds.size === 1 ? 'вещь' : visibleIds.size >= 2 && visibleIds.size <= 4 ? 'вещи' : 'вещей'}`;
  const empty = document.querySelector('#collection-empty');
  if (empty) empty.hidden = visibleIds.size !== 0;
  if (announce) document.dispatchEvent(new CustomEvent('severo:filter', {detail:{filter, ids:[...visibleIds]}}));
}
function toggleFavorite(id, button) {
  if (!productById.has(id)) return;
  const selected = !favorites.has(id);
  selected ? favorites.add(id) : favorites.delete(id);
  writeStorage(storageKeys.favorites, [...favorites]);
  updateFavorites();
  applyFilter(activeFilter, true);
  if (button?.closest('.product')?.hidden) document.querySelector('[data-filter="favorites"]')?.focus({preventScroll:true});
  toast(selected ? 'Вещь сохранена в избранном' : 'Вещь убрана из избранного');
}
function updateCount() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.querySelectorAll('.bag-count').forEach(element => {element.textContent = count; element.hidden = count === 0;});
}
function saveWardrobe() {writeStorage(storageKeys.wardrobe, cart); updateCount();}
function addItem(id, size) {
  const product = productById.get(id);
  if (!product || !product.sizes.includes(size)) throw new Error('Выберите существующую модель и размер.');
  const existing = cart.find(item => item.id === id && item.size === size);
  if (existing) {
    if (existing.quantity >= 10) throw new Error('В гардеробе уже 10 таких вещей одного размера.');
    existing.quantity++;
  } else cart.push({id, size, quantity:1});
  saveWardrobe();
}
function cartTotal() {return cart.reduce((sum, item) => sum + productById.get(item.id).price * item.quantity, 0);}
function showOrder(opener = document.activeElement) {
  clearProductRoute();
  renderOrder();
  openDialog(orderDialog, opener);
}
function renderOrder(focusIntent) {
  if (!orderContent) return;
  if (!cart.length) {
    orderContent.innerHTML = '<div class="empty-order"><span class="empty-symbol" aria-hidden="true">＋</span><h3>Место для ваших сочетаний</h3><p>Выберите вещь и размер — здесь соберётся ваш персональный гардероб.</p><button class="button" id="browse-collection">К коллекции <span aria-hidden="true">↗</span></button></div><p class="order-note">Интерактивный концепт для портфолио. Покупки и оплата не оформляются.</p>';
  } else {
    orderContent.innerHTML = cart.map((item, index) => {
      const product = productById.get(item.id);
      return `<div class="order-item" data-item-key="${item.id}:${item.size}"><a class="order-image" href="#product=${item.id}" data-product="${item.id}" aria-label="Подробнее: ${escapeHTML(product.name)}">${picture(product, '100px')}</a><div class="order-item-copy"><h3>${escapeHTML(product.name)}</h3><p>${escapeHTML(product.color)} · размер ${item.size}</p><div class="quantity"><button data-quantity="${index}" data-delta="-1" aria-label="Уменьшить количество: ${escapeHTML(product.name)}, размер ${item.size}" ${item.quantity === 1 ? 'disabled' : ''}>−</button><span aria-label="Количество">${item.quantity}</span><button data-quantity="${index}" data-delta="1" aria-label="Увеличить количество: ${escapeHTML(product.name)}, размер ${item.size}" ${item.quantity === 10 ? 'disabled' : ''}>+</button></div><button class="remove" data-remove="${index}" aria-label="Убрать: ${escapeHTML(product.name)}, размер ${item.size}">Убрать</button></div><span class="price">${money(product.price * item.quantity)}</span></div>`;
    }).join('') + `<div class="order-total"><span>Сумма образа</span><strong>${money(cartTotal())}</strong></div><div class="order-actions"><button class="button" id="download-order">Сохранить подборку <span aria-hidden="true">↓</span></button><button class="button secondary" id="copy-order">Скопировать</button><button class="choose" id="browse-collection">Продолжить выбор <span aria-hidden="true">↗</span></button></div><p class="order-note">Ваш гардероб сохраняется в этом браузере. Цены иллюстративны; подборка не отправляется продавцу.</p>`;
  }
  if (focusIntent) {
    const rows = [...orderContent.querySelectorAll('.order-item')];
    const row = rows.find(element => element.dataset.itemKey === focusIntent.key) || rows[Math.min(focusIntent.index, rows.length - 1)];
    let button = focusIntent.type === 'quantity' ? row?.querySelector(`[data-delta="${focusIntent.delta}"]:not(:disabled)`) || row?.querySelector('[data-quantity]:not(:disabled)') : row?.querySelector('[data-remove]');
    (button || orderContent.querySelector('#browse-collection'))?.focus({preventScroll:true});
  }
}
function orderText() {
  return 'SEVERO — мой гардероб\n\n' + cart.map(item => {
    const product = productById.get(item.id);
    return `${product.name}\nЦвет: ${product.color}. Размер: ${item.size}. Количество: ${item.quantity}.\n${money(product.price * item.quantity)}`;
  }).join('\n\n') + `\n\nСумма образа: ${money(cartTotal())}\n\nПортфолио-концепт. Характеристики и цены иллюстративны. Подборка сохранена для вас, покупки не оформляются.`;
}

const looks = {
  city:{title:'В ритме города',tag:'01 / CITY ROUTINE',description:'Замша, молочный хлопок и светлый твил. Три фактуры, которые легко находят общий язык.',image:'suede',items:['suede','tee-ivory','trousers-sand']},
  meeting:{title:'Новый взгляд на классику',tag:'02 / MODERN MEETING',description:'Мягкая форма пиджака, спокойный оттенок футболки и шерстяные брюки. Собранный образ без лишней строгости.',image:'blazer',items:['blazer','tee-cocoa','trousers-brown']},
  weekend:{title:'Свободный день',tag:'03 / SLOW WEEKEND',description:'Объёмная вязка и мягкая шерсть. Тёплая палитра для планов, которые можно не строить.',image:'knit',items:['knit','trousers-brown']}
};
function showLook(id, opener = document.activeElement) {
  const look = looks[id];
  if (!look || !lookContent || !lookDialog) return;
  clearProductRoute();
  lookContent.innerHTML = `<div class="look-dialog-layout"><div class="look-dialog-image">${picture(productById.get(look.image), '(max-width: 760px) 100vw, 45vw', true)}</div><div class="look-dialog-copy"><p class="eyebrow">${look.tag}</p><h2 id="look-title">${look.title}</h2><p>${look.description}</p><div class="look-items">${look.items.map(productId => {
    const product = productById.get(productId);
    return `<a class="look-item" href="#product=${product.id}" data-product="${product.id}">${picture(product, '76px')}<span><strong>${escapeHTML(product.name)}</strong><small>${money(product.price)} · ${escapeHTML(product.color)}</small></span><span aria-hidden="true">↗</span></a>`;
  }).join('')}</div><p class="demo-note">Идея сочетания по цвету и фактуре. На фотографии — визуальное настроение образа. Откройте каждую вещь, чтобы выбрать свой размер.</p></div></div>`;
  openDialog(lookDialog, opener);
}
function closeMenu(restore = true) {
  const toggle = document.querySelector('#menu-toggle');
  const menu = document.querySelector('#mobile-menu');
  if (!toggle || !menu || toggle.getAttribute('aria-expanded') !== 'true') return;
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Открыть меню');
  menu.hidden = true;
  document.body.classList.remove('menu-open');
  updateBodyLock();
  if (restore) toggle.focus({preventScroll:true});
}
function scrollToCollection() {
  const section = document.querySelector('#collection');
  section?.scrollIntoView({behavior:(reducedMotion.matches || document.documentElement.classList.contains('motion-off')) ? 'instant' : 'smooth'});
  document.querySelector('[data-filter="all"]')?.focus({preventScroll:true});
}
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeMenu();
  if (event.key === 'Tab' && document.querySelector('#menu-toggle[aria-expanded="true"]')) {
    const controls = [document.querySelector('#menu-toggle'), ...document.querySelectorAll('#mobile-menu a, #mobile-menu button')].filter(canFocus);
    const first = controls[0], last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) {event.preventDefault(); last?.focus();}
    else if (!event.shiftKey && document.activeElement === last) {event.preventDefault(); first?.focus();}
  }
});
document.addEventListener('click', async event => {
  const target = event.target.closest('button, a');
  if (!target) return;
  if (target.hasAttribute('data-close')) {closeDialog(target.closest('dialog')); return;}
  if (target.dataset.product) {
    if (target instanceof HTMLAnchorElement && (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0)) return;
    event.preventDefault(); showProduct(target.dataset.product, target); return;
  }
  if (target.dataset.favorite) {toggleFavorite(target.dataset.favorite, target); return;}
  if (target.dataset.look) {event.preventDefault(); showLook(target.dataset.look, target); return;}
  if (target.hasAttribute('data-order')) {event.preventDefault(); showOrder(target); return;}
  if (target.dataset.filter) {applyFilter(target.dataset.filter, true); return;}
  if (target.dataset.size) {
    if (!currentProduct?.sizes.includes(target.dataset.size)) return;
    currentSize = target.dataset.size;
    productContent.querySelectorAll('[data-size]').forEach(button => button.setAttribute('aria-pressed', String(button === target)));
    document.querySelector('#selection-error').textContent = '';
    document.querySelector('#add-product').innerHTML = 'В мой гардероб <span aria-hidden="true">↗</span>';
  }
  if (target.hasAttribute('data-zoom')) {
    const zoomed = target.getAttribute('aria-pressed') !== 'true';
    target.setAttribute('aria-pressed', String(zoomed));
    target.classList.toggle('zoomed', zoomed);
    target.setAttribute('aria-label', `${zoomed ? 'Уменьшить' : 'Увеличить'} фотографию: ${currentProduct.name}`);
    target.querySelector('.zoom-hint').innerHTML = zoomed ? 'Вернуть общий план <span aria-hidden="true">−</span>' : 'Рассмотреть ближе <span aria-hidden="true">+</span>';
  }
  if (target.id === 'add-product') {
    if (!currentSize) {
      document.querySelector('#selection-error').textContent = 'Выберите размер, чтобы добавить вещь.';
      productContent.querySelector('.size')?.focus();
      return;
    }
    try {addItem(currentProduct.id, currentSize); toast('Вещь добавлена в ваш гардероб'); target.textContent = 'Добавлено в гардероб ✓';}
    catch (error) {document.querySelector('#selection-error').textContent = error.message;}
  }
  if (target.id === 'browse-collection') {closeDialog(orderDialog); scrollToCollection();}
  if (target.dataset.remove !== undefined) {
    const index = Number(target.dataset.remove);
    if (!Number.isInteger(index) || !cart[index]) return;
    const key = `${cart[index].id}:${cart[index].size}`;
    cart.splice(index, 1); saveWardrobe(); renderOrder({key, index, type:'remove'}); toast('Вещь убрана из гардероба');
  }
  if (target.dataset.quantity !== undefined) {
    const index = Number(target.dataset.quantity), delta = Number(target.dataset.delta), item = cart[index];
    if (!Number.isInteger(index) || !item || ![-1, 1].includes(delta)) return;
    item.quantity = Math.max(1, Math.min(10, item.quantity + delta));
    saveWardrobe(); renderOrder({key:`${item.id}:${item.size}`, index, type:'quantity', delta});
  }
  if (target.id === 'download-order') {
    const url = URL.createObjectURL(new Blob(['\uFEFF' + orderText()], {type:'text/plain;charset=utf-8'}));
    const link = document.createElement('a'); link.href = url; link.download = 'SEVERO-мой-гардероб.txt';
    document.body.append(link); link.click(); link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000); toast('Подборка сохранена в файл');
  }
  if (target.id === 'copy-order') {
    try {await navigator.clipboard.writeText(orderText()); toast('Подборка скопирована');}
    catch {toast('Не удалось скопировать. Сохраните подборку в файл.');}
  }
  if (target.id === 'menu-toggle') {
    const menu = document.querySelector('#mobile-menu');
    if (!menu) return;
    if (target.getAttribute('aria-expanded') === 'true') closeMenu();
    else {
      target.setAttribute('aria-expanded', 'true'); target.setAttribute('aria-label', 'Закрыть меню');
      menu.hidden = false; menu.style.top = document.querySelector('.site-header').getBoundingClientRect().bottom + 'px'; document.body.classList.add('menu-open'); updateBodyLock();
      menu.querySelector('a, button')?.focus({preventScroll:true});
    }
  }
  if (target.closest('#mobile-menu') && target instanceof HTMLAnchorElement && target.hash && !target.dataset.product) {
    const section = document.getElementById(target.hash.slice(1));
    closeMenu(false);
    if (section) {
      event.preventDefault(); history.pushState(plainHistoryState(), '', target.hash);
      section.scrollIntoView({behavior:(reducedMotion.matches || document.documentElement.classList.contains('motion-off')) ? 'instant' : 'smooth'});
      section.setAttribute('tabindex', '-1'); section.focus({preventScroll:true});
    }
  }
  if (target instanceof HTMLAnchorElement && !target.closest('#mobile-menu')) closeMenu(false);
});
window.addEventListener('resize', () => {if (window.innerWidth > 680) closeMenu(false);});
window.addEventListener('storage', event => {
  if (event.key === storageKeys.wardrobe || event.key === null) {
    cart.splice(0, cart.length, ...validateWardrobe(readStorage(storageKeys.wardrobe, [])));
    updateCount(); if (orderDialog?.open) renderOrder();
  }
  if (event.key === storageKeys.favorites || event.key === null) {
    const value = readStorage(storageKeys.favorites, []); favorites.clear();
    if (Array.isArray(value)) value.forEach(id => {if (productById.has(id)) favorites.add(id);});
    updateFavorites(); applyFilter(activeFilter, true);
  }
});
updateCount(); updateFavorites(); applyFilter('all'); syncProductRoute();

if (document.modelContext?.registerTool) {
  const lifecycle = new AbortController();
  const register = tool => {try {Promise.resolve(document.modelContext.registerTool(tool, {signal:lifecycle.signal})).catch(() => {});} catch {}};
  register({name:'get_severo_collection',title:'Посмотреть коллекцию SEVERO',description:'Показывает демонстрационную коллекцию, иллюстративные цены, доступные размеры и персональный гардероб. Это портфолио-концепт, покупки не оформляются.',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:true,untrustedContentHint:false},execute:() => ({demo:true, products:products.map(({id,name,price,color,sizes}) => ({id,name,price,currency:'RUB',color,sizes})),wardrobe:cart.map(item => ({...item})),favorites:[...favorites],total:cartTotal()})});
  register({name:'stage_severo_order_item',title:'Добавить вещь в мой гардероб',description:'Сохраняет одну вещь выбранного размера в локальный гардероб и открывает подборку. Покупка не совершается, данные продавцу не отправляются.',inputSchema:{type:'object',properties:{productId:{type:'string',enum:products.map(product => product.id)},size:{type:'string',enum:[...new Set(products.flatMap(product => product.sizes))]}},required:['productId','size'],additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:false},execute:input => {if (!input || typeof input !== 'object') throw new Error('Нужны модель и размер'); addItem(input.productId, input.size); showOrder(); return {status:'saved_locally',wardrobe:cart.map(item => ({...item})),total:cartTotal(),submitted:false,demo:true};}});
  window.addEventListener('pagehide', () => lifecycle.abort(), {once:true});
}
