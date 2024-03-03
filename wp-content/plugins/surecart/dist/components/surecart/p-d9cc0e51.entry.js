import{r as i,h as t}from"./p-cc7ce8c7.js";import{s as e}from"./p-2934ec66.js";import{h as l}from"./p-f2e49975.js";import{i as o}from"./p-b395feb7.js";import{g as n}from"./p-296b7340.js";import{u as s,r as d}from"./p-28aaf9ba.js";import{f as a}from"./p-a27e9b70.js";import{g as r}from"./p-e4cd2c80.js";import"./p-25433d0f.js";import"./p-f70181c4.js";import"./p-4d73f82a.js";import"./p-1c2e2695.js";import"./p-7ef0f71c.js";import"./p-f47b68d0.js";import"./p-c27fae79.js";import"./p-09484d0e.js";import"./p-05fc1ee0.js";import"./p-9a954102.js";import"./p-18e45a13.js";const p=":host{display:block}:slotted(*~*){margin-top:20px}.line-items{display:grid;gap:var(--sc-form-row-spacing)}.line-item{display:grid;gap:var(--sc-spacing-small)}.fee__description{opacity:0.75}";const u=class{constructor(t){i(this,t);this.editable=undefined;this.removable=undefined}isEditable(i){var t;if(((t=i===null||i===void 0?void 0:i.price)===null||t===void 0?void 0:t.ad_hoc)||(i===null||i===void 0?void 0:i.bump_amount)){return false}return this.editable}render(){var i,p,u,v,c;if(!!a()&&!((u=(p=(i=e===null||e===void 0?void 0:e.checkout)===null||i===void 0?void 0:i.line_items)===null||p===void 0?void 0:p.data)===null||u===void 0?void 0:u.length)){return t("sc-line-item",null,t("sc-skeleton",{style:{width:"50px",height:"50px","--border-radius":"0"},slot:"image"}),t("sc-skeleton",{slot:"title",style:{width:"120px",display:"inline-block"}}),t("sc-skeleton",{slot:"description",style:{width:"60px",display:"inline-block"}}),t("sc-skeleton",{style:{width:"120px",display:"inline-block"},slot:"price"}),t("sc-skeleton",{style:{width:"60px",display:"inline-block"},slot:"price-description"}))}return t("div",{class:"line-items",part:"base",tabindex:"0"},(((c=(v=e===null||e===void 0?void 0:e.checkout)===null||v===void 0?void 0:v.line_items)===null||c===void 0?void 0:c.data)||[]).map((i=>{var a,p,u,v,c,m,_,y,f;const{url:b,title:h,alt:j}=n((a=i===null||i===void 0?void 0:i.price)===null||a===void 0?void 0:a.product,i===null||i===void 0?void 0:i.variant);const g=r((p=i===null||i===void 0?void 0:i.price)===null||p===void 0?void 0:p.product,i===null||i===void 0?void 0:i.variant);return t("div",{class:"line-item"},t("sc-product-line-item",{key:i.id,imageUrl:b,imageTitle:h,imageAlt:j,name:(v=(u=i===null||i===void 0?void 0:i.price)===null||u===void 0?void 0:u.product)===null||v===void 0?void 0:v.name,priceName:(c=i===null||i===void 0?void 0:i.price)===null||c===void 0?void 0:c.name,variantLabel:((i===null||i===void 0?void 0:i.variant_options)||[]).filter(Boolean).join(" / ")||null,...g?{max:g}:{},editable:this.isEditable(i),removable:this.removable,quantity:i.quantity,fees:(m=i===null||i===void 0?void 0:i.fees)===null||m===void 0?void 0:m.data,setupFeeTrialEnabled:(_=i===null||i===void 0?void 0:i.price)===null||_===void 0?void 0:_.setup_fee_trial_enabled,amount:i.ad_hoc_amount!==null?i.ad_hoc_amount:i.subtotal_amount,scratchAmount:i.ad_hoc_amount==null&&(i===null||i===void 0?void 0:i.scratch_amount),currency:(y=e===null||e===void 0?void 0:e.checkout)===null||y===void 0?void 0:y.currency,trialDurationDays:(f=i===null||i===void 0?void 0:i.price)===null||f===void 0?void 0:f.trial_duration_days,interval:!!(i===null||i===void 0?void 0:i.price)&&o(i===null||i===void 0?void 0:i.price,{showOnce:l(e===null||e===void 0?void 0:e.checkout)}),onScUpdateQuantity:t=>s({id:i.id,data:{quantity:t.detail}}),onScRemove:()=>d(i===null||i===void 0?void 0:i.id),exportparts:"base:line-item, product-line-item, image:line-item__image, text:line-item__text, title:line-item__title, suffix:line-item__suffix, price:line-item__price, price__amount:line-item__price-amount, price__description:line-item__price-description, price__scratch:line-item__price-scratch, static-quantity:line-item__static-quantity, remove-icon__base:line-item__remove-icon, quantity:line-item__quantity, quantity__minus:line-item__quantity-minus, quantity__minus-icon:line-item__quantity-minus-icon, quantity__plus:line-item__quantity-plus, quantity__plus-icon:line-item__quantity-plus-icon, quantity__input:line-item__quantity-input, line-item__price-description:line-item__price-description"}))})))}};u.style=p;export{u as sc_line_items};
//# sourceMappingURL=p-d9cc0e51.entry.js.map