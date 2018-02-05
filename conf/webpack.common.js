const process = global.process;
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
	filename: '[name].[contenthash].css',
});

module.exports = {

	context: path.join(process.cwd(), 'src'), //the home directory for webpack

	devtool: 'source-map', // enhance debugging by adding meta info for the browser devtools

	entry: {
		app: './index.js',
	},

	output: {
		path: path.join(process.cwd(), 'docs'),
		filename: '[name].[hash].js',
		publicPath: '/project.github.io',
		// publicPath: '/',
		sourceMapFilename: '[name].map',
	},

	resolve: {
		extensions: ['.js'],  // extensions that are used
		modules: [path.join(process.cwd(), 'src'), 'node_modules'], // directories where to look for modules
	},

	module: {
		rules: [{
			enforce: 'pre', // to check source files, not modified by other loaders (like babel-loader)
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'eslint-loader',
		}, {
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['env'],
				},
			},
		}, {
			test: /\.sass$/,
			use: extractSass.extract({
				use: [
					{
						loader: 'css-loader',
						options: {
							sourceMap: false,
						},
					}, {
						loader: 'sass-loader',
						options: {
							sourceMap: false,
						},
					}],
				// use style-loader in development
				fallback: 'style-loader',
			}),
		}, {
			test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
			loader: 'url-loader',
			options: {
				limit: 10000,
			},
		}, {
			test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
			loader: 'url-loader',
			options: {
				limit: 10000,
			},
		}],
	},
	plugins: [
		new CleanWebpackPlugin(['docs'], { root: process.cwd() }),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
		}),
		new HtmlWebpackPlugin({
			template: 'index.html',
		}),
		extractSass,
	],
};
