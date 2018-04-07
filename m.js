const puppeteer = require('puppeteer');
const md5 = require('md5');

(async () => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  await page.setCookie({
    name: '__site_open_id_v1',
    domain: '0b6k.cn',
    value: 'a65b710f72529c70687d204ec787837d90c8c14c448cc91ae8c8a6048b1b0a1a526fcb7f0bde3a26bf9ae9bbec5160705bec15ba65dfe8b55b2aee78afef924cce0c0c156015b9754a7890907c1160b5de00da2fc98b8019cd6941b3fc977972'
  });
  await page.goto('http://0b6k.cn/weixin/Share/b87cc5f28350066102a7b661ffbdd280?from=singlemessage');
  await page.setUserAgent('Mozilla/5.0 (Linux; Android 8.0; VTR-AL00 Build/HUAWEIVTR-AL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.132 MQQBrowser/6.2 TBS/043909 Mobile Safari/537.36 MicroMessenger/6.6.5.1280(0x26060536) NetType/WIFI Language/zh_CN');
  await page.click('#confirm');

  await page.waitForNavigation({
    waitUntil: 'load'
  })
  var html = await page.content();
  console.log(md5(html))
  //   await page.screenshot({path: 'dog.png'});
  //   await browser.close();
})();