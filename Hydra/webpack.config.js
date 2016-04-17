var path = require('path')

module.exports={
	entry:{
		main:"./src/main.js"
		pageA:"./src/pageA.js"
	},
	output:{
		filename:"./public/build.js"
		path: path.join(__dirname,'/public/'),
	},
	module:{
		loaders: [
	      	{ 
	        	test: /\.vue$/, 
	        	loader: "vue" 
	      	},
	      	{
	        	test: /\.js$/,
	        	// excluding some local linked packages.
	        	// for normal use cases only node_modules is needed.
	        	exclude: /node_modules|vue\/src|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
	        	loader: 'babel?optional[]=runtime&loose=all'
      		},
      		{ test: /\.css$/, loader: "style!css!stylus" },
      		{ test: /\.html$/, loader: "html" }
    	]
	},
	devtool: '#source-map'
};