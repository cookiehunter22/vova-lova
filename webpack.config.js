const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: './webpage_scripts/index.js',
	output: {
		path: path.resolve(__dirname, 'public/build'),
		filename: 'bundle.[hash].js',
	},
	plugins: [
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// all options are optional
			filename: '[name].[hash].css',
			chunkFilename: '[id].css',
			ignoreOrder: false, // Enable to remove warnings about conflicting order
		}),
		new CleanWebpackPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(scss|sass)$/,
				exclude: /(node_modules)/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							plugins: () => [require('autoprefixer')],
						},
					},
					'fast-sass-loader',
				],
			},
			{
				test: /\.(png|woff|woff2|eot|ttf|svg|jpg|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '../images/[name].[ext]',
						},
					},
				],
			},
		],
	},
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				cache: true,
				parallel: true,
			}),
			new OptimizeCSSAssetsPlugin({}),
		],
	},
};
