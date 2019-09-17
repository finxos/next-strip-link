/*!
 * name: next-strip-link
 * url: https://github.com/afeiship/next-strip-link
 * version: 1.0.0
 * date: 2019-09-17T09:07:29.747Z
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var SHARP = '#';
  var QQ_DOMAIN = 'weixin.qq.com';

  nx.stripLink = function(inUrl) {
    if (!inUrl) return inUrl;
    var isSharp = inUrl.indexOf(SHARP) > -1;
    var isWechat = inUrl.indexOf(QQ_DOMAIN) > -1;
    return isSharp && isWechat ? inUrl.split(SHARP)[0] : inUrl;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.stripLink;
  }
})();

//# sourceMappingURL=next-strip-link.js.map
