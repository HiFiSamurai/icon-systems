'use strict';

var path = require('path');

module.exports = {
    entry: ['./src/react/demo.js'],
    output: {
        filename: 'demo.js',
        path: path.resolve(__dirname, './dist/react')
    },
    module: {
        loaders: [{
            test: /\.js/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
               presets: [
                   'es2015',
                   'react'
               ]
            }
        },{
            test: /\.svg$/,
            loader: 'svg-sprite-loader',
            options: {
                name: 'icon-[name]'
            }
        }]
    },
    plugins: [],
    resolve: {
        modules: [__dirname, 'node_modules']
    }
};
