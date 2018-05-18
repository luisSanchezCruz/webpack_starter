const path = require('path');

module.exports = {
    entry: {
        main: ['babel-polyfill','./src/js/app.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use:[
                    {loader: 'style-loader'},
                    {loader: 'css-loader'}
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    },
    devServer: { //webpack-dev-server --entry /entry/file --output-path /output/path --allowed-hosts .host.com,host2.com
        contentBase: path.resolve(__dirname),
        compress: true,
        port: 8080
    },
    mode: 'development'
}