import{proxyCustomElement,HTMLElement,h}from"@stencil/core/internal/client";import{c as convertLineItemsToLineItemData}from"./index5.js";import{d as createOrUpdateCheckout}from"./index4.js";import{s as state}from"./mutations.js";import{s as store}from"./ui.js";import{u as updateFormState}from"./mutations3.js";import{d as defineCustomElement$4}from"./sc-alert2.js";import{d as defineCustomElement$3}from"./sc-form2.js";import{d as defineCustomElement$2}from"./sc-icon2.js";const query={expand:["line_items","line_item.price","price.product","customer","customer.shipping_address","payment_intent","discount","discount.promotion","discount.coupon","shipping_address","tax_identifier"]},ScCartForm$1=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.quantity=1,this.priceId=void 0,this.variantId=void 0,this.mode="live",this.formId=void 0,this.busy=void 0,this.error=void 0}getLineItem(){var t,e,i;const o=((null===(e=null===(t=null==state?void 0:state.checkout)||void 0===t?void 0:t.line_items)||void 0===e?void 0:e.data)||[]).find((t=>{var e,i,o;return this.variantId?(null===(e=t.variant)||void 0===e?void 0:e.id)===this.variantId&&(null===(i=t.price)||void 0===i?void 0:i.id)===this.priceId:(null===(o=t.price)||void 0===o?void 0:o.id)===this.priceId}));return!!(null==o?void 0:o.id)&&{id:null==o?void 0:o.id,price_id:null===(i=null==o?void 0:o.price)||void 0===i?void 0:i.id,quantity:null==o?void 0:o.quantity}}async addToCart(){const{price:t}=await this.form.getFormJson();try{updateFormState("FETCH"),state.checkout=await this.addOrUpdateLineItem({...t?{ad_hoc_amount:parseInt(t)||null}:{},...this.variantId?{variant_id:this.variantId||null}:{}}),updateFormState("RESOLVE"),store.set("cart",{...store.state.cart,open:!0})}catch(t){updateFormState("REJECT"),console.error(t),this.error=(null==t?void 0:t.message)||wp.i18n.__("Something went wrong","surecart")}}async addOrUpdateLineItem(t={}){var e,i;let o=this.getLineItem(),r=convertLineItemsToLineItemData((null===(e=null==state?void 0:state.checkout)||void 0===e?void 0:e.line_items)||[]);return await createOrUpdateCheckout({id:null===(i=null==state?void 0:state.checkout)||void 0===i?void 0:i.id,data:{live_mode:"live"===this.mode,line_items:[...(r||[]).map((e=>this.priceId===(null==e?void 0:e.price_id)?{...e,...(null==t?void 0:t.ad_hoc_amount)?{ad_hoc_amount:null==t?void 0:t.ad_hoc_amount}:{},...(null==t?void 0:t.variant_id)?{variant_id:null==t?void 0:t.variant_id}:{},quantity:(null==e?void 0:e.ad_hoc_amount)?1:(null==e?void 0:e.quantity)+1}:e)),...o?[]:[{price_id:this.priceId,variant_id:this.variantId,...(null==t?void 0:t.ad_hoc_amount)?{ad_hoc_amount:null==t?void 0:t.ad_hoc_amount}:{},quantity:1}]]},query:{...query,form_id:this.formId}})}render(){return h("sc-form",{ref:t=>this.form=t,onScSubmit:()=>{this.addToCart()}},this.error&&h("sc-alert",{open:!!this.error,type:"danger"},h("span",{slot:"title"},wp.i18n.__("Error","surecart")),this.error),h("slot",null))}static get style(){return"sc-cart-form { display: inline-block }"}},[4,"sc-cart-form",{quantity:[1026],priceId:[1,"price-id"],variantId:[1,"variant-id"],mode:[1],formId:[513,"form-id"],busy:[32],error:[32]}]);function defineCustomElement$1(){"undefined"!=typeof customElements&&["sc-cart-form","sc-alert","sc-form","sc-icon"].forEach((t=>{switch(t){case"sc-cart-form":customElements.get(t)||customElements.define(t,ScCartForm$1);break;case"sc-alert":customElements.get(t)||defineCustomElement$4();break;case"sc-form":customElements.get(t)||defineCustomElement$3();break;case"sc-icon":customElements.get(t)||defineCustomElement$2()}}))}const ScCartForm=ScCartForm$1,defineCustomElement=defineCustomElement$1;export{ScCartForm,defineCustomElement};