import{h}from"./index-644f5478.js";const ManualPaymentMethods=({methods:e})=>(e||[]).map((e=>h("sc-payment-method-choice",{"is-manual":!0,"processor-id":null==e?void 0:e.id},h("span",{slot:"summary"},null==e?void 0:e.name),h("sc-card",null,h("sc-payment-selected",{label:wp.i18n.sprintf(
// translators: Manual payment method.
wp.i18n.__("%s selected for check out.","surecart"),null==e?void 0:e.name)},h("div",{innerHTML:null==e?void 0:e.description}))))));export{ManualPaymentMethods as M};