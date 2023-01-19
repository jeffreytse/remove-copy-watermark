import path from 'path';
import webpack from 'webpack';

const config: webpack.Configuration = {
  mode: process.env.NODE_ENV !== 'production' ? 'development' : 'production',
  entry: path.resolve(__dirname, 'src/index'),
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
};

export default config;
