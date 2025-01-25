const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = (env) => ({
  // 1. 为了更好的看到打包后的代码，统一设置 mode 为开发模式 development | production
  mode: "development",
  //   entry: path.resolve(__dirname, "src/index.js"),
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    // 2. 指定生产模式下采用 systemjs 模块规范
    libraryTarget: env.production ? "system" : "", // system 为模块规范，此外还有 umd amd esModule commonjs 等
  },
  module: {
    // 3. 使用 babel 解析 js 文件
    rules: [
      {
        test: /\.js$/,
        // 排除不应参与转码的库
        exclude: [
          // \\ for Windows, \/ for Mac OS and Linux
          /node_modules[\\\/]core-js/,
          /node_modules[\\\/]webpack[\\\/]buildin/,
          /node_modules/,
        ],
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              ["@babel/preset-react", { runtime: "automatic" }],
            ],
          },
        },
      },
    ],
  },
  plugins: [
    // 4. 生产环境下不生成 html
    !env.production &&
      new HtmlWebpackPlugin({
        // template: path.resolve(__dirname, "public/index.html"),
        template: path.resolve(__dirname, "public/index.html"),
      }),
  ].filter(Boolean),
  // 5. 生产环境下不打包 react, react-dom。（这里也可以打包到当前项目下， 综合考虑公共模块是否要打包进去、打包后的资源大小）
  // [] 内出现的是不在打包过程中加载的模块，而通过脚本方式引入（cdn 资源等）
  externals: env.production ? ["react", "react-dom"] : [],
});

// 将子应用打包成类库，在主应用中加载这个库（systemjs）
