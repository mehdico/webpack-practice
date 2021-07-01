var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './src/main.js',
   output: {
     path: path.resolve(__dirname,'./dist'),
      filename: 'bundle.js'
   },
   module: {
     rules: [
        {
           test: /\.css$/,
           // IT IS RUNNING FROM RIGHT TO LEFT!!! >>
           // FIRST css-loader is compile css, THEN pass it to style-loader
           use: ['style-loader', 'css-loader']
        }
     ]
   }
};