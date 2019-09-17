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
