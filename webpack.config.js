


module.exports = {
    entry: __dirname + "/src/index.js",
    output: {
        path: __dirname + "/dist/app/",
        filename: "bundle.js",
        publicPath: "/dist/app"
    },
    module: 
    {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    devServer:
    {
        historyApiFallback: true
    }
}