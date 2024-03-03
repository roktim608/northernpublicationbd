import{r as i,h as s}from"./p-cc7ce8c7.js";import{a as e}from"./p-18e45a13.js";import{a as n}from"./p-1c2e2695.js";const t=":host{display:block;position:relative}.customer-edit{display:grid;gap:0.75em}";const l=class{constructor(s){i(this,s);this.heading=undefined;this.customer=undefined;this.successUrl=undefined;this.loading=undefined;this.error=undefined}async handleSubmit(i){var s;this.loading=true;try{const{email:t,first_name:l,last_name:a,phone:o,billing_matches_shipping:r,shipping_name:d,shipping_city:c,"tax_identifier.number_type":p,"tax_identifier.number":u,shipping_country:h,shipping_line_1:_,shipping_postal_code:m,shipping_state:g,billing_name:v,billing_city:b,billing_country:y,billing_line_1:f,billing_postal_code:w,billing_state:x}=await i.target.getFormJson();await e({path:n(`surecart/v1/customers/${(s=this.customer)===null||s===void 0?void 0:s.id}`,{expand:["tax_identifier"]}),method:"PATCH",data:{email:t,first_name:l,last_name:a,phone:o,billing_matches_shipping:r==="on",shipping_address:{name:d,city:c,country:h,line_1:_,postal_code:m,state:g},billing_address:{name:v,city:b,country:y,line_1:f,postal_code:w,state:x},...u&&p?{tax_identifier:{number:u,number_type:p}}:{}}});if(this.successUrl){window.location.assign(this.successUrl)}else{this.loading=false}}catch(i){this.error=(i===null||i===void 0?void 0:i.message)||wp.i18n.__("Something went wrong","surecart");this.loading=false}}render(){var i,e,n,t,l,a,o,r,d,c,p,u;return s("sc-dashboard-module",{class:"customer-edit",error:this.error},s("span",{slot:"heading"},this.heading||wp.i18n.__("Update Billing Details","surecart")," ",!((i=this===null||this===void 0?void 0:this.customer)===null||i===void 0?void 0:i.live_mode)&&s("sc-tag",{type:"warning",size:"small"},wp.i18n.__("Test","surecart"))),s("sc-card",null,s("sc-form",{onScFormSubmit:i=>this.handleSubmit(i)},s("sc-columns",{style:{"--sc-column-spacing":"var(--sc-spacing-medium)"}},s("sc-column",null,s("sc-input",{label:wp.i18n.__("First Name","surecart"),name:"first_name",value:(e=this.customer)===null||e===void 0?void 0:e.first_name})),s("sc-column",null,s("sc-input",{label:wp.i18n.__("Last Name","surecart"),name:"last_name",value:(n=this.customer)===null||n===void 0?void 0:n.last_name}))),s("sc-column",null,s("sc-phone-input",{label:wp.i18n.__("Phone","surecart"),name:"phone",value:(t=this.customer)===null||t===void 0?void 0:t.phone})),s("div",null,s("sc-address",{label:wp.i18n.__("Shipping Address","surecart"),showName:true,address:{...(l=this.customer)===null||l===void 0?void 0:l.shipping_address},required:false,names:{name:"shipping_name",country:"shipping_country",line_1:"shipping_line_1",line_2:"shipping_line_2",city:"shipping_city",postal_code:"shipping_postal_code",state:"shipping_state"}})),s("div",null,s("sc-switch",{name:"billing_matches_shipping",checked:(a=this.customer)===null||a===void 0?void 0:a.billing_matches_shipping,onScChange:i=>{this.customer={...this.customer,billing_matches_shipping:i.target.checked}},value:"on"},wp.i18n.__("Billing address same as shipping","surecart"))),s("div",{style:{display:((o=this.customer)===null||o===void 0?void 0:o.billing_matches_shipping)?"none":"block"}},s("sc-address",{label:wp.i18n.__("Billing Address","surecart"),showName:true,address:{...(r=this.customer)===null||r===void 0?void 0:r.billing_address},names:{name:"billing_name",country:"billing_country",line_1:"billing_line_1",line_2:"billing_line_2",city:"billing_city",postal_code:"billing_postal_code",state:"billing_state"},required:false})),s("sc-tax-id-input",{show:true,number:(c=(d=this.customer)===null||d===void 0?void 0:d.tax_identifier)===null||c===void 0?void 0:c.number,type:(u=(p=this.customer)===null||p===void 0?void 0:p.tax_identifier)===null||u===void 0?void 0:u.number_type}),s("div",null,s("sc-button",{type:"primary",full:true,submit:true},wp.i18n.__("Save","surecart"))))),this.loading&&s("sc-block-ui",{spinner:true}))}};l.style=t;export{l as sc_customer_edit};
//# sourceMappingURL=p-733552d8.entry.js.map