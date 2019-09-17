var nx = require('next-js-core2');
require('../src/next-strip-link');
describe('api.test', function() {
  test('nx.stripLink', function() {
    var url1 = 'https://github.com/afeiship';
    var url2 =
      'https://mp.weixin.qq.com/mp/appmsg/show?__biz=MjM5MzMwODY4NA==&appmsgid=10000043&itemidx=1&sign=9adf0474abe6c7fb20abd2c847bc7133#wechat_redirect';

    var rs1 = nx.stripLink(url1);
    var rs2 = nx.stripLink(url2);

    expect(rs1).toBe('https://github.com/afeiship');
    expect(rs2).toBe(
      'https://mp.weixin.qq.com/mp/appmsg/show?__biz=MjM5MzMwODY4NA==&appmsgid=10000043&itemidx=1&sign=9adf0474abe6c7fb20abd2c847bc7133'
    );
  });
});
