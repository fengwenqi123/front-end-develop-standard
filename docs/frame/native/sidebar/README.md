---
prev: ../router/
next: ../mixin/
---

# 侧边栏

## 简述

在 Sidebar 中已经帮你做了判断，当你一个路由下面的 children 声明的路由大于>1 个时，自动会变成嵌套的模式。如果子路由正好等于一个就会默认将子路由作为根路由显示在侧边栏中，若不想这样，可以通过设置在根路由中设置alwaysShow: true来取消这一特性

## 多级目录(嵌套路由)

如果你的路由是多级目录，有三级路由嵌套的情况下，还要手动在二级目录的根文件下添加一个router-view

## 配置项

```html
// No submenu, because children.length===1
{
  path: '/icon',
  component: Layout,
  children: [{
    path: 'index',
    component: ()=>import('svg-icons/index'),
    name: 'icons',
    meta: { title: 'icons', icon: 'icon' }
  }]
},

// Has submenu, because children.length>=1
{
  path: '/components',
  component: Layout,
  name: 'component-demo',
  meta: {
    title: 'components',
    icon: 'component'
  },
  children: [
    { path: 'tinymce', component: ()=>import('components-demo/tinymce'), name: 'tinymce-demo', meta: { title: 'tinymce' }},
    { path: 'markdown', component: ()=>import('components-demo/markdown'), name: 'markdown-demo', meta: { title: 'markdown' }},
  ]
}
```
