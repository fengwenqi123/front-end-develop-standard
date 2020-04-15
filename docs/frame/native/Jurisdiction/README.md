---
prev: ../config/
next: ../router/
---

# 权限

## 简述

项目中权限的实现方式是：后台通过一个 tree 控件给每一个页面动态配置权限，之后将这份路由表存储到后端。当用户登录后得到Token，前端根据Token去向后端请求可访问的路由表，从而动态生成可访问页面，之后就是 router.addRoutes 动态挂载到 router 上

## 源码

```html
router.beforeEach(async(to, from, next) => {
  NProgress.start()
  if (getToken()) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      const hasRoles = store.getters.roles && store.getters.roles.length > 0
      if (hasRoles) {
        next()
      } else {
        try {
          // 获取用户信息
          const roles = await store.dispatch('GetInfo')
          // 根据用户信息返回的权限列表与路由表进行匹配
          const accessRoutes = await store.dispatch('GenerateRoutes', roles)
          // 动态添加路由
          router.addRoutes(accessRoutes)
          next({ ...to, replace: true })
        } catch (error) {
          await store.dispatch('FedLogOut')
          Message.error(error || '验证失败，请再次登录')
          next({ path: '/' })
          NProgress.done()
        }
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next({ path: '/login' })
      NProgress.done()
    }
  }
})
```

```html
获取后台权限后，动态匹配生成路由表
import {asyncRouterMap, constantRouterMap} from '@/router'

/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.indexOf(role) >= 0)
  } else {
    return true
  }
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param asyncRouterMap
 * @param roles
 */
function filterAsyncRouter(asyncRouterMap, roles) {
  const accessedRouters = asyncRouterMap.filter(route => {
    if (hasPermission(roles, route)) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, roles)
      }
      return true
    }
    return false
  })
  return accessedRouters
}

const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
    }
  },
  actions: {
    GenerateRoutes({commit}, data) {
      return new Promise(resolve => {
        var arr = [] // 获取父级节点权限
        data.forEach(item => {
          var itx = item.split(':')
          itx.reduce((prev, cur) => {
            arr.push(prev)
            return `${prev}:${cur}`
          })
        })
        var rolesAll = [...data, ...arr]
        var roles = []
        rolesAll.forEach((item, index) => {
          if (roles.indexOf(item) === -1) {
            roles.push(item)
          }
        })
        const accessedRouters = filterAsyncRouter(asyncRouterMap, roles)
        // if (roles.indexOf('admin') >= 0) {
        //   accessedRouters = asyncRouterMap
        // } else {
        // accessedRouters = filterAsyncRouter(asyncRouterMap, roles)
        // }
        commit('SET_ROUTERS', accessedRouters)
        resolve(accessedRouters)
      })
    }
  }
}

export default permission
```