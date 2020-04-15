---
prev: ../../../about/
next: ../config/
---

# 介绍

## 简述

采用vue-cli4脚手架，它基于 vue 和 element-ui实现。它使用了最新的前端技术栈，内置了动态路由，权限验证，提炼了典型的业务模型（如后台表格，表单提交等），可以快速搭建企业级中后台产品原型
在与cli2对比下，运行，热更新和打包速度上都有较大的提升。

## 功能

```html
- 登录 / 注销

- 权限验证
  - 单点登录
  - 页面权限
  - 权限配置

- 全局功能
  - 国际化多语言
  - 动态侧边栏
  - 动态面包屑
  - 快捷导航
  - Svg Sprite 图标
  - Screenfull全屏
  - 自适应收缩侧边栏

- Excel
  - 导出excel

- 表格
  - 动态表格
  - 拖拽表格
  - 内联编辑

- 错误页面
  - 404

- 综合实例
- 错误日志
- ECharts 图表
- dom-to-image
```

## 目录结构

```html
├── build                      # 构建相关
├── public                     # 静态资源
│   │── favicon.ico            # favicon图标
│   └── index.html             # html模板
├── src                        # 源代码
│   ├── api                    # 所有请求
│   ├── assets                 # 主题 字体等静态资源
│   ├── components             # 全局公用组件
│   ├── directive              # 全局指令
│   ├── filters                # 全局 filter
│   ├── icons                  # 项目所有 svg icons
│   ├── lang                   # 国际化 language
│   ├── layout                 # 全局 layout
│   ├── router                 # 路由
│   ├── store                  # 全局 store管理
│   ├── styles                 # 全局样式
│   ├── utils                  # 全局公用方法
│   ├── views                  # views 所有页面
│   ├── App.vue                # 入口页面
│   ├── main.js                # 入口文件 加载组件 初始化等
│   └── permission.js          # 权限管理
├── .env.xxx                   # 环境变量配置
├── .eslintrc.js               # eslint 配置项
├── babel.config.js            # babel-loader 配置
├── vue.config.js              # vue-cli 配置
├── postcss.config.js          # postcss 配置(pc端可以删除)
└── package.json               # package.json
```

## 安装
```html
# 克隆项目
git clone https://gitee.com/fengwenqi/admin-zhhs-new.git

# 进入项目目录
cd admin-zhhs-new

# 安装依赖
npm install

# 本地开发 启动项目
npm run dev
```