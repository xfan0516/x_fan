/**
 * Created by Administrator on 2019/4/10.
 */
// const CompressionPlugin = require('compression-webpack-plugin')
module.exports = {
    publicPath: './',
    lintOnSave: false,
    // 配置js、css等文件夹的二级目录位置，不设置则会在dist下生成4个文件夹
    assetsDir: "static",
    devServer: {
        port: 8007, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
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
    configureWebpack: {
        resolve: {
          alias: {
            'vue$': 'vue/dist/vue.esm.js' 
          }
        }
    },
    //配置全局样式变量
	css: {
		loaderOptions: {
			sass: {
				prependData: `@import "@/assets/css/index.scss";`
			}
		}
	}
}
