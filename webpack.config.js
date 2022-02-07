const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json'],
  },
  mode: 'production',
  entry: path.resolve(__dirname, 'src/index.ts'),
  output: {
    filename: '[name].js',// 生成的fiename需要与package.json中的main一致
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new ForkTsCheckerWebpackPlugin()]
};
