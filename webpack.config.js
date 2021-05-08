const path=require('path')

module.exports={
    entry:'./app/app.js',
    output:{
        filename:'mybundle.js',
        path:path.resolve(__dirname,'dist')
    },
    // watch:true
   devServer:{port:8080,
    contentBase:path.resolve(__dirname,"dist")

    }
    
}
