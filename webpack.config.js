const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV.trim() !== 'production';
const chucksCSS = ['main', 'home', 'projects', 'not-found'];

module.exports = {
  entry: {
    index: './src/index.jsx',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        ...chucksCSS.map((name) => ({
          name,
          test: new RegExp(`${name}\\.s?css$`),
          chunks: 'all',
          enforce: true,
        })).reduce((acc, current) => {
          if (!devMode) { acc[current.name] = current; }
          return acc;
        }, {}),
      },
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/', // Crash on build
    filename: 'bundle.js',
    assetModuleFilename: '[path][hash][ext]',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.m?jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|gif|jpe?g|svg)$/i,
        type: 'asset/resource',

      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
      favicon: path.join(__dirname, './public/favicon.ico'),
    }),
    new MiniCssExtractPlugin({
      // Chunk name 'index' is set by entry point where is not recognized by any cacheGroup
      filename: ({ chunk }) => `public/css/${chunk.name === 'index' ? 'styles' : chunk.name}.min.css`,
      chunkFilename: '[id].css',
    }),
  ],
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 3000,
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components'),
    },
    extensions: ['.js', '.jsx'],
  },
};
