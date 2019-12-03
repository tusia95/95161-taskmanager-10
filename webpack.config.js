/* eslint-disable strict */

const path = require(`path`);
module.exports = {
  mode: `development`, // режим сборки
  entry: `./src/main.js`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `public`),
  },
  devtool: `source-map`,
  devServer: {
    contentBase: path.join(__dirname, `public`),
    watchContentBase: true,
    // publicPath: `http://localhost:8080/`,
    compress: true
  }
};

