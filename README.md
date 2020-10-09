# project

```
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
```

## 步骤

#### vue-cli4创建项目

#### 调整目录
```

...
|-- examples      // 原 src 目录，改成 examples 用作示例展示
|-- packages      // 新增 packages 用于编写存放组件
...


```

#### 配置项目以支持新的目录结构

- src目录更名为examples，导致项目无法运行
- 新增packages目录，该目录未加入webpack编译

注：cli4 提供一个可选的 vue.config.js 配置文件。如果这个文件存在则他会被自动加载，所有的对项目和webpack的配置，都在这个文件中。

#### 编写组件

    iconfont


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


#### vuePress文档

###### 搭建vuePress基本目录

###### 安装vuePress

```
npm i vuepress -D
npm i element-ui highlight.js node-sass sass-loader core-js@2 -S
```

#### 发布到npm


```
// 如果配置了淘宝镜像，先设置回npm镜像：
npm config set registry http://registry.npmjs.org
// 然后在终端执行登录命令，输入用户名、密码、邮箱即可登录
npm login
// 发布到 npm
npm publish

```

###### 使用 nrm 管理registry

```
npm install -g nrm
 
nrm ls
* npm ---- https://registry.npmjs.org/
  cnpm --- http://r.cnpmjs.org/
  taobao - https://registry.npm.taobao.org/
  nj ----- https://registry.nodejitsu.com/
  rednpm - http://registry.mirror.cqupt.edu.cn/
  npmMirror  https://skimdb.npmjs.com/registry/
  edunpm - http://registry.enpmjs.org/
  
nrm add ynpm http://XXXXXX:4873 # 添加私服的npm镜像地址
nrm use ynpm # 使用私服的镜像地址


```
