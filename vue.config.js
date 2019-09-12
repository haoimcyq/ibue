module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "/ibue/" : "/",
    lintOnSave: true,
    productionSourceMap: false,
    chainWebpack: config => {

    },
    configureWebpack: {
        performance: {
            hints: 'warning',
            maxEntrypointSize: 50000000,
            maxAssetSize: 30000000,
            assetFilter: function(assetFilename) {
                return assetFilename.endsWith('.js');
            }
        }
    },
};
