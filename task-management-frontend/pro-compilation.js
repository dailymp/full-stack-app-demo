let path = require('path');
let webpack = require("webpack");
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');
let CompressionPlugin = require('compression-webpack-plugin');

let basePath = __dirname;

module.exports = function(env) {

    return {
        context: path.join(basePath, 'src'),
        resolve: {
            // .js is required for react imports.
            // .tsx is for our app entry point.
            // .ts is optional, in case you will be importing any regular ts files.
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
            filename: '[name].js'
        },

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
                            { loader: 'css-loader', options: {minimize: true} },
                            { loader: 'sass-loader', options: {minimize: true}},
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
                            options: {minimize: true}
                        },
                    }),
                },
                // Loading glyphicons => https://github.com/gowravshekar/bootstrap-webpack
                // Using here url-loader and file-loader
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
                //root: basePath,
                verbose: true,   // Write logs to console
                dry: false,     // Use boolean "true" to test/emulate delete. (will not remove files).
                                // (Default: "false", remove files)
                watch: true,     // If true, remove files on recompile. (Default: false)
                exclude: ['runExpress.js']
            }),
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify('production')
                }
            }),
            new webpack.optimize.AggressiveMergingPlugin(),
            //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin

            new webpack.optimize.CommonsChunkPlugin({
                names: ['vendor', 'manifest'],
            }),
            new CompressionPlugin({
                asset: "[path].gz[query]",
                algorithm: "gzip",
                test: /\.(js|css|html)$/,
                threshold: 10240,
                minRatio: 0.8
            }),
            new ExtractTextPlugin({
                filename: '[name].css',
                disable: false,
                allChunks: true,
            }),
            new HtmlWebpackPlugin({
                filename: 'index.html', //Name of file in ./dist/
                template: 'index.html' //Name of template in ./src
            }),
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery"
            }),
        ]
    }
}
