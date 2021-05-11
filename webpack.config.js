const path=require('path')

module.exports={
    entry:'./app/app.js',
    output:{
        filename:'mybundle.js',
        path:path.resolve(__dirname,'dist')
    },
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
