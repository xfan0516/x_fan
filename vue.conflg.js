/**
 * Created by Administrator on 2019/4/10.
 */
const CompressionPlugin = require('compression-webpack-plugin')
module.exports = {
    publicPath: './',
    lintOnSave: false,
    devServer: {
        port: 8088, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
        proxy: {
            '/api': {
                // target: 'http://flsc.ycb51.cn',
                target: 'http://qy-test.ycb51.cn/',
                changeOrigin: true
            },
            '/statistics': {
                target: 'http://flsc.ycb51.cn',
                changeOrigin: true
            }

        }
    },
    // Various Dev Server settings
    pluginOptions: {
        lintStyleOnBuild: true, // 添加了插件(@ascendancyy/vue-cli-plugin-stylelint), 所以需要配置
        stylelint: {
            fix: true, // boolean (default: true)
            files: ['src/common/css/*.scss', 'src/App.vue'] // string | [string] (default: ['src/**/*.{vue,htm,html,css,sss,less,scss}'])
            // formatter: () => { } // function (default: require('stylelint-codeframe-formatter'))
            // etc...
        }
    },
    configureWebpack: () => {
        if (process.env.NODE_ENV === 'production') {
            return {
                plugins: [
                    new CompressionPlugin({
                        test: /\.js$|\.html$|.\css/, // 匹配文件名
                        threshold: 10240, // 对超过10k的数据压缩
                        deleteOriginalAssets: false // 不删除源文件
                    })
                ]
            }
        }
    }
}
