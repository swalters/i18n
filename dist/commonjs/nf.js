'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NfValueConverter = undefined;

var _i18n = require('./i18n');



var NfValueConverter = exports.NfValueConverter = function () {
  NfValueConverter.inject = function inject() {
    return [_i18n.I18N];
  };

  function NfValueConverter(i18n) {
    

    this.service = i18n;
  }

  NfValueConverter.prototype.toView = function toView(value, formatOptions, locale, numberFormat) {
    var nf = numberFormat || this.service.nf(formatOptions, locale || this.service.getLocale());

    return nf.format(value);
  };

  return NfValueConverter;
}();