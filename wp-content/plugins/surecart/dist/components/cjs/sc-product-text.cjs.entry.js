'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f1e4d53b.js');
const watchers = require('./watchers-8902837a.js');
require('./index-00f0fc21.js');
require('./facebook-dcb7032a.js');
require('./currency-ba038e2f.js');
require('./utils-a086ed6e.js');
require('./util-efd68af1.js');
require('./index-13ba9385.js');

const scProductTextCss = ":host{display:block}p{margin-block-start:0;margin-block-end:1em}";

const ScProductText = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.text = 'name';
    this.productId = undefined;
  }
  render() {
    const product = watchers.state[this.productId].product;
    if (product === null || product === void 0 ? void 0 : product[this.text]) {
      return index.h("span", { style: { whiteSpace: 'pre-line' }, innerHTML: product[this.text] });
    }
    return (index.h(index.Host, null, index.h("slot", null)));
  }
};
ScProductText.style = scProductTextCss;

exports.sc_product_text = ScProductText;

//# sourceMappingURL=sc-product-text.cjs.entry.js.map