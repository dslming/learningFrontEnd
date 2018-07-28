### webpack 打包流程：

	说明：
		webpack就是前端的一个打包工具。
	1）打包js文件：
		打包：项目中的js文件都是以模块化的方式来书写的，而如果这些js代码直接在浏览器中运行，浏览器是不支持的
		步骤：
			1）全局下载webpack
				注意点：更新之后的webpack还需要再下载多一个包：webpack-cli
				npm install -g webpack webpack-cli
			2）打包:
				webpack ./js/index.js
				注意点：
					a.打包以后webpack会将当前js文件自动打包到一个dist目录下的main.js文件中
					b.main.js文件就是我们要打包的index.js
					c.如果在index.js中引用的其它的js文件，webpack会一并将内容打包到main.js中（如：calc.js中引用了add.js文件，那么将来打包过程中webpack会一并将add.js文件也打包到main.js中）
					d.如果有js文件没有在index.js中使用，就不会打包到main.js中
			3）将index.html中的js文件改为main.js，在浏览器中就可以运行了
	2）打包es6语法的模块：
		模块的语法有两种：
			node:
				导出：module.exports / exports 
				导入：require("模块文件")
			es6:
				导出：export default
				导入：import 模块名 from '模块文件'
			在webpack中，这两种类型的模块语法都支持
		步骤：
			1）将项目文件模块中的语法改为ES6的写法
			2）打包：
			3）在浏览器中打开
			注意点：
				a. 由于将来es6的标准模块写法是export 和 import ，建议将来在书写模块时尽量使用es6模块写法
	3）将wepback安装到项目中
		说明；	
			一般全局安装webpack仅仅只是用于一些测试，而在项目中使用的时候，建议将webpack安装到项目中。因为webpack的版本更新比较快，而且不同版本之间的差别比较大，所以安装在项目便于webpack的版本管理。
		步骤：
			1）在项目中下载webpack
				````
					初始化package.json文件：
						npm init
					安装webpack
						npm install webpack webpack-cli --save-dev
				````
			2）在package.json文件的scripts中加入:
				```	
					"script": {
						"build": "webpack ./js/index.js"
					}
				```
				注意点：
					a. 将打包命令配置到package.json文件，将来再运行项目时就不再需要
						使用webpack ./js/index.js了，只需要 npm run build
					b. build 并不是写死的，改为其它的指令也是可以的，但是建议使用build
					c. 将来在执行打包命令时就不再是使用全局webpack来执行了，而是使用项目中的webpack来执行
			3）运行：
				npm run dev
	
	4）将入口文件配置到配置文件中
		说明：现在打包的入口文件为index.js文件，将来有可能是其它的文件，为了操作方便，我们可以将文件的入口文件配置到配置文件中
		步骤：
			1）创建一个配置文件：webpack.config.js文件中
			2）在文件中暴露一个对象：
				```
					module.exports = {
						entry: './src/index.js',
						output: {
							path: './dist',
							filename: 'bundle.js'
						}
					}
				```
				注意点：	
					a. 将来打包文件时，wepback会找到package.json文件中的entry 属性，作为入口文件进行打包
					b. entry属性为入口文件
					c. output文件是出口文件
						path：出口文件的打包路径（必须是绝对路径）
						filename: 打包好后的文件名称
			3）修改package.json中的script代码
				```	
					"script": {
						"build": "webpack"
					}
				```
			4）运行：
				npm run build
	5）mode 打包模式：
		说明：每次打包文件成功后都有一个警告，如果要去掉这警告，需要给文件当前打包的文件设置一个模式：
		步骤：
			1）找到 webpack.config.js 在文件中添加一个属性：
				```
					mode : 'development'
				```
				注意点：	
					a）可以有两个取值：
						production:
							特点：压缩，优化，打包速度慢，一般项目上线用
						development:
							特点：不压缩，不优化， 打包速度快，一般项目开发阶段使用
			2）运行：
				npm run build
	6）打包css文件：
		说明：项目中除了js文件，还有css文件也可以通过webpack来进行打包，webpack默认情况是无法打包css，图片，文字相当的内容的，但是webpack有很多的 loader包，可以用来帮助打包文件：
		步骤：
			1）将页面中引入css样式的Link标签去掉
			2）在 index.js 文件中引入 css 样式文件：
			3）配置打包 css 文件的相关信息到 webpack.config.js 文件中：
				3.1 下载打包css的打包文件：css-loader 、 style-loader
					npm install css-loader style-loader --save-dev
				3.2 将 loader 的信息配置到配置文件中
					module.exports = {
					  module: {
						rules: [
							｛
								test: /\.css$/,
								use: [ 'style-loader', 'css-loader' ]
							｝
						]
					  }
					};
					注意点：
						1）css-loader：是将 css 为后缀的文件打包了javascript代码
						2）style-loader: 执行 css-loader 打包好的代码，动态生成一个style标签，将标签插入到文档的head中，
						3）css-loader 与 style-loader 在use 时顺序是先 style-loader 再 css-loader
			4）运行：
				npm run build
	7）打包图片
		说明: webpack 中同样可以借助 loader 打包图片
		步骤：	
			1）在文档中使用图片
			2）配置打包图片的代码：
				2.1 下载打包图片的 loader: file-loader
					npm i file-loader --save-dev
				2.2 装饰loader 信息配置到配置文件中：
					module.exports = {
					  module: {
						rules: [
							｛
								test: /\.png|svg|jpg|gif$/,
								use: [ 'file-loader' ]
							｝
						]
					  }
					};
					注意点：
						1）图片打包好之后会改变名称，防止名称相冲突
						2）图片打包好会路径会有问题，需要手动将index.html文件拷贝到dist中
			3）运行：
				npm run build
	8）将静态文件也打包到dist目录下
		说明：静态文件index.html也是项目中的文件，需要打包到dist目录下
		步骤：
			1）下载html的打包插件：html-webpack-plugin
				npm i html-webpack-plugin --save-dev
			2）配置打包相相关信息：
				const HtmlWebpackPlugin = require('html-webpack-plugin');
				plugins: [
			      new HtmlWebpackPlugin({
			        template: 'index.html'
			      })
			    ]
				注意点：
					a. HtmlWebpackPlugin会自动将 template 选项指定的 index.html 文件打包输出到 output.path 目录中
					b. 还会自动将打包好的 js 文件通过 script 标签添加到文档中
			3）运行：
				npm run build	
	9）打包字体资源 
		说明：文档中会用到其它框架中的字体资源，使用时也可以打包起来
		步骤：
			1）引用 bootstrap.css： css文件中有用到字体资源
			2）配置打包相相关信息	
				module.exports = {
				  module: {
					rules: [
						｛
							test: /\.(eot|woff|ttf|woff2|otf)$/,
							use: [ 'file-loader' ]
						｝
					]
				  }
				};
				注意点：
					a. 打包字体资源不需要单独下载loader，直接使用file-loader
					b. webpack 会将所有的使用到的字体文件单独打包到dist目录下
			3）运行：
				npm run build		
	
	10）打包less 文件
		说明：如果在项目中使用到了less 文件，需要安装单独的less环境，使用webpack打包之后，可以直接将less打包成css
		步骤：	
			1）在文档中使用less语法
			2）下载less 打包loader: less-loader less style-loader css-loader
				npm install --save-dev less-loader less
			3）配置相当信息
				{
					test: /\.less$/,
					use: [{
						loader: "style-loader" 
					}, {
						loader: "css-loader" 
					}, {
						loader: "less-loader" 
					}]
				}
				注意点：
					a. 当打包过程中遇到.less结尾的文件：
					b. 使用less-loader 将文件转为css
					c. 使用css-loader 将文件转为js模块
					d. 使用style-loader 将文件生成style标签，插入到head中
					e. 顺序不能改变
			3）运行：
				npm run build	
	11）将es6语法打包es5
		说明：由于es6语法无法在ie浏览器中运行，如果用户的运行环境是ie，代码将无法正常运行。webpack可以将代码中的es6语法转为es5
		步骤：
			1）在文档中使用es6方法：
			2）下载es6转es5 的相关loader包：babel-loader@8.0.0-beta.0 @babel/core @babel/preset-env webpack
				npm install babel-loader@8.0.0-beta.0 @babel/core @babel/preset-env webpack --save-dev
			3）配置相关信息：
				{
					test: /\.js$/,
					exclude: /(node_modules|bower_components)/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env']
						}
					}
				}
				注意点：
					1）@babel/preset-env用来指定转换规则
					2）babel-loader用来转换
					3）当加载到js文件时，如果遇到es6语法，使用babel-loader来进行转换
					4）exclude：除开node_modules和bower_components文件夹中的语法不转换
					5）options指定转换规则
					6）打包好之后es6的相关规则依旧遵守（打包会通过，但是执行会报错）
					7）代码的转换规则可以尝试：babel.io
			4）运行：
				npm run build			
	12）设置源码地图导航：
		说明：在源代码中我们可以输出一段内容，但是打包好以后相关提示信息就没有了，可以在打包文件中配置输出
		步骤：
			1）直接配置：
				 devtool: 'inline-source-map'
			2）运行：
				npm run build			
	13）将打包设置为监视模式：
		说明：每次修改源码后都需要手动打包太麻烦，可以将webpack设置为更新后自动打包
		步骤：	
			1）找到package.json 文件中的script 加入 
				```	
					"script": {
						"build": "webpack ./js/index.js",
						"build:watch": "webpack --watch"
					}
				```
			2）运行：
				npm run build
	14）自动打开打包好后的页面
		说明：每次打包好之后需要手动开启页面，太过麻烦，可以使用webpack配置为页面打包好后自动打开
		步骤：
			1）下载安装自动开启页面的第三方包：webpack-dev-server
				npm install --save-dev webpack-dev-server
			2）配置打包相相关信息
				devServer: {
					contentBase: './dist'
				},
				注意点：
					a. 当打包好后webpack-dev-server会自动启动一个http服务，该服务的 www 目录为./dist
					b. 该服务默认占用8080端口
			3）在package.json中增加配置项：
				```	
					"script": {
						"build": "webpack ./js/index.js",
						"build:watch": "webpack --watch",
						"dev": "webpack-dev-server --open"
					}
				```
			4）运行：
				npm run dev
	15）实现热更新：
		说明：现在的页面可以实现更新以后自动更新，自动更新后会刷新页面，可以使用webpack来实现热更新，效率更高。
		步骤：
			1）配置：
				a. 引入 webpack
					const webpack = require('webpack');
				b. 加入热更新：
					hot: true
				c. 在plugs 之中加入：
					new webpack.NamedModulesPlugin(),
	 				new webpack.HotModuleReplacementPlugin()
			2）运行：
				npm run dev
				注意点：
					现在只能实现css热更新，无法实现js热更新
	16）每次更新前清除dist目录下的文件：
		说明：重新打包时去掉了一些之前用过的文件：比如说图片，上一次打包时会将图片打包到dist目录下，但是下一次打包时不用了，而上一次的还会存在，所以在更新前应该去掉上一次的文件
		步骤：
			1）下载清除的第三方包：clean-webpack-plugin
				npm install clean-webpack-plugin --save-dev
			2）配置打包相相关信息：
				引入第三方包：
					const CleanWebpackPlugin = require('clean-webpack-plugin');
				在plugs中加入：
				plugins: [
			------new CleanWebpackPlugin(['./dist']),
				  new HtmlWebpackPlugin({
					title: 'Output Management'
				  })
				]
				注意点：
					1）第一步是引入文件：
					2）第二步是清除的文件夹
			3）运行：
				npm run dev
	17）加载第三方vue文件：
		说明：webpack并不是一定要配合vue来使用，但是配合vue开发效率会更高
		步骤：
			1）使用vue.js文件
			2）下载vue
			3）打包，会报错：
				需要添加配置：
					resolve: {
						extensions: [ '.vue', '.js', '.json' ]，
						alias: {
							'vue': 'vue/dist/vue.js',
							'@': path.join(__dirname, './src')
						}
					}
				注意点：
					a. resolve.extensions 可以设置加载指定后缀文件时省略后缀
					b. resolve.alias 可以来设置别名：
						vue：当请求vue文件中去 vue/dist/vue.js 目录下加载文件
						@：@对应的目录为src
	18）打包vue组件：
		说明：打包好Vue文件以后需要打包vue的子组件文件
		步骤：
			1）设置组件：
			2）下载Vue组件需要的第三方包：vue-loader vue-template-compiler
				npm install vue-loader vue-template-compiler --save-dev
			3）配置相关信息：
				const VueLoaderPlugin = require('vue-loader/lib/plugin')
				{
					test: /\.vue$/,
					use: {
						loader: 'vue-loader'
					}
				}
				plugins: [
					// make sure to include the plugin!
					new VueLoaderPlugin()
				]