# project

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 步骤

#### vue-cli4创建项目（Macha + Chai单元测试）

#### 调整目录
```
.
...
|-- examples      // 原 src 目录，改成 examples 用作示例展示
|-- packages      // 新增 packages 用于编写存放组件
...
. 

```

#### 配置项目以支持新的目录结构

- src目录更名为examples，导致项目无法运行
- 新增packages目录，该目录未加入webpack编译

注：cli3 提供一个可选的 vue.config.js 配置文件。如果这个文件存在则他会被自动加载，所有的对项目和webpack的配置，都在这个文件中。

#### 编写组件

    iconfont

...

#### 搭建测试环境
(vue test utils)[https://vue-test-utils.vuejs.org/zh/]

1. 为核心功能编写测试，保障项目的可靠性
2. 强迫开发者编写更容易被测试的代码，提高代码的质量

###### 安装karma

```
npm i @vue/test-utils karma karma-chrome-launcher karma-mocha karma-
sourcemap-loader karma-spec-reporter karma-webpack mocha karma-chai -D
```

###### 配置Karma文件
karma.conf.js


#### vuePress

###### 搭建vuePress基本目录

###### 安装vuePress

```
npm i vuepress -D
npm i element-ui highlight.js node-sass sass-loader core-js@2 -S
```

