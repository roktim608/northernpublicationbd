import { r as registerInstance, c as createEvent, h, a as getElement, F as Fragment } from './index-644f5478.js';
import { c as countryChoices, a as hasPostal, b as hasCity, h as hasState } from './address-30ec68e0.js';
import { r as reportChildrenValidity } from './form-data-dd63c61f.js';
import { s as speak } from './index-b0f661a7.js';
import { z as zones, g as getType } from './tax-83f264de.js';

const scAddressCss = ":host{display:block}.sc-address{display:block;position:relative}.sc-address [hidden]{display:none}.sc-address--loading{min-height:230px}.sc-address sc-skeleton{display:block;margin-bottom:1em}.sc-address__control{display:block}.sc-address__control>*{margin-bottom:var(--sc-address-column-spacing, -1px)}.sc-address__columns{display:flex;flex-direction:row;align-items:center;flex-wrap:wrap;justify-content:space-between}.sc-address__columns>*{flex:1;width:50%;margin-right:var(--sc-address-column-spacing, -1px)}.sc-address__columns>*:last-child{margin-right:0}";

const ScAddress = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.scChangeAddress = createEvent(this, "scChangeAddress", 7);
    this.scInputAddress = createEvent(this, "scInputAddress", 7);
    this.address = {
      country: null,
      city: null,
      line_1: null,
      line_2: null,
      postal_code: null,
      state: null,
    };
    this.names = {
      name: 'shipping_name',
      country: 'shipping_country',
      city: 'shipping_city',
      line_1: 'shipping_line_1',
      line_2: 'shipping_line_2',
      postal_code: 'shipping_postal_code',
      state: 'shipping_state',
    };
    this.placeholders = {};
    this.loading = false;
    this.disabled = undefined;
    this.label = undefined;
    this.showName = undefined;
    this.showLine2 = undefined;
    this.required = false;
    this.requireName = false;
    this.showCity = true;
    this.showPostal = true;
    this.regions = undefined;
    this.countryChoices = countryChoices;
  }
  /** When the state changes, we want to update city and postal fields. */
  handleAddressChange() {
    if (!this.address.country)
      return;
    this.setRegions();
    this.showPostal = hasPostal(this.address.country);
    this.showCity = hasCity(this.address.country);
    this.scChangeAddress.emit(this.address);
    this.scInputAddress.emit(this.address);
  }
  handleNameChange() {
    if (this.requireName) {
      this.showName = true;
    }
  }
  decodeHtmlEntities(html) {
    var _a;
    return ((_a = new DOMParser().parseFromString(html, 'text/html')) === null || _a === void 0 ? void 0 : _a.body.textContent) || html;
  }
  updateAddress(address) {
    this.address = { ...this.address, ...address };
  }
  handleAddressInput(address) {
    this.scInputAddress.emit({ ...this.address, ...address });
  }
  clearAddress() {
    var _a;
    this.address = {
      name: (_a = this.address) === null || _a === void 0 ? void 0 : _a.name,
      country: null,
      city: null,
      line_1: null,
      line_2: null,
      postal_code: null,
      state: null,
    };
  }
  /** Set the regions based on the country. */
  setRegions() {
    if (hasState(this.address.country)) {
      import('./countries-dfee7456.js').then(module => {
        const countryRegions = module === null || module === void 0 ? void 0 : module[this.address.country];
        this.regions = (countryRegions || []).map(region => ({
          ...region,
          label: this.decodeHtmlEntities(region.label),
        }));
      });
    }
    else {
      this.regions = [];
    }
  }
  componentWillLoad() {
    var _a;
    this.handleAddressChange();
    const country = ((_a = this.countryChoices.find(country => country.value === this.address.country)) === null || _a === void 0 ? void 0 : _a.value) || null;
    this.updateAddress({ country });
    this.handleNameChange();
  }
  async reportValidity() {
    return reportChildrenValidity(this.el);
  }
  render() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
    return (h("div", { class: "sc-address", part: "base" }, h("sc-form-control", { label: this.label, exportparts: "label, help-text, form-control", class: "sc-address__control", required: this.required }, this.showName && (h("sc-input", { exportparts: "base:input__base, input, form-control, label, help-text", value: (_a = this === null || this === void 0 ? void 0 : this.address) === null || _a === void 0 ? void 0 : _a.name, onScChange: (e) => this.updateAddress({ name: e.target.value || null }), onScInput: (e) => this.handleAddressInput({ name: e.target.value || null }), autocomplete: "street-address", placeholder: this.placeholders.name || wp.i18n.__('Name or Company Name', 'surecart'), name: (_b = this.names) === null || _b === void 0 ? void 0 : _b.name, "squared-bottom": true, disabled: this.disabled, required: this.requireName, "aria-label": this.placeholders.name || wp.i18n.__('Name or Company Name', 'surecart') })), h("sc-select", { exportparts: "base:select__base, input, form-control, label, help-text, trigger, panel, caret, search__base, search__input, search__form-control, menu__base, spinner__base, empty", part: "name__input", value: (_c = this.address) === null || _c === void 0 ? void 0 : _c.country, onScChange: (e) => {
        this.clearAddress();
        this.updateAddress({ country: e.target.value });
      }, choices: this.countryChoices, autocomplete: 'country-name', placeholder: this.placeholders.country || wp.i18n.__('Country', 'surecart'), name: (_d = this.names) === null || _d === void 0 ? void 0 : _d.country, search: true, unselect: false, "squared-bottom": true, squared: this.showName, disabled: this.disabled, required: this.required, "aria-label": this.placeholders.country || wp.i18n.__('Country', 'surecart') }), h("sc-input", { exportparts: "base:input__base, input, form-control, label, help-text", value: (_e = this === null || this === void 0 ? void 0 : this.address) === null || _e === void 0 ? void 0 : _e.line_1, onScChange: (e) => this.updateAddress({ line_1: e.target.value || null }), onScInput: (e) => this.handleAddressInput({ line_1: e.target.value || null }), autocomplete: "street-address", placeholder: this.placeholders.line_1 || wp.i18n.__('Address', 'surecart'), name: (_f = this.names) === null || _f === void 0 ? void 0 : _f.line_1, squared: true, disabled: this.disabled, required: this.required, "aria-label": this.placeholders.line_1 || wp.i18n.__('Address', 'surecart') }), this.showLine2 && (h("sc-input", { exportparts: "base:input__base, input, form-control, label, help-text", value: (_g = this === null || this === void 0 ? void 0 : this.address) === null || _g === void 0 ? void 0 : _g.line_2, onScChange: (e) => this.updateAddress({ line_2: e.target.value || null }), onScInput: (e) => this.handleAddressInput({ line_2: e.target.value || null }), autocomplete: "street-address", placeholder: this.placeholders.line_2 || wp.i18n.__('Address Line 2', 'surecart'), name: (_h = this.names) === null || _h === void 0 ? void 0 : _h.line_2, squared: true, disabled: this.disabled, "aria-label": this.placeholders.line_2 || wp.i18n.__('Address Line 2', 'surecart') })), h("div", { class: "sc-address__columns", part: "columns" }, this.showCity && (h("sc-input", { exportparts: "base:input__base, input, form-control, label, help-text", placeholder: this.placeholders.city || wp.i18n.__('City', 'surecart'), name: (_j = this.names) === null || _j === void 0 ? void 0 : _j.city, value: (_k = this === null || this === void 0 ? void 0 : this.address) === null || _k === void 0 ? void 0 : _k.city, onScChange: (e) => this.updateAddress({ city: e.target.value || null }), onScInput: (e) => this.handleAddressInput({ city: e.target.value || null }), required: this.required, squared: !!((_l = this === null || this === void 0 ? void 0 : this.regions) === null || _l === void 0 ? void 0 : _l.length), "squared-top": true, disabled: this.disabled, "squared-right": this.showPostal, "aria-label": this.placeholders.city || wp.i18n.__('City', 'surecart') })), this.showPostal && (h("sc-input", { exportparts: "base:input__base, input, form-control, label, help-text", placeholder: this.placeholders.postal_code || wp.i18n.__('Postal Code/Zip', 'surecart'), name: (_m = this.names) === null || _m === void 0 ? void 0 : _m.postal_code, onScChange: (e) => this.updateAddress({ postal_code: e.target.value || null }), onScInput: (e) => this.handleAddressInput({ postal_code: e.target.value || null }), autocomplete: 'postal-code', required: this.required, value: (_o = this === null || this === void 0 ? void 0 : this.address) === null || _o === void 0 ? void 0 : _o.postal_code, squared: !!((_p = this === null || this === void 0 ? void 0 : this.regions) === null || _p === void 0 ? void 0 : _p.length), "squared-top": true, disabled: this.disabled, maxlength: ((_q = this.address) === null || _q === void 0 ? void 0 : _q.country) === 'US' ? 5 : null, "squared-left": this.showCity, "aria-label": this.placeholders.postal_code || wp.i18n.__('Postal Code/Zip', 'surecart') }))), !!((_r = this === null || this === void 0 ? void 0 : this.regions) === null || _r === void 0 ? void 0 : _r.length) && !!((_s = this === null || this === void 0 ? void 0 : this.address) === null || _s === void 0 ? void 0 : _s.country) && (h("sc-select", { exportparts: "base:select__base, input, form-control, label, help-text, trigger, panel, caret, search__base, search__input, search__form-control, menu__base, spinner__base, empty", placeholder: this.placeholders.state || wp.i18n.__('State/Province/Region', 'surecart'), name: (_t = this.names) === null || _t === void 0 ? void 0 : _t.state, autocomplete: 'address-level1', value: (_u = this === null || this === void 0 ? void 0 : this.address) === null || _u === void 0 ? void 0 : _u.state, onScChange: (e) => { var _a; return this.updateAddress({ state: e.target.value || ((_a = e.detail) === null || _a === void 0 ? void 0 : _a.value) || null }); }, choices: this.regions, required: this.required, disabled: this.disabled, search: true, "squared-top": true, "aria-label": this.placeholders.state || wp.i18n.__('State/Province/Region', 'surecart') }))), this.loading && h("sc-block-ui", { exportparts: "base:block-ui, content:block-ui__content" })));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "address": ["handleAddressChange"],
    "requireName": ["handleNameChange"]
  }; }
};
ScAddress.style = scAddressCss;

