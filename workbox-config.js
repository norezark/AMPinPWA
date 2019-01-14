module.exports = {
    "globDirectory": ".",
    "globPatterns": [
      "**/*.{png,html,json,js}"
    ],
    "swDest": "sw.js",
    "runtimeCaching": [{
      urlPattern: new RegExp('^https://cdn.ampproject.org'),
      handler: 'staleWhileRevalidate',
      options: {
        cacheableResponse: {
          statuses: [0, 200]
        }
      }
    }]
  };