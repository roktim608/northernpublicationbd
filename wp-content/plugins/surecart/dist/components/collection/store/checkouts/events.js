import{on}from"./store";on("set",((t,n,i)=>Object.keys(n||{}).forEach((t=>handleCheckoutLineItemChange(n[t],null==i?void 0:i[t])))));export const handleCheckoutLineItemChange=(t,n)=>{var i,e;const o=(null===(i=null==t?void 0:t.line_items)||void 0===i?void 0:i.data)||[],d=(null===(e=null==n?void 0:n.line_items)||void 0===e?void 0:e.data)||[];if(o.forEach((t=>{const n=d.find((n=>n.id===t.id));if(!n||(null==n?void 0:n.quantity)<(null==t?void 0:t.quantity)){const i=new CustomEvent("scAddedToCart",{detail:{...t,quantity:t.quantity-((null==n?void 0:n.quantity)||0)},bubbles:!0});document.dispatchEvent(i)}})),d.forEach((t=>{const n=o.find((n=>n.id===t.id));if(!n||(null==t?void 0:t.quantity)>(null==n?void 0:n.quantity)){const i=new CustomEvent("scRemovedFromCart",{detail:{...t,quantity:t.quantity-((null==n?void 0:n.quantity)||0)},bubbles:!0});document.dispatchEvent(i)}})),JSON.stringify(o)!==JSON.stringify(d)){const i=new CustomEvent("scCartUpdated",{detail:[t,n],bubbles:!0});document.dispatchEvent(i)}};