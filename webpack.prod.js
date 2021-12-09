const { merge } = require('webpack-merge');
const CompressionPlugin = require("compression-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const common = require('./webpack.common.js');


module.exports = merge(common, {
    mode: 'production', // prod mode on
    plugins: [
        new CompressionPlugin(),
        new CompressionPlugin({
            filename: "[path][base].br",
            algorithm: "brotliCompress",
            test: /\.(js|css|html|svg)$/,
          }),
        new BundleAnalyzerPlugin({
            analyzerMode: "json",
            generateStatsFile: true
        })
    ],
    optimization: {
        splitChunks: {
          chunks: 'all',
        },
    },
});