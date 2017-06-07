const path = require('path')
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: "[name].css"
});

module.exports = {
    devtool: 'source-map',
        entry: {
            'app': [
                './src/index'
            ]
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: extractSass.extract({
                    use: [
                        'css-loader',
                        'postcss-loader',
                        'sass-loader'
                    ],
                    fallback: 'style-loader'
                })
            },
            { test: /\.(woff2?|svg)$/, loader: 'url-loader?limit=10000&outputPath=assets/' },
            { test: /\.(ttf|eot|otf|jpg|png)$/, loader: 'file-loader?name=[name].[ext]&publicPath=img/&outputPath=assets/' }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $ : 'jquery',
            'jQuery': 'jquery'
        }),
        extractSass
    ],
    devServer: {
        contentBase: path.join(__dirname, "./dist")
    }
}