// var webpack =require('webapck');

module.exports = {
  // devtool: 'eval-source-map',
  entry: {
     
     index:__dirname + "/main.js",
  },
  output: {
    path: __dirname + "/public",//打包后的文件存放的地方
    filename: "[name].js"//打包后输出文件的文件名
  },
  module: {//在配置文件里添加JSON loader
    loaders: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
        loader: 'url?limit=25000'
      },
      // { test: /\.css$/, loader: 'style-loader!css-loader' },
    ]
  },
  resolve: {

  alias: {
    'vue$': 'vue/dist/vue.js'
  }
}
  
   



}