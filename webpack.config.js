const path = require('path')

const config = {
    entry: './src/index.tsx',
    mode: 'development',
    output: {
        library: "lib",
        libraryTarget: "umd",
        filename: '[name].js',
        path: path.resolve(__dirname, 'lib')
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
    },
    module: {
        rules: [{
            test: /\.(scss|css|less)$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "sass-loader"
            },{
                loader: "less-loader"
            }]
        }, {
            test: /\.tsx?$|\.jsx?$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }, {
                loader: 'ts-loader'
            }]
        }]
    }
}

module.exports = { config }