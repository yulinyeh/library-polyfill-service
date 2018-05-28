let fs = require('fs')
require('polyfill-service').getPolyfillString({
  uaString: 'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; rv:11.0) like Gecko',
  minify: true,
  features: {
    'default': {},
    'Array.prototype.find': {},
    'String.prototype.repeat': {},
    'Object.entries': {}
  }
}).then(function(_bundleString) {
  fs.writeFile('./polyfill.min.js', _bundleString, _error => {
    console.log('finish!')
  })
});