const scTaxIdInputCss = ":host{display:block;z-index:3;position:relative}";

const ScTaxIdInput = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.scChange = createEvent(this, "scChange", 7);
    this.scInput = createEvent(this, "scInput", 7);
    this.scInputType = createEvent(this, "scInputType", 7);
    this.scSetState = createEvent(this, "scSetState", 7);
    this.country = undefined;
    this.show = false;
    this.type = 'other';
    this.number = null;
    this.status = 'unknown';
    this.loading = undefined;
    this.help = undefined;
    this.otherLabel = wp.i18n.__('Tax ID', 'surecart');
    this.caGstLabel = wp.i18n.__('GST Number', 'surecart');
    this.auAbnLabel = wp.i18n.__('ABN Number', 'surecart');
    this.gbVatLabel = wp.i18n.__('UK VAT', 'surecart');
    this.euVatLabel = wp.i18n.__('EU VAT', 'surecart');
    this.required = false;
  }
  async reportValidity() {
    return this.input.reportValidity();
  }
  onLabelChange() {
    zones.ca_gst.label = this.caGstLabel || zones.ca_gst.label;
    zones.au_abn.label = this.auAbnLabel || zones.au_abn.label;
    zones.gb_vat.label = this.gbVatLabel || zones.gb_vat.label;
    zones.eu_vat.label = this.euVatLabel || zones.eu_vat.label;
    zones.other.label = this.otherLabel || zones.other.label;
  }
  componentWillLoad() {
    if (this.country && !this.type) {
      this.type = getType(this.country);
    }
    this.onLabelChange();
  }
  renderStatus() {
    if (this.status === 'valid') {
      return h("sc-icon", { name: "check", slot: "prefix", style: { color: 'var(--sc-color-success-500)' } });
    }
    if (this.status === 'invalid') {
      return h("sc-icon", { name: "x", slot: "prefix", style: { color: 'var(--sc-color-danger-500)' } });
    }
  }
  render() {
    var _a, _b;
    return (h(Fragment, null, h("sc-input", { name: "tax_identifier.number_type", required: this.required, value: this.type, style: { display: 'none' } }), h("sc-input", { ref: el => (this.input = el), label: (_a = zones === null || zones === void 0 ? void 0 : zones[(this === null || this === void 0 ? void 0 : this.type) || 'other']) === null || _a === void 0 ? void 0 : _a.label, "aria-label": wp.i18n.__('Tax ID', 'surecart'), placeholder: wp.i18n.__('Enter Tax ID', 'surecart'), name: "tax_identifier.number", value: this.number, onScInput: (e) => {
        e.stopImmediatePropagation();
        this.scInput.emit({
          number: e.target.value,
          number_type: this.type || 'other',
        });
      }, onScChange: (e) => {
        e.stopImmediatePropagation();
        this.scChange.emit({
          number: e.target.value,
          number_type: this.type || 'other',
        });
      }, required: this.required }, this.loading && this.type === 'eu_vat' ? h("sc-spinner", { slot: "prefix", style: { '--spinner-size': '10px' } }) : this.renderStatus(), h("sc-dropdown", { slot: "suffix", position: "bottom-right", role: "select", "aria-multiselectable": "false", "aria-label": wp.i18n.__('Select number type', 'surecart') }, h("sc-button", { type: "text", slot: "trigger", caret: true, loading: false, style: { color: 'var(--sc-input-label-color)' }, tabindex: "0" }, (_b = zones === null || zones === void 0 ? void 0 : zones[(this === null || this === void 0 ? void 0 : this.type) || 'other']) === null || _b === void 0 ? void 0 : _b.label_small), h("sc-menu", null, Object.keys(zones || {}).map(name => (h("sc-menu-item", { role: "option", onClick: () => {
        this.scInput.emit({
          number: this.number,
          number_type: name,
        });
        this.scChange.emit({
          number: this.number,
          number_type: name,
        });
        this.type = name;
      }, onKeyDown: e => {
        var _a;
        if (e.key === 'Enter') {
          this.scInput.emit({
            number: this.number,
            number_type: name,
          });
          this.scChange.emit({
            number: this.number,
            number_type: name,
          });
          this.type = name;
          (_a = this.input) === null || _a === void 0 ? void 0 : _a.triggerFocus();
          speak(wp.i18n.sprintf(wp.i18n.__('%s selected', 'surecart'), zones[name].label_small, 'assertive'));
        }
      }, checked: this.type === name, "aria-selected": this.type === name ? 'true' : 'false', "aria-label": zones[name].label_small }, zones[name].label_small))))))));
  }
  static get watchers() { return {
    "otherLabel": ["onLabelChange"],
    "caGstLabel": ["onLabelChange"],
    "auAbnLabel": ["onLabelChange"],
    "gbVatLabel": ["onLabelChange"],
    "euVatLabel": ["onLabelChange"]
  }; }
};
ScTaxIdInput.style = scTaxIdInputCss;

export { ScAddress as sc_address, ScTaxIdInput as sc_tax_id_input };

//# sourceMappingURL=sc-address_2.entry.js.map