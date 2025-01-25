# 微前端 demo 编写

## Part 0. 前言


## Part 1. SystemJs 实现
### 1. 项目搭建

```bash
mkdir systemjs_demo
cd systemjs_demo
pnpm init
pnpm i webpack webpack-cli webpack-dev-server -D
pnpm i html-webpack-plugin -D
pnpm i react@18.2.0 react-dom@18.2.0    # 与 html 中引入的 cdn 版本保持一致
pnpm i -D babel-loader @babel/core @babel/preset-env @babel/preset-react
```

