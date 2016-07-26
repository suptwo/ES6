module.exports = {
	entry:{
		index:"./src/js/demo7-2.js"
	},
	output:{
		path:__dirname,
		filename:"./build/js/[name].js"
	},
	module: {
		loaders: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" } ]
	}
}