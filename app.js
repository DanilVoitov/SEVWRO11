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
document.querySelectorAll('[data-filter]').forEach(button=>{const filter=button.dataset.filter;button.querySelector('sup').textContent=String(products.filter(p=>filter==='all'||p.category===filter).length).padStart(2,'0');});
const money=value=>new Intl.NumberFormat('ru-RU').format(value)+' ₽';
const cart=[];
const productDialog=document.querySelector('#product-dialog');
const orderDialog=document.querySelector('#order-dialog');
const productContent=document.querySelector('#product-content');
const orderContent=document.querySelector('#order-content');
let currentProduct=null;
let currentSize=null;
let toastTimer;

document.querySelector('#products').innerHTML=products.map(p=>`<article class="product ${p.contents?'suit-product':''}" data-category="${p.category}"><button class="product-image" data-product="${p.id}" aria-label="Подробнее: ${p.name}"><img src="assets/${p.image}" alt="${p.name}, ${p.color.toLowerCase()} оттенок" loading="lazy" width="1024" height="1365"><span class="product-tag">${p.tag}</span></button><div class="product-info"><h3>${p.name}</h3><span class="price">${money(p.price)}</span></div><p class="product-meta">${p.material.split(' · ')[0]}</p><div class="product-bottom"><span aria-label="Цвет: ${p.color}"><i class="swatch" style="background:${p.hex}"></i></span><button class="choose" data-product="${p.id}">Выбрать размер</button></div></article>`).join('');

function toast(message){const el=document.querySelector('#toast');clearTimeout(toastTimer);el.textContent=message;el.classList.add('visible');toastTimer=setTimeout(()=>el.classList.remove('visible'),3500);}
function openDialog(dialog){document.querySelectorAll('dialog[open]').forEach(d=>d.close());dialog.showModal();document.body.style.overflow='hidden';}
document.querySelectorAll('dialog').forEach(dialog=>{
  dialog.querySelector('[data-close]').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('close',()=>{if(!document.querySelector('dialog[open]'))document.body.style.overflow='';});
  dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
});
function showProduct(id){
  const p=products.find(p=>p.id===id);if(!p)throw new Error('Неизвестная модель');
  currentProduct=p;currentSize=null;
  productContent.innerHTML=`<img class="modal-image ${p.contents?'full-outfit':''}" src="assets/${p.image}" alt="${p.name}"><p class="eyebrow">${p.category==='casual'?'CASUAL COLLECTION':'RELAXED TAILORING'}</p><h2 id="product-title">${p.name}</h2><p>${money(p.price)}</p><p class="modal-description">${p.description}</p><p class="modal-description">${p.material}<br>Цвет: ${p.color}. ${p.contents||'В заказ входит только выбранная вещь.'}</p><fieldset><legend>Выберите размер</legend><div class="sizes">${p.sizes.map(size=>`<button class="size" data-size="${size}" aria-pressed="false">${size}</button>`).join('')}</div></fieldset><details class="size-guide"><summary>Как подобрать размер</summary><p>${p.sizeGuide||'Ориентир по обхвату груди: S — 92–96 см, M — 96–100 см, L — 100–104 см, XL — 104–110 см, XXL — 110–116 см. Измеряйте горизонтально по самой широкой части груди. Посадка моделей — свободная.'}</p></details><button class="button modal-add" id="add-product">Добавить в заказ</button><p class="selection-error" role="alert" id="selection-error"></p>`;
  openDialog(productDialog);
}
function addItem(id,size){
  const p=products.find(p=>p.id===id);if(!p||!p.sizes.includes(size))throw new Error('Выберите существующую модель и размер');
  const found=cart.find(item=>item.id===id&&item.size===size);
  if(found){if(found.quantity>=10)throw new Error('Максимум 10 одинаковых вещей одного размера');found.quantity++;}else cart.push({id,size,quantity:1});
  updateCount();
}
function updateCount(){const count=cart.reduce((sum,item)=>sum+item.quantity,0);document.querySelectorAll('.bag-count').forEach(el=>{el.textContent=count;el.hidden=count===0;});}
function showOrder(){renderOrder();openDialog(orderDialog);}
function renderOrder(){
  if(!cart.length){orderContent.innerHTML='<div class="empty-order"><p>Начните с вещи, которая вам близка. Выберите модель и размер — здесь появится состав вашего заказа.</p><button class="button" id="browse-collection">Выбрать одежду</button></div>';return;}
  orderContent.innerHTML=cart.map((item,index)=>{const p=products.find(p=>p.id===item.id);return `<div class="order-item"><img src="assets/${p.image}" alt="${p.name}"><div><h3>${p.name}</h3><p>${p.color} · размер ${item.size}</p><button class="remove" data-remove="${index}">Убрать</button><div class="quantity"><button data-quantity="${index}" data-delta="-1" aria-label="Уменьшить количество: ${p.name}" ${item.quantity===1?'disabled':''}>−</button><span aria-label="Количество">${item.quantity}</span><button data-quantity="${index}" data-delta="1" aria-label="Увеличить количество: ${p.name}" ${item.quantity===10?'disabled':''}>+</button></div></div><span class="price">${money(p.price*item.quantity)}</span></div>`;}).join('')+`<div class="order-total"><span>Итого</span><strong>${money(cartTotal())}</strong></div><div class="order-actions"><button class="button" id="download-order">Сохранить состав заказа</button><button class="button secondary" id="copy-order">Скопировать заказ</button><button class="choose" id="browse-collection">Продолжить выбор</button></div><p class="order-note">Вы можете сохранить или скопировать свой выбор. Заказ не отправляется продавцу; оплата и доставка на этом сайте не оформляются.</p>`;
}
function cartTotal(){return cart.reduce((sum,item)=>sum+products.find(p=>p.id===item.id).price*item.quantity,0);}
function orderText(){return 'SEVERO — состав заказа\n\n'+cart.map(item=>{const p=products.find(p=>p.id===item.id);return `${p.name}\nЦвет: ${p.color}. Размер: ${item.size}. Количество: ${item.quantity}.\n${money(p.price*item.quantity)}`;}).join('\n\n')+`\n\nИтого: ${money(cartTotal())}\n\nСостав заказа сохранён для вас. Не отправлен продавцу. Оплата и доставка не оформлены.`;}

