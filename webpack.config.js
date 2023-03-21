const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3000,
        open: true,
        compress: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: [
                      ['@babel/preset-env', { targets: 'defaults' }],
                    ],
                  },
                },
            },
            {
                test: /\.sass$/,
                use: [
                    'sass-loader',
                    'sass',
                    'style-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(mp4|webm)$/i,
                loader: 'file-loader',
                options: {
                  name: 'assets/[name].[ext]'
                }
            }
        ]
    },   
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Kanban',
            filename: 'index.html',
            template: 'src/template.html',
        })
    ]
}
