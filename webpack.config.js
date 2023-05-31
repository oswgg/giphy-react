const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const rulesForJavascript = {
   test: /\.js$/,
   loader: 'babel-loader',
   options: {
      presets: [
         [
            '@babel/preset-react',
            {
               runtime: 'automatic',
            },
         ],
      ],
   },
}
const rulesForStyles = {
   test: /\.css$/,
   include: path.resolve(__dirname, 'src'),
   use: ['style-loader', 'css-loader', 'postcss-loader'],
}
const rulesForImages = {
   test: /\.(png|svg|jpg|jpeg|gif)$/,
   use: ['file-loader'],
}

module.exports = (env, argv) => {
   const { mode } = argv
   const isProduction = mode === 'production'

   return {
      output: {
         publicPath: '/',
         filename: isProduction ? '[name].[contenthash].js' : 'main.js',
         path: path.resolve(__dirname, 'build'),
      },
      plugins: [
         new HtmlWebpackPlugin({
            template: 'src/index.html',
         }),
      ],
      module: {
         rules: [rulesForJavascript, rulesForStyles, rulesForImages],
      },
      devServer: {
         port: 3000,
         historyApiFallback: true,
         open: true,
      },
   }
}
