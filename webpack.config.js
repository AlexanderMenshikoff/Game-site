const path = require('path') 
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    //откуда мы берем файл
    entry:{  
        app:'./src/assets/js/index.js'
    },
    //место, куда мы добавляем файл
    output:{
        clean: true,
        filename:'[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    mode: 'development',
    devServer:{
        static:'./src',
        compress: true,
        port: 9000,
        hot: true
    },
    module:{
        rules:[
            //регулярные выражения для проверки sass, scss или css
            {
                test: /\.(s[ac]ss|css)$/i,
                use:['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            }
        ]           
    },
    plugins:[
        new HtmlWebpackPlugin({
            title: 'Game',
            template: 'src/index.html'
        })
    ]
        
    
}