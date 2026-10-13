import fs from 'node:fs';
import vm from 'node:vm';
const app = fs.readFileSync(new URL('../app.js', import.meta.url), 'utf8');
const products = vm.runInNewContext(app.slice(0, app.indexOf('\n];') + 3) + '\nproducts;');
const esc = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const heart = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/></svg>';
const cards = products.map(p => {
 const stem = p.image.replace('.jpg', '');
 const largeWidth = stem === 'hero' ? 1280 : 1024;
 return `<article class="product ${p.contents ? 'suit-product' : ''}" data-id="${p.id}" data-category="${p.category}">
 <a href="#product=${p.id}" class="product-image" data-product="${p.id}" aria-label="Подробнее: ${esc(p.name)}"><picture><source type="image/webp" srcset="assets/${stem}-640.webp 640w, assets/${stem}-1280.webp ${largeWidth}w" sizes="(max-width:900px) 44vw, ${p.contents ? '46vw' : '23vw'}"><img src="assets/${p.image}" alt="${esc(p.name)}, ${esc(p.color.toLowerCase())} оттенок" loading="lazy" decoding="async" width="1024" height="1536"></picture><span class="product-tag">${p.tag}</span></a>
 <button class="favorite-button" data-favorite="${p.id}" aria-pressed="false" aria-label="В избранное: ${esc(p.name)}">${heart}</button>
 <div class="product-info"><h3><a href="#product=${p.id}" data-product="${p.id}">${esc(p.name)}</a></h3><span class="price">${new Intl.NumberFormat('ru-RU').format(p.price)} ₽</span></div>
 <p class="product-meta">${esc(p.material.split(' · ')[0])}</p><div class="product-bottom"><span aria-label="Цвет: ${p.color}" class="product-color"><i class="swatch" style="background:${p.hex}"></i><span>${p.color}</span></span><a class="choose" href="#product=${p.id}" data-product="${p.id}">Подробнее <span aria-hidden="true">↗</span></a></div></article>`;
}).join('\n');
const path = new URL('../index.html', import.meta.url);
let html = fs.readFileSync(path, 'utf8');
html = html.replace(/<!-- STATIC_CATALOG -->(?:[\s\S]*?<!-- END_STATIC_CATALOG -->)?/, `<!-- STATIC_CATALOG -->\n${cards}\n<!-- END_STATIC_CATALOG -->`);
fs.writeFileSync(path, html);
console.log(`Generated ${products.length} static product cards.`);
