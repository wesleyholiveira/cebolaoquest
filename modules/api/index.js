module.exports = function (moduleOptions) {
    // Add middleware only with `nuxt dev` or `nuxt start`
    if (this.options.dev || this.options._start) {
      this.addServerMiddleware('~/server-middleware/index.js')
      this.addServerMiddleware('~/server-middleware/api.js')
    }
  }