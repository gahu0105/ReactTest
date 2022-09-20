
const HtmlWebpackPlugin = require('html-webpack-plugin');
const port = process.env.PORT || 3000;

module.exports = {
	mode: 'development', // 1
	entry: './src/index.js', // 2
	output: { // 3
		filename: 'bundle.[hash].js' // 4
	},
    plugins: [
        new HtmlWebpackPlugin({
          template: "public/index.html",
        }),
      ],
    module: {
        rules: [
          { // 1
            // test: /\.(js|jsx)$/,
            test: /\.js|\.jsx$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            },
          },      
          { // 2
            test: /\.html$/,
            use: [
              {
                loader: 'html-loader',
                options: {
                  minimize: true,
                },
              },
            ],
          },
          { //3
            test: /\.css$/,
            use: [{
              loader: 'style-loader'
            },
            {
              loader: 'css-loader'
            }, 
            {
              loader: 'sass-loader'
            }]
          },
        ],
      },
      devServer: {
        host: 'localhost',
        port: port,
        open: true,
      },
    devtool: 'inline-source-map',
    resolve: {
      extensions: ['.js', '.jsx']
    }
};
