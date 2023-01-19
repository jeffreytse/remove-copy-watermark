import path from 'path';
import webpack from 'webpack';
import pkg from './package.json';

const config: webpack.Configuration = {
  mode: process.env.NODE_ENV !== 'production' ? 'development' : 'production',
  entry: {
    tampermonkey: {
      import: path.resolve(
        __dirname,
        'plugins/tampermonkey/remove-copy-watermark.user.js'
      ),
      filename: 'bin/' + `${pkg.name}.user.js`,
    },
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        test: /\.[tj]sx?$/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      include: [/\.user\.[tj]sx?$/],
    }),
    new webpack.BannerPlugin({
      test: /\.user\.[tj]sx?$/,
      raw: true,
      banner: `
        // ==UserScript==
        // @namespace     https://github.com/jeffreytse
        // @name          Remove Copy Watermark
        // @description   ${pkg.description}
        // @version       ${pkg.version}
        // @author        ${pkg.author}
        // @license       ${pkg.license}
        // @copyright     2022, ${pkg.license}
        // @match         *://*/*
        // @grant         none
        // @run-at        document-start
        // ==/UserScript==`.replace(/^\s+/gm, ''),
    }),
  ],
};

export default config;