document.addEventListener('click',async event=>{
  const target=event.target.closest('button');if(!target)return;
  if(target.dataset.product)showProduct(target.dataset.product);
  if(target.hasAttribute('data-order')){if(cart.length)showOrder();else document.querySelector('#collection').scrollIntoView({behavior:'smooth'});}
  if(target.dataset.filter){document.querySelectorAll('[data-filter]').forEach(b=>{const active=b===target;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});document.querySelectorAll('.product').forEach(card=>card.hidden=target.dataset.filter!=='all'&&card.dataset.category!==target.dataset.filter);}
  if(target.dataset.size){currentSize=target.dataset.size;productContent.querySelectorAll('[data-size]').forEach(b=>b.setAttribute('aria-pressed',String(b===target)));document.querySelector('#selection-error').textContent='';}
  if(target.id==='add-product'){
    if(!currentSize){document.querySelector('#selection-error').textContent='Пожалуйста, выберите размер.';productContent.querySelector('.size').focus();return;}
    try{addItem(currentProduct.id,currentSize);showOrder();toast('Вещь добавлена в заказ');}catch(error){document.querySelector('#selection-error').textContent=error.message;}
  }
  if(target.id==='browse-collection'){orderDialog.close();document.querySelector('#collection').scrollIntoView({behavior:'smooth'});}
  if(target.dataset.remove!==undefined){cart.splice(Number(target.dataset.remove),1);updateCount();renderOrder();}
  if(target.dataset.quantity!==undefined){const item=cart[Number(target.dataset.quantity)];if(item){item.quantity=Math.max(1,Math.min(10,item.quantity+Number(target.dataset.delta)));updateCount();renderOrder();}}
  if(target.id==='download-order'){
    const url=URL.createObjectURL(new Blob(['\uFEFF'+orderText()],{type:'text/plain;charset=utf-8'}));const link=document.createElement('a');link.href=url;link.download='SEVERO-заказ.txt';link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);toast('Состав заказа сохранён в файл');
  }
  if(target.id==='copy-order'){try{await navigator.clipboard.writeText(orderText());toast('Состав заказа скопирован');}catch{toast('Не удалось скопировать. Сохраните состав заказа в файл.');}}
});

if(document.modelContext?.registerTool){
  const lifecycle=new AbortController();
  const register=tool=>{try{Promise.resolve(document.modelContext.registerTool(tool,{signal:lifecycle.signal})).catch(()=>{});}catch{}};
  register({name:'get_severo_collection',title:'Посмотреть коллекцию SEVERO',description:'Показывает модели, цены и размеры, а также текущий состав заказа.',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:true,untrustedContentHint:false},execute:()=>({products:products.map(({id,name,price,color,sizes})=>({id,name,price,currency:'RUB',color,sizes})),order:cart.map(item=>({...item})),total:cartTotal()})});
  register({name:'stage_severo_order_item',title:'Добавить вещь в состав заказа',description:'Добавляет одну вещь выбранного размера в видимый состав заказа и открывает его. Не отправляет заказ продавцу и не оформляет оплату.',inputSchema:{type:'object',properties:{productId:{type:'string',enum:products.map(p=>p.id)},size:{type:'string',enum:[...new Set(products.flatMap(p=>p.sizes))]}},required:['productId','size'],additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:false},execute:input=>{if(!input||typeof input!=='object')throw new Error('Нужны модель и размер');addItem(input.productId,input.size);showOrder();return{status:'staged',order:cart.map(item=>({...item})),total:cartTotal(),submitted:false};}});
  window.addEventListener('pagehide',()=>lifecycle.abort(),{once:true});
}

