module.exports = {
  context: __dirname,
  entry: './app',
  output: {
    path: __dirname + '/www/js',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel'
    }]
  }
};
