import{r as t,h as s,a as i,H as o}from"./p-cc7ce8c7.js";import{i as r}from"./p-c06b2e12.js";import{s as e,c,u as p}from"./p-ecc046f8.js";import"./p-25433d0f.js";import"./p-f70181c4.js";import"./p-c6074574.js";import"./p-2934ec66.js";import"./p-4d73f82a.js";import"./p-1c2e2695.js";import"./p-7ef0f71c.js";import"./p-28aaf9ba.js";import"./p-f47b68d0.js";import"./p-c27fae79.js";import"./p-09484d0e.js";import"./p-05fc1ee0.js";import"./p-9a954102.js";import"./p-18e45a13.js";const n="";const a=class{constructor(s){t(this,s);this.productId=undefined;this.value=undefined;this.label=undefined}state(){return e[this.productId]}render(){var t;const i=c(this.productId);const e=i.indexOf(this.value);if(!r(this.value,this.state().selectedPrice)||e<0)return s(o,{style:{display:"none"}});return s("sc-choice-container",{"show-control":"false",checked:this.state().ad_hoc_amount===this.value,onScChange:()=>p(this.productId,{ad_hoc_amount:this.value,custom_amount:null}),"aria-label":wp.i18n.sprintf(wp.i18n.__("%s of %s","surecart"),e+1,i.length),role:"button"},this.label?this.label:s("sc-format-number",{type:"currency",currency:(t=this.state().selectedPrice)===null||t===void 0?void 0:t.currency,value:this.value,"minimum-fraction-digits":"0"}))}get el(){return i(this)}};a.style=n;export{a as sc_product_donation_amount_choice};
//# sourceMappingURL=p-b7f55dd7.entry.js.map