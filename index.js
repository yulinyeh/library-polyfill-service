let fs = require('fs')
require('polyfill-service').getPolyfillString({
  uaString: 'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; rv:11.0) like Gecko',
  minify: true,
  features: {
    'String.prototype.repeat': {},
    'Number.isNaN': {},
    'Array.prototype.find': {},
    'Array.from': {},
    'Object.entries': {},
    'Object.assign': {},
    'Math.trunc': {},
    'EventSource': {}
  }
}).then(function(_bundleString) {
  fs.writeFile('./polyfill.min.js', _bundleString, _error => {
    console.log('finish!')
  })
});