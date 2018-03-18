var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: "./css/join.css",
    output: {
        path: __dirname + '/dist',
        filename: "main.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [
                                    require('autoprefixer')({
                                        browsers: ["last 5 versions"]
                                    })
                                ];
                            }
                        }
                    }
                ]
            }
        ]
    },
}