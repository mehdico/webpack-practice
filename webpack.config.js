var webpack = require('webpack');
var path = require('path');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';

var config = {
   entry: './src/main.js',
   output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'bundle.js'
   },
   module: {
      rules: [
         // {
         //    test: /\.s[ac]ss$/, //sass and scss
         //
         //    // its load sass then pass it to css-loader and then pass it to style loader to inject into the page >>
         //    // use:['style-loader', 'css-loader', 'sass-loader']
         // },
         {
            test: /\.(sa|sc|c)ss$/,
            use: [{
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                     hmr: process.env.NODE_ENV === 'development',
                  },
               },
               'css-loader',
               'postcss-loader',
               'sass-loader',
            ],
         },

         {
            test: /\.css$/,
            // IT IS RUNNING FROM RIGHT TO LEFT!!! >>
            // FIRST css-loader is compile css, THEN pass it to style-loader
            use: ['style-loader', 'css-loader']
         },
         {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
         }
      ]
   },
   optimization: {
      minimize: false
   },
   plugins: [
      new MiniCssExtractPlugin({
         // Options similar to the same options in webpackOptions.output
         // both options are optional
         filename: devMode ? '[name].css' : '[name].[hash].css',
         chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
      }),
   ],
};

if (!devMode) {
   config.optimization.minimize = true;
}


module.exports = config;