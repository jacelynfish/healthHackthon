const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const webpack = require('webpack');

extractCSS = new ExtractTextPlugin("style.css");

module.exports = {
	entry: {
		main: "./src/app.js",
		vendor:["vue"],
	},
	output:{
		path: path.resolve(__dirname, 'dist'),
		// publicPath: "/",
		filename:"[name].[hash].bundle.js"
		// filename:"[name].bundle.js"

	},
	// devServer:{
	// 	contentBase: path.resolve(__dirname, 'dist'),
	// 	inline: true,
	// 	hot:true,
	// 	stats:'errors-only'
    //
	// },
	module: {
		rules : [
			{
				test:/\.js$/,
				loader:"babel-loader",
				options:{
					"presets": ["latest"]
				},
				exclude : /node_modules/
			},
			{
				test:/\.css$/,
				loader:extractCSS.extract({
					fallbackLoader: 'style-loader',
					loader: 'css-loader!sass-loader'
				})
			},
			{
				test: /\.scss$/,
				loader:extractCSS.extract({
					fallbackLoader: 'style-loader',
					loader: 'css-loader!sass-loader'
				})
			},
			{
        		test: /\.vue$/,
        		loader: 'vue-loader',
				options: {
					cssModules: {
						localIdentName: '[path][name]---[local]---[hash:base64:5]',
						camelCase: true
					},
					loaders:{
						css: extractCSS.extract({
							loader: 'css-loader',
							fallbackLoader: 'style-loader'
						}),
						sass: extractCSS.extract({
							loader:'css-loader!sass-loader',
							fallbackLoader: 'style-loader'
						})
					}
				}
        	},
			{
				test: /\.(woff|woff2|svg|eot|ttf)$/,
				loader: 'file-loader?name=static/font/[name].[ext]?[hash]',

			},
        	{
        		test: /\.(png|jpg|gif|svg)$/,
      		 	loader: 'url-loader?limit=8192&name=static/img/[name].[ext]?[hash]',
      		},
			{
				test: /\.(html|tpl)$/,
				loader: 'html-loader'
			},
		]
	},

	resolve: {
		alias: {
			'vue$': 'vue/dist/vue'
		},
		extensions: ['.js', '.vue'],
	},
	plugins :[


		// new webpack.HotModuleReplacementPlugin(),
		extractCSS,
		new CommonsChunkPlugin({
			name:['commons','vendor','bootstrap']
		}),
		new HtmlWebpackPlugin({
			template:path.join(__dirname, 'src','index.html'),
			filename: './index.html'

		}),
		// new webpack.LoaderOptionsPlugin({
		// 	postcss: function () {
		// 		return [precss, autoprefixer({
		// 			remove: false,
		// 			browsers: ['ie >= 8', '> 1% in CN'],
		// 		})];
		// 	},
     	// 	// vue: {
         //     //
        	// 	// postcss: [require('autoprefixer')(), require('precss')()]
      	// 	// }
   		//  })
	]
}