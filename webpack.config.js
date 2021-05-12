const currentTask=process.env.npm_lifecycle_event
const path=require('path')
const MiniCssExtractPlugin=require('mini-css-extract-plugin')
const config={
    entry:'./app/app.js',
    output:{
        filename:'mybundle.[hash].js',
        path:path.resolve(__dirname,'dist')
    },
    plugins:[],
    mode:"production",
    // watch:true
   devServer:{port:8080,
    contentBase:path.resolve(__dirname,"dist"),
    hot:true
    },
    module:{
        rules:[
        {
            test: /\.scss$/,
            use:["style-loader","css-loader","sass-loader"]
        },
            {
                test: /\.js$/,
                exclude:/(node_modules|bower_components)/,
                use:{
                    loader:"babel-loader",
                    options:{
                        presets:['@babel/preset-env',"@babel/preset-react"]
                    }
                }
            }
        ]
    }
    
}

if(currentTask=="build"){
    config.mode="production"
    config.module.rules[0].use[0]=MiniCssExtractPlugin.loader
    config.plugins.push(new MiniCssExtractPlugin({filename:'main.[hash].css'}))
}
module.exports=config
