let path = require('path');
let webpack = require("webpack");
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');

let basePath = __dirname;

module.exports = function(env) {

    return {
        context: path.join(basePath, 'src'),
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx']
        },
        target: "web",

        node: {
            fs: "empty",
            net: "empty"
        },
        entry: {
            styles : './scss/index.scss',
            app: [
                'webpack-dev-server/client?http://0.0.0.0:3002',
                'webpack/hot/only-dev-server',
                '../index.tsx'
            ],
            vendor: [
                '../node_modules/bootstrap/dist/js/bootstrap.min.js'
            ],
            vendorStyles: [
                '../node_modules/bootstrap/dist/css/bootstrap.css',
                '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
            ]
        },
        output: {
            path: path.join(basePath, './dist'),
            filename: '[hash].[name].js'

        },


        devServer: {
            contentBase: './dist',

            /*headers: {
                "Accept": "application/json",
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
                "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Authorization",
                "Access-Control-Allow-Origin": "*"
            },*/
            inline: true,
            host: '0.0.0.0',
            port: 3002,
            hot: true
        },

        devtool: 'inline-source-map',

        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    exclude: /node_modules/,
                    use: [{
                        loader: 'awesome-typescript-loader',
                    }]
                },
                {
                    test: /\.(html)$/,
                    exclude: /node_modules/,
                    loader: 'html-loader'
                },
                {
                    test: /\.(js)$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                },
                {
                    test: /\.(csv|tsv)$/,
                    exclude: /node_modules/,
                    loader: 'dsv-loader',
                },
                {
                    test: /\.json$/,
                    exclude: /node_modules/,
                    loader: 'json-loader',
                },
                {
                    test: /\.scss$/,
                    exclude: /node_modules/,
                    loader: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            { loader: 'css-loader', },
                            { loader: 'sass-loader', },
                        ],
                    }),
                },
                {
                    test: /\.css$/,
                    include: /node_modules/,
                    loader: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: {
                            loader: 'css-loader',
                        },
                    }),
                },

                {
                    test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                    loader: 'url-loader?limit=10000&mimetype=application/font-woff'
                },
                {
                    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                    loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
                },
                {
                    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                    loader: 'file-loader'
                },
                {
                    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                    loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
                },
                {
                    test: /\.(gif|png|jpeg|svg|jpg)$/i,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            query: {
                                name: 'assets/[name].[ext]'
                            }
                        }
                    },
                        {
                            loader: 'image-webpack-loader',
                            options: {
                                query: {
                                    mozjpeg: {
                                        progressive: true,
                                    },
                                    gifsicle: {
                                        interlaced: true,
                                    },
                                    optipng: {
                                        optimizationLevel: 7,
                                    }
                                }
                            }
                        }
                    ]

                }
            ]
        },

        plugins:[
            new CleanWebpackPlugin(['./dist'], {

                verbose: true,
                dry: false,
                watch: true

            }),

            new webpack.optimize.CommonsChunkPlugin({
                names: ['vendor', 'manifest'],
            }),
            new ExtractTextPlugin({
                filename: '[hash].[name].css',
                disable: false,
                allChunks: true,
            }),
            new HtmlWebpackPlugin({
                filename: 'index.html', //Name of file in ./dist/
                template: 'index.html', //Name of template in ./src
                hash: true
            }),
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery"
            }),
        ]
    }
}
