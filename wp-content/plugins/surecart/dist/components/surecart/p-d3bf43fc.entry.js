import{r as t,h as i,H as r}from"./p-cc7ce8c7.js";import{s as o,g as d}from"./p-296b7340.js";import{a as c}from"./p-5a73bf4c.js";const e=":host{border-style:none}.product-img{max-width:100%;aspect-ratio:var(--sc-product-image-aspect-ratio);padding-top:var(--sc-product-image-padding-top, 0);padding-bottom:var(--sc-product-image-padding-bottom, 0);padding-left:var(--sc-product-image-padding-left, 0);padding-right:var(--sc-product-image-padding-right, 0);margin-top:var(--sc-product-image-margin-top, 0);margin-bottom:var(--sc-product-image-margin-bottom, 0);margin-left:var(--sc-product-image-margin-left, 0);margin-right:var(--sc-product-image-margin-right, 0);border:solid var(--sc-product-image-border-width) var(--sc-product-image-border-color);border-radius:var(--sc-product-image-border-radius);overflow:hidden}.product-img>img{width:100%;height:100%;box-sizing:border-box;object-fit:contain;display:block;transition:transform var(--sc-transition-medium) ease}.product-img.is_covered>img{object-fit:cover}.product-img.is_contained>img{object-fit:contain}.product-img_placeholder{width:100%;height:100%;background-color:var(--sc-color-gray-300)}.product-img:hover img{transform:scale(1.05)}";const a=class{constructor(i){t(this,i);this.product=undefined;this.sizing=undefined}getSrc(){var t,i,r,d,e,a,n,s,p,l;if((i=(t=this.product)===null||t===void 0?void 0:t.featured_product_media)===null||i===void 0?void 0:i.url){return(d=(r=this.product)===null||r===void 0?void 0:r.featured_product_media)===null||d===void 0?void 0:d.url}if((n=(a=(e=this.product)===null||e===void 0?void 0:e.featured_product_media)===null||a===void 0?void 0:a.media)===null||n===void 0?void 0:n.url){return o((l=(p=(s=this.product)===null||s===void 0?void 0:s.featured_product_media)===null||p===void 0?void 0:p.media)===null||l===void 0?void 0:l.url,c("surecart/product-list/media/size",900))}return""}render(){const{alt:t,title:o}=d(this.product);return i(r,{style:{borderStyle:"none"}},i("div",{class:{"product-img":true,is_contained:this.sizing==="contain",is_covered:this.sizing==="cover"}},!!this.getSrc()?i("img",{src:this.getSrc(),alt:t,...o?{title:o}:{}}):i("div",{class:"product-img_placeholder"})))}};a.style=e;const n=":host{display:block;line-height:1}.product-price{padding-top:var(--sc-product-price-padding-top, 0);padding-bottom:var(--sc-product-price-padding-bottom, 0);padding-left:var(--sc-product-price-padding-left, 0);padding-right:var(--sc-product-price-padding-right, 0);margin-top:var(--sc-product-price-margin-top, 0);margin-bottom:var(--sc-product-price-margin-bottom, 0);margin-left:var(--sc-product-price-margin-left, 0);margin-right:var(--sc-product-price-margin-right, 0);text-align:var(--sc-product-price-align);font-size:var(--sc-product-price-font-size);font-weight:var(--sc-product-price-font-weight);color:var(--sc-product-price-text-color)}";const s=class{constructor(i){t(this,i);this.prices=undefined;this.range=true;this.metrics=undefined}componentWillLoad(){var t,i,r,o,d,c;if(this.range&&((t=this.metrics)===null||t===void 0?void 0:t.min_price_amount)!==((i=this.metrics)===null||i===void 0?void 0:i.max_price_amount)){this.prices=[{amount:(r=this.metrics)===null||r===void 0?void 0:r.min_price_amount,currency:(o=this.metrics)===null||o===void 0?void 0:o.currency},{amount:(d=this.metrics)===null||d===void 0?void 0:d.max_price_amount,currency:(c=this.metrics)===null||c===void 0?void 0:c.currency}]}}render(){var t;const r=(this.prices||[]).sort(((t,i)=>(t===null||t===void 0?void 0:t.position)-(i===null||i===void 0?void 0:i.position))).find((t=>!(t===null||t===void 0?void 0:t.archived)));return i("div",{class:"product-price",part:"base"},!this.range&&((t=this.prices)===null||t===void 0?void 0:t.length)?i("sc-format-number",{type:"currency",currency:(r===null||r===void 0?void 0:r.currency)||"usd",value:r===null||r===void 0?void 0:r.amount}):i("sc-price-range",{prices:this.prices}))}};s.style=n;const p=".product-item-title{padding-top:var(--sc-product-title-padding-top, 0);padding-bottom:var(--sc-product-title-padding-bottom, 0);margin-top:var(--sc-product-title-margin-top, 0);margin-bottom:var(--sc-product-title-margin-bottom, 0);font-size:var(--sc-product-title-font-size);text-align:var(--sc-product-title-align);font-weight:var(--sc-product-title-font-weight);color:var(--sc-product-title-text-color);line-height:1.2}";const l=class{constructor(i){t(this,i)}render(){return i(r,null,i("div",{class:{"product-item-title":true}},i("slot",null)))}};l.style=p;export{a as sc_product_item_image,s as sc_product_item_price,l as sc_product_item_title};
//# sourceMappingURL=p-d3bf43fc.entry.js.map