const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                },
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.ttf|\.woff2|\.woff|\.eot|\.png|\.svg|\.com/,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
              },
         
        ],
    },
    plugins: [
        new htmlWebpackPlugin({ title: 'Sorting Simulation', template: path.join(__dirname, './src/index.html') }),
    ],
};