process.env.VUE_APP_VERSION = require('./package.json').version;

module.exports = {
	configureWebpack: {
		performance: {
			maxEntrypointSize: 4194304, // 4 MiB
			maxAssetSize: 2097152       // 2 MiB
		},
		output: {
			filename: "js/[contenthash]-[name].js",
			chunkFilename: "js/[chunkhash]-[name].bundle.js",
		},
	},
	productionSourceMap: false,
	publicPath: "/",
	chainWebpack: config => {
		config.module
			.rule('raw')
			.test(/\.md$/)
			.use('raw-loader')
			.loader('raw-loader')
			.end()
	},
};
