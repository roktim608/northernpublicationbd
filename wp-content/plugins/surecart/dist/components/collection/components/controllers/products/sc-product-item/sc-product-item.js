import{h}from"@stencil/core";export class ScProductItem{constructor(){this.product=void 0,this.layoutConfig=void 0}render(){var t;return h("a",{href:null===(t=this.product)||void 0===t?void 0:t.permalink,class:{"product-item":!0}},this.product&&(this.layoutConfig||[]).map((t=>{var r,e,i,o;const c=t.attributes||{};switch(t.blockName){case"surecart/product-item-title":return h("sc-product-item-title",{part:"title"},null===(r=this.product)||void 0===r?void 0:r.name);case"surecart/product-item-image":return h("sc-product-item-image",{part:"image",product:this.product,sizing:null===(e=t.attributes)||void 0===e?void 0:e.sizing});case"surecart/product-item-price":return h("sc-product-item-price",{part:"price",prices:null===(i=this.product)||void 0===i?void 0:i.prices.data,range:!!(null==c?void 0:c.range),metrics:null===(o=this.product)||void 0===o?void 0:o.metrics});default:return null}})))}static get is(){return"sc-product-item"}static get encapsulation(){return"shadow"}static get originalStyleUrls(){return{$:["sc-product-item.scss"]}}static get styleUrls(){return{$:["sc-product-item.css"]}}static get properties(){return{product:{type:"unknown",mutable:!1,complexType:{original:"Product",resolved:"Product",references:{Product:{location:"import",path:"../../../../types"}}},required:!1,optional:!1,docs:{tags:[],text:""}},layoutConfig:{type:"unknown",mutable:!1,complexType:{original:"LayoutConfig",resolved:"{ blockName: string; attributes: any; }[]",references:{LayoutConfig:{location:"import",path:"../sc-product-item-list/sc-product-item-list"}}},required:!1,optional:!1,docs:{tags:[],text:""}}}}}