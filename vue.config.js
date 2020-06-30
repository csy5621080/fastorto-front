module.exports = {
    lintOnSave: process.env.NODE_ENV !== 'production',
    devServer: {
        proxy: {
            '/user': {
                target: 'http://0.0.0.0:8090/user/',
                changeOrigin: true,
                pathRewrite: {'^/user': ''}
            },
            '/tags': {
                target: 'http://0.0.0.0:8090/tags/',
                changeOrigin: true,
                pathRewrite: {'^/tags': ''}
            },
            '/article': {
                target: 'http://0.0.0.0:8090/article/',
                changeOrigin: true,
                pathRewrite: {'^/article': ''}
            },
        }
    }
}
