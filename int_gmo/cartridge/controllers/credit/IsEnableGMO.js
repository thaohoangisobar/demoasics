'use strict'

/**
 * Check on/off GMO catridge
 * @returns {Object}
 */
function isEnableGMO() {
    var result = {};
    result.isEnableCreditCard = dw.system.Site.getCurrent().getCustomPreferenceValue('gmo_enable_catridge');
    result.isEnableRakutenId  = dw.system.Site.getCurrent().getCustomPreferenceValue('gmo_enable_rakutenid');
    result.isEnableCommon     = (result.isEnableCreditCard || result.isEnableRakutenId) ? true : false;
    return result;
}

exports.isEnableGMO            = isEnableGMO;
exports.isEnableGMO.public    = true;
