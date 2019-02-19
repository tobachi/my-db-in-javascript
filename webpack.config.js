module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: ["./src/index.js"],
  output: {
    filename: "bundle.js",
    path: __dirname + "/public"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      }
    ]
  }
};