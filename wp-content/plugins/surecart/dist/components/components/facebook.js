import{m as maybeConvertAmount}from"./currency.js";window.addEventListener("scSearched",(function(n){var o;if(!(null===window||void 0===window?void 0:window.fbq))return;const i=n.detail;window.fbq("track","Search",{search_string:i.searchString,content_ids:i.searchResultIds,...(null===(o=null==i?void 0:i.searchCollections)||void 0===o?void 0:o.length)?{content_category:i.searchCollections.join(",")}:{}})})),window.addEventListener("scProductViewed",(function(n){var o,i,t,e,d,c;if(!(null===window||void 0===window?void 0:window.fbq))return;const l=n.detail;window.fbq("track","ViewContent",{content_ids:[l.id],content_category:null===(i=null===(o=null==l?void 0:l.product_collections)||void 0===o?void 0:o.data)||void 0===i?void 0:i.map((n=>n.name)).join(", "),content_name:(null==l?void 0:l.name)+((null===(t=null==l?void 0:l.variant_options)||void 0===t?void 0:t.length)?` - ${null==l?void 0:l.variant_options.join(" / ")}`:""),content_type:"product",contents:[{id:l.id,quantity:1}],currency:null===(e=null==l?void 0:l.price)||void 0===e?void 0:e.currency,value:maybeConvertAmount((null===(d=l.price)||void 0===d?void 0:d.amount)||0,(null===(c=l.price)||void 0===c?void 0:c.currency)||"USD")})}));