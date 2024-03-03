import{r as i,c as t,h as e,a as s}from"./p-cc7ce8c7.js";import{p as o}from"./p-f0bb2283.js";import{s as l}from"./p-d93fa5d8.js";import{a as n}from"./p-ede11f08.js";import{o as r,s as a}from"./p-2934ec66.js";import{o as d}from"./p-c27fae79.js";import{c}from"./p-a27e9b70.js";import{c as u}from"./p-05fc1ee0.js";import{u as p}from"./p-f47b68d0.js";import{a as h}from"./p-1c2e2695.js";import"./p-112455b1.js";import"./p-25433d0f.js";import"./p-c06b2e12.js";import"./p-f70181c4.js";import"./p-4d73f82a.js";import"./p-7ef0f71c.js";import"./p-09484d0e.js";const m="sc-stripe-payment-element{display:block}sc-stripe-payment-element [hidden]{display:none}.loader{display:grid;height:128px;gap:2em}.loader__row{display:flex;align-items:flex-start;justify-content:space-between;gap:1em}.loader__details{display:grid;gap:0.5em}";const v=class{constructor(e){i(this,e);this.scPaid=t(this,"scPaid",7);this.scSetState=t(this,"scSetState",7);this.scPaymentInfoAdded=t(this,"scPaymentInfoAdded",7);this.error=undefined;this.confirming=false;this.loaded=false;this.styles=undefined}async componentWillLoad(){this.fetchStyles()}async handleStylesChange(){this.createOrUpdateElements()}async fetchStyles(){this.styles=await this.getComputedStyles()}getComputedStyles(){return new Promise((i=>{let t=setInterval((()=>{const e=window.getComputedStyle(document.body);const s=e.getPropertyValue("--sc-color-primary-500");if(s){clearInterval(t);i(e)}}),100)}))}async componentDidLoad(){const i=(n()||[]).find((i=>i.processor_type==="stripe"));if(!i){return}const{account_id:t,publishable_key:e}=(i===null||i===void 0?void 0:i.processor_data)||{};try{this.stripe=await o.loadStripe(e,{stripeAccount:t})}catch(i){this.error=(i===null||i===void 0?void 0:i.message)||wp.i18n.__("Stripe could not be loaded","surecart");return}this.createOrUpdateElements();this.handleUpdateElement();this.unlistenToCheckout=r("checkout",(()=>{this.fetchStyles();this.createOrUpdateElements();this.handleUpdateElement()}));this.unlistenToFormState=d("formState",(()=>{var i;if(!((i=a===null||a===void 0?void 0:a.checkout)===null||i===void 0?void 0:i.payment_method_required))return;if("finalizing"===c()){this.submit()}if("paying"===c()){this.maybeConfirmOrder()}}))}disconnectedCallback(){this.unlistenToFormState();this.unlistenToCheckout()}getElementsConfig(){var i,t,e,s;const o=getComputedStyle(this.el);return{mode:((i=a.checkout)===null||i===void 0?void 0:i.reusable_payment_method_required)?"subscription":"payment",amount:(t=a.checkout)===null||t===void 0?void 0:t.amount_due,currency:(e=a.checkout)===null||e===void 0?void 0:e.currency,setupFutureUsage:((s=a.checkout)===null||s===void 0?void 0:s.reusable_payment_method_required)?"off_session":null,appearance:{variables:{colorPrimary:o.getPropertyValue("--sc-color-primary-500")||"black",colorText:o.getPropertyValue("--sc-input-label-color")||"black",borderRadius:o.getPropertyValue("--sc-input-border-radius-medium")||"4px",colorBackground:o.getPropertyValue("--sc-input-background-color")||"white",fontSizeBase:o.getPropertyValue("--sc-input-font-size-medium")||"16px",colorLogo:o.getPropertyValue("--sc-stripe-color-logo")||"light",colorLogoTab:o.getPropertyValue("--sc-stripe-color-logo-tab")||"light",colorLogoTabSelected:o.getPropertyValue("--sc-stripe-color-logo-tab-selected")||"light",colorTextPlaceholder:o.getPropertyValue("--sc-input-placeholder-color")||"black"},rules:{".Input":{border:o.getPropertyValue("--sc-input-border")}}}}}createOrUpdateElements(){var i,t,e,s;if(!((i=a===null||a===void 0?void 0:a.checkout)===null||i===void 0?void 0:i.payment_method_required))return;if(!this.stripe)return;if(!this.elements){this.elements=this.stripe.elements(this.getElementsConfig());const{line_1:i,line_2:o,city:l,state:n,country:r,postal_code:d}=((t=a.checkout)===null||t===void 0?void 0:t.shipping_address)||{};this.elements.create("payment",{defaultValues:{billingDetails:{name:(e=a.checkout)===null||e===void 0?void 0:e.name,email:(s=a.checkout)===null||s===void 0?void 0:s.email,address:{line1:i,line2:o,city:l,state:n,country:r,postal_code:d}}},fields:{billingDetails:{email:"never"}}}).mount(this.container);this.element=this.elements.getElement("payment");this.element.on("ready",(()=>this.loaded=true));this.element.on("change",(i=>{var t,e,s,o;if(i.complete){this.scPaymentInfoAdded.emit({checkout_id:(t=a.checkout)===null||t===void 0?void 0:t.id,currency:(e=a.checkout)===null||e===void 0?void 0:e.currency,processor_type:"stripe",payment_method:{billing_details:{email:(s=a.checkout)===null||s===void 0?void 0:s.email,name:(o=a.checkout)===null||o===void 0?void 0:o.name}}})}}));return}this.elements.update(this.getElementsConfig())}handleUpdateElement(){var i,t;if(!this.element)return;if(((i=a.checkout)===null||i===void 0?void 0:i.status)!=="draft")return;const{name:e,email:s}=a.checkout;const{line_1:o,line_2:l,city:n,state:r,country:d,postal_code:c}=((t=a.checkout)===null||t===void 0?void 0:t.shipping_address)||{};this.element.update({defaultValues:{billingDetails:{name:e,email:s,address:{line1:o,line2:l,city:n,state:r,country:d,postal_code:c}}},fields:{billingDetails:{email:"never"}}})}async submit(){if((l===null||l===void 0?void 0:l.id)!=="stripe")return;const{error:i}=await this.elements.submit();if(i){console.error({error:i});p("REJECT");u(i);this.error=i.message;return}}async maybeConfirmOrder(){var i,t,e,s,o,n,r,d,c,u,p,h,m,v;if((l===null||l===void 0?void 0:l.id)!=="stripe")return;if(((t=(i=a.checkout)===null||i===void 0?void 0:i.payment_intent)===null||t===void 0?void 0:t.processor_type)!=="stripe")return;if(!((n=(o=(s=(e=a.checkout)===null||e===void 0?void 0:e.payment_intent)===null||s===void 0?void 0:s.processor_data)===null||o===void 0?void 0:o.stripe)===null||n===void 0?void 0:n.type))return;if(!((u=(c=(d=(r=a.checkout)===null||r===void 0?void 0:r.payment_intent)===null||d===void 0?void 0:d.processor_data)===null||c===void 0?void 0:c.stripe)===null||u===void 0?void 0:u.client_secret))return;return await this.confirm((v=(m=(h=(p=a.checkout)===null||p===void 0?void 0:p.payment_intent)===null||h===void 0?void 0:h.processor_data)===null||m===void 0?void 0:m.stripe)===null||v===void 0?void 0:v.type)}async confirm(i,t={}){var e,s,o,l;const n={elements:this.elements,clientSecret:(l=(o=(s=(e=a.checkout)===null||e===void 0?void 0:e.payment_intent)===null||s===void 0?void 0:s.processor_data)===null||o===void 0?void 0:o.stripe)===null||l===void 0?void 0:l.client_secret,confirmParams:{return_url:h(window.location.href,{...a.checkout.id?{checkout_id:a.checkout.id}:{}}),payment_method_data:{billing_details:{email:a.checkout.email}}},redirect:"if_required",...t};if(this.confirming)return;if(!this.stripe)return;try{this.scSetState.emit("PAYING");const t=i==="setup"?await this.stripe.confirmSetup(n):await this.stripe.confirmPayment(n);if(t===null||t===void 0?void 0:t.error){this.error=t.error.message;throw t.error}else{this.scSetState.emit("PAID");this.scPaid.emit()}}catch(i){console.error(i);p("REJECT");u(i);if(i.message){this.error=i.message}}finally{this.confirming=false}}render(){return e("div",{class:"sc-stripe-payment-element","data-testid":"stripe-payment-element"},!!this.error&&e("sc-text",{style:{color:"var(--sc-color-danger-500)","--font-size":"var(--sc-font-size-small)",marginBottom:"0.5em"}},this.error),e("div",{class:"loader",hidden:this.loaded},e("div",{class:"loader__row"},e("div",{style:{width:"50%"}},e("sc-skeleton",{style:{width:"50%",marginBottom:"0.5em"}}),e("sc-skeleton",null)),e("div",{style:{flex:"1"}},e("sc-skeleton",{style:{width:"50%",marginBottom:"0.5em"}}),e("sc-skeleton",null)),e("div",{style:{flex:"1"}},e("sc-skeleton",{style:{width:"50%",marginBottom:"0.5em"}}),e("sc-skeleton",null))),e("div",{class:"loader__details"},e("sc-skeleton",{style:{height:"1rem"}}),e("sc-skeleton",{style:{height:"1rem",width:"30%"}}))),e("div",{hidden:!this.loaded,class:"sc-payment-element-container",ref:i=>this.container=i}))}get el(){return s(this)}static get watchers(){return{styles:["handleStylesChange"]}}};v.style=m;export{v as sc_stripe_payment_element};
//# sourceMappingURL=p-50c791bf.entry.js.map