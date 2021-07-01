var webpack = require('webpack');
var path = require('path');

var config = {
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
        },
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
     ]
   },
   optimization: {
      minimize: false
   }
};

if(process.env.NODE_ENV === "production"){
   config.optimization.minimize = true;
}


module.exports = config;