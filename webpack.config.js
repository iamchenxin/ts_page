/**
 * Created by z97 on 15-9-13.
 */
module.exports={
    entry:"./src/main.jsx",
    output:{
        path:"./dist/app",
        filename:"app.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
            }
        ]
    }
}