// Campaign images share the same controls for manual and automatic transitions.
const motionPreference=window.matchMedia('(prefers-reduced-motion: reduce)');
const frames=[...document.querySelectorAll('.hero-frame')];
const slideButtons=[...document.querySelectorAll('[data-slide]')];
const pauseButton=document.querySelector('.slide-pause');
const captions=[['THE EVERYDAY EDIT','Новая перспектива повседневности'],['A SOFTER PACE','Мягкость в вашем ритме'],['BEYOND THE FORMAL','Классика без условностей']];
let slideIndex=0;
let slideshowPaused=motionPreference.matches;
let slideshowTimer;
let transitionInProgress=false;
let zoomAnimation;
let activeTransitions=[];
let heroInView=true;
function updatePause(){pauseButton.setAttribute('aria-pressed',String(slideshowPaused));pauseButton.setAttribute('aria-label',slideshowPaused?'Включить смену образов':'Остановить смену образов');pauseButton.firstElementChild.textContent=slideshowPaused?'▷':'Ⅱ';}
function queueSlide(){clearTimeout(slideshowTimer);if(!slideshowPaused&&!document.hidden&&heroInView)slideshowTimer=setTimeout(()=>changeSlide((slideIndex+1)%frames.length),6200);}
function drift(frame){zoomAnimation?.cancel();if(motionPreference.matches)return;zoomAnimation=frame.animate([{transform:'scale(1.055)'},{transform:'scale(1)'}],{duration:7500,easing:'linear',fill:'forwards'});if(slideshowPaused||document.hidden||!heroInView)zoomAnimation.pause();}
async function changeSlide(next){
  if(next===slideIndex||transitionInProgress)return;
  clearTimeout(slideshowTimer);transitionInProgress=true;
  const outgoing=frames[slideIndex],incoming=frames[next];
  incoming.classList.add('current');incoming.style.zIndex='2';outgoing.style.zIndex='1';
  outgoing.setAttribute('aria-hidden','true');incoming.removeAttribute('aria-hidden');
  slideIndex=next;
  slideButtons.forEach((b,i)=>{b.classList.toggle('selected',i===next);b.setAttribute('aria-pressed',String(i===next));});
  document.querySelector('#slide-number').textContent=`0${next+1} / 03`;
  const caption=document.querySelector('#slide-caption');caption.innerHTML=`${captions[next][0]}<small>${captions[next][1]}</small>`;
  if(!motionPreference.matches){
    zoomAnimation?.cancel();
    activeTransitions=[incoming.animate([{clipPath:'inset(0 0 0 100%)',transform:'scale(1.09)'},{clipPath:'inset(0 0 0 0)',transform:'scale(1.055)'}],{duration:1250,easing:'cubic-bezier(.25,.7,.2,1)',fill:'forwards'}),outgoing.animate([{transform:'scale(1)'},{transform:'scale(.98)'}],{duration:1250,easing:'ease-out'}),caption.animate([{opacity:0,transform:'translateY(10px)'},{opacity:1,transform:'translateY(0)'}],{duration:800,delay:250,fill:'backwards'})];
    await Promise.allSettled(activeTransitions.map(a=>a.finished));
    activeTransitions.forEach(a=>a.cancel());activeTransitions=[];
  }
  outgoing.classList.remove('current');incoming.style.zIndex='';outgoing.style.zIndex='';transitionInProgress=false;drift(incoming);queueSlide();
}
slideButtons.forEach(button=>button.addEventListener('click',()=>{slideshowPaused=true;updatePause();clearTimeout(slideshowTimer);zoomAnimation?.pause();activeTransitions.forEach(a=>a.finish());setTimeout(()=>changeSlide(Number(button.dataset.slide)),0);}));
pauseButton.addEventListener('click',()=>{slideshowPaused=!slideshowPaused;updatePause();if(slideshowPaused){clearTimeout(slideshowTimer);zoomAnimation?.pause();activeTransitions.forEach(a=>a.pause());}else{zoomAnimation?.play();activeTransitions.forEach(a=>a.play());queueSlide();}});
document.addEventListener('visibilitychange',()=>{if(document.hidden){clearTimeout(slideshowTimer);zoomAnimation?.pause();activeTransitions.forEach(a=>a.pause());}else{if(!slideshowPaused){zoomAnimation?.play();activeTransitions.forEach(a=>a.play());}queueSlide();}});
motionPreference.addEventListener('change',()=>{if(motionPreference.matches){slideshowPaused=true;clearTimeout(slideshowTimer);zoomAnimation?.cancel();activeTransitions.forEach(a=>a.finish());updatePause();}});
if('IntersectionObserver' in window){const heroObserver=new IntersectionObserver(entries=>{heroInView=entries[0].isIntersecting;if(heroInView){if(!slideshowPaused)zoomAnimation?.play();queueSlide();}else{clearTimeout(slideshowTimer);zoomAnimation?.pause();}},{threshold:.1});heroObserver.observe(document.querySelector('.hero'));}
if(!motionPreference.matches&&'IntersectionObserver' in window){const reveal=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('revealed');reveal.unobserve(entry.target);}}),{threshold:.07});document.querySelectorAll('.section-heading,.product,.philosophy-copy,.detail-grid article,.closing h2').forEach(el=>{el.classList.add('reveal-pending');reveal.observe(el);});}
updatePause();drift(frames[0]);queueSlide();
