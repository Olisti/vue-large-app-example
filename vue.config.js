module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/vue-large-app-example/' : '/',
    chainWebpack(config) {
        config.resolve.alias.delete('@');
        config.resolve.plugin('tsconfig-paths').use(require('tsconfig-paths-webpack-plugin'));
    }
};
