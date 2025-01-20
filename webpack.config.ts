import path from 'path';
import { DefinePlugin, Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import CopyWebpackPlugin from 'copy-webpack-plugin';
const HtmlWebpackPlugin = require('html-webpack-plugin');

require('dotenv').config({ path: './.env' });

interface Configuration extends WebpackConfiguration {
	devServer?: WebpackDevServerConfiguration;
}

const config: Configuration = {
	mode:
		(process.env.NODE_ENV as 'production' | 'development' | undefined) ??
		'development',
	entry: './src/index.tsx',
	devServer: {
		// allowedHosts: [`${process.env.FAUX_SERVER_HOST}`],
		client: {
			progress: true,
		},
		host: process.env.HOST,
		hot: true,
		onListening: (devServer) => {
			console.log(`now listening on port ${process.env.PORT}`);
		},
		port: process.env.PORT,
	},
	module: {
		rules: [
			{
				test: /.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
		fallback: {
			buffer: require.resolve('buffer'),
			crypto: require.resolve('crypto-browserify'),
			os: require.resolve('os'),
			'os-browserify': require.resolve('os-browserify'),
			path: require.resolve('path'),
			process: require.resolve('process'),
			stream: require.resolve('stream-browserify'),
		},
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
	},
	plugins: [
		new CopyWebpackPlugin({
			patterns: [{
				from: 'public',
				noErrorOnMissing: true,
			}],
		}),
		new HtmlWebpackPlugin({
			title: `Nimbly ${process.env.NODE_ENV}`,
			// Load a custom template (lodash by default)
			template: path.resolve(__dirname, 'src/index.html'),
		}),
		new DefinePlugin({
			'process.env': JSON.stringify(process.env),
		}),
	],
};

export default config;
