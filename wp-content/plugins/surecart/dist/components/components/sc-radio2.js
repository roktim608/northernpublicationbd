import{proxyCustomElement,HTMLElement,createEvent,h}from"@stencil/core/internal/client";import{F as FormSubmitController}from"./form-data.js";const scRadioCss=":host{display:inline-block}.radio{display:inline-flex;align-items:flex-start;font-family:var(--sc-input-font-family);font-size:var(--sc-input-font-size-medium);font-weight:var(--sc-input-font-weight);color:var(--sc-input-color);vertical-align:middle;gap:var(--sc-spacing-xx-small)}.radio:not(.radio--editing){cursor:pointer}.radio__icon{display:inline-flex;width:var(--sc-radio-size);height:var(--sc-radio-size)}.radio__icon svg{width:100%;height:100%}.radio__control{flex:0 0 auto;position:relative;display:inline-flex;align-items:center;justify-content:center;width:var(--sc-radio-size);height:var(--sc-radio-size);border:solid var(--sc-input-border-width) var(--sc-input-border-color);border-radius:50%;background-color:var(--sc-input-background-color);color:transparent;transition:var(--sc-input-transition, var(--sc-transition-medium)) border-color, var(--sc-input-transition, var(--sc-transition-medium)) opacity, var(--sc-input-transition, var(--sc-transition-medium)) background-color, var(--sc-input-transition, var(--sc-transition-medium)) color, var(--sc-input-transition, var(--sc-transition-medium)) box-shadow}.radio__control input[type=radio]{position:absolute;opacity:0;padding:0;margin:0;pointer-events:none}.radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover{border-color:var(--sc-input-border-color-hover);background-color:var(--sc-input-background-color-hover)}.radio.radio--focused:not(.radio--checked):not(.radio--disabled) .radio__control{border-color:var(--sc-input-border-color-focus);background-color:var(--sc-input-background-color-focus);box-shadow:0 0 0 var(--sc-focus-ring-width) var(--sc-focus-ring-color-primary)}.radio--checked .radio__control{color:var(--var-sc-checked-radio-background-color, var(--sc-input-background-color));border-color:var(--sc-color-primary-500);background-color:var(--sc-color-primary-500)}.radio.radio--checked:not(.radio--disabled) .radio__control:hover{opacity:0.8}.radio.radio--checked:not(.radio--disabled).radio--focused .radio__control{border-color:var(--var-sc-checked-radio-border-color, var(--sc-input-background-color));background-color:var(--sc-color-primary-500);box-shadow:0 0 0 var(--sc-focus-ring-width) var(--sc-focus-ring-color-primary)}.radio--disabled{opacity:0.5;cursor:not-allowed}.radio:not(.radio--checked) svg circle{opacity:0}.radio__label{line-height:var(--sc-radio-size);margin-left:0.5em;user-select:none}";let id=0;const ScRadio=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.scBlur=createEvent(this,"scBlur",7),this.scChange=createEvent(this,"scChange",7),this.scFocus=createEvent(this,"scFocus",7),this.inputId="radio-"+ ++id,this.labelId=`radio-label-${id}`,this.hasFocus=!1,this.name=void 0,this.value=void 0,this.disabled=!1,this.checked=!1,this.required=!1,this.invalid=!1,this.edit=void 0}async ceClick(){this.input.click()}async reportValidity(){return this.invalid=!this.input.checkValidity(),this.input.reportValidity()}handleCheckedChange(){this.input&&(this.checked&&this.getSiblingRadios().map((i=>i.checked=!1)),this.input.checked=this.checked,this.scChange.emit())}handleClick(){this.checked=!0}handleBlur(){this.hasFocus=!1,this.scBlur.emit()}handleFocus(){this.hasFocus=!0,this.scFocus.emit()}setCustomValidity(i){this.input.setCustomValidity(i),this.invalid=!this.input.checkValidity()}getAllRadios(){const i=this.el.closest("sc-radio-group");return i?[...i.querySelectorAll("sc-radio")]:[]}getSiblingRadios(){return this.getAllRadios().filter((i=>i!==this.el))}handleKeyDown(i){if(this.edit)return!0;if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(i.key)){const o=this.getAllRadios().filter((i=>!i.disabled)),e=["ArrowUp","ArrowLeft"].includes(i.key)?-1:1;let r=o.indexOf(this.el)+e;r<0&&(r=o.length-1),r>o.length-1&&(r=0),this.getAllRadios().map((i=>i.checked=!1)),o[r].focus(),o[r].checked=!0,i.preventDefault()}}handleMouseDown(i){if(this.edit)return!0;i.preventDefault(),this.input.focus()}componentDidLoad(){this.formController=new FormSubmitController(this.el,{value:i=>i.checked?i.value:void 0}).addFormData()}disconnectedCallback(){var i;null===(i=this.formController)||void 0===i||i.removeFormData()}render(){const i=this.edit?"div":"label";return h(i,{part:"base",class:{radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--editing":this.edit},htmlFor:this.inputId,onKeyDown:i=>this.handleKeyDown(i),onMouseDown:i=>this.handleMouseDown(i)},h("span",{part:"control",class:"radio__control"},h("span",{part:"checked-icon",class:"radio__icon"},h("svg",{viewBox:"0 0 16 16"},h("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},h("g",{fill:"currentColor"},h("circle",{cx:"8",cy:"8",r:"3.42857143"}))))),h("input",{id:this.inputId,ref:i=>this.input=i,type:"radio",name:this.name,value:this.value,checked:this.checked,disabled:this.disabled,required:this.required,"aria-checked":this.checked?"true":"false","aria-disabled":this.disabled?"true":"false","aria-labelledby":this.labelId,onClick:()=>this.handleClick(),onBlur:()=>this.handleBlur(),onFocus:()=>this.handleFocus()})),h("span",{part:"label",id:this.labelId,class:"radio__label"},h("slot",null)))}get el(){return this}static get watchers(){return{checked:["handleCheckedChange"]}}static get style(){return scRadioCss}},[1,"sc-radio",{name:[1],value:[1],disabled:[1540],checked:[1540],required:[516],invalid:[1540],edit:[4],hasFocus:[32],ceClick:[64],reportValidity:[64]}]);function defineCustomElement(){"undefined"!=typeof customElements&&["sc-radio"].forEach((i=>{"sc-radio"===i&&(customElements.get(i)||customElements.define(i,ScRadio))}))}export{ScRadio as S,defineCustomElement as d};