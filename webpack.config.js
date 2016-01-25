const webpack = require('webpack');

const PATHS = {
    app: __dirname + '/app',
    build: __dirname + '/dist'
};

module.exports = {
    entry: PATHS.app,
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: PATHS.build,
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['babel?cacheDirectory'],
            include: PATHS.app
        }, {
            test: /\.sass$/,
            loaders: ['style', 'css', 'sass']
        }]
    },
    devtool: 'source-map',
    devServer: {
      hot: true,
      inline: true,
      progress: true,

      // display only errors to reduce the amount of output
      stats: 'errors-only',
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
}
