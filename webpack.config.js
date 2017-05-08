'use strict';

var path = require('path');

module.exports = {
    entry: ['./src/svg.js'],
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: path.resolve(__dirname, './dist')
    },
    module: {
        loaders: [{
            test: /\.svg$/,
            use: [{
                loader: 'svg-sprite-loader',
                options: {
                    name: 'icon-[name]'
                }
            }]
        }]
    },
    plugins: [],
    resolve: {
        modules: [__dirname, 'node_modules']
    }
};
