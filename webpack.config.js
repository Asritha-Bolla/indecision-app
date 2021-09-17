const path = require('path')

module.exports = {
    entry: './src/app.js', //relative path
    output: {
        path: path.join(__dirname, 'public'), //ABSOLUTE PATH IS MANDATORY HERE!
        filename: 'bundle.js'
    },
    module: {
        //let webpack know .js files in our application need babel to convert jsx to ES5 javascript
        //exclude js files in node_modules folder
        rules: [{
            loader: 'babel-loader', //for single loader
            test: /\.js$/,
            exclude: /node_modules/
        },
        {
           test: /\.s?css$/,
           use: [ //for multiple loaders
               'style-loader', //loads css converted into js (by css-loader) into style tags to render in DOM
               'css-loader', //converts css to js 
               'sass-loader' //converts sass/scss files to css (using node-sass internally) (Browser doesn't understand sass/scss)
           ] 
        }]
    },
    devtool: 'cheap-module-eval-source-map', //makes debugging easier in browser's Dev tools (F12) by pointing console.logs or errors to actual source js file rather than bundle.js
    devServer: {
        contentBase: path.join(__dirname, 'public')
        //webpack dev server doesn't use physical bundle.js file in our public folder (use 'dev-server' command in package.json). 
        //it serves bundle content directly from memory making the app faster on rebuilds in dev
        //for prod, build is only done once so use physical bundle file (use 'build' command in package.json)
    }
}