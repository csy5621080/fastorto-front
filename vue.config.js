process.env.VUE_APP_URL = 'http://0.0.0.0:8090'

module.exports = {
    lintOnSave: process.env.NODE_ENV !== 'production',
    devServer: {
        proxy: {
            '/user': {
                target: process.env.VUE_APP_URL+'/user/',
                changeOrigin: true,
                pathRewrite: {'^/user': ''}
            },
            '/tags': {
                target: process.env.VUE_APP_URL+'/tags/',
                changeOrigin: true,
                pathRewrite: {'^/tags': ''}
            },
            '/article': {
                target: process.env.VUE_APP_URL+'/article/',
                changeOrigin: true,
                pathRewrite: {'^/article': ''}
            },
        }
    }
}
