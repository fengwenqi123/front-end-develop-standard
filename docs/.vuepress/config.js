/*
 * @Author: guangwei.bao
 * @Date: 2019-01-08 14:39:31
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2019-02-18 17:32:04
 * @Describe: vuepress 配置文件
 */
module.exports = {
    title: '前端开发规范手册@fengwenqi',
    description: '前端开发规范手册',
    head: [
        [
            'link',
            {
                rel: 'icon'
            }
        ]
    ],
    DEST: '.vuepress/dist', // 指定输出目录
    themeConfig: {
        // lastUpdated: '上次更新',
        // serviceWorker: {
        //     updatePopup: {
        //         message: '发现新内容可用',
        //         buttonText: '刷新'
        //     }
        // },
        displayAllHeaders: true, // 展开所有标题
        nav: [
            {
                text: '快速入门',
                link: '/'
            },
            {
                text: '命名规范',
                link: '/name/'
            },
            {
                text: '代码规范',
                items: [
                    {
                        text: 'HTML',
                        link: '/code/html/'
                    },
                    {
                        text: 'CSS',
                        link: '/code/css/'
                    },
                    {
                        text: 'JavaScript',
                        link: '/code/javascript/'
                    },
                    {
                        text: 'ECMAScript 6',
                        link: '/code/es6/'
                    },
                    {
                        text: 'vue',
                        link: '/code/vue/'
                    }
                ]
            },
            {
                text: '项目应用',
                link: '/use/'
            },
            {
                text: '关于',
                link: '/about/'
            },
            {
                text: '框架',
                items: [
                    {
                        text: '原生开发框架',
                        items: [
                            {
                                text: '介绍',
                                link: '/frame/native/introduce/'
                            },
                            {
                                text: '配置',
                                link: '/frame/native/config/'
                            },
                            {
                                text: '权限',
                                link: '/frame/native/Jurisdiction/'
                            },
                            {
                                text: '路由',
                                link: '/frame/native/router/'
                            },
                            {
                                text: '侧边栏',
                                link: '/frame/native/sidebar/'
                            },
                            {
                                text: '混入',
                                link: '/frame/native/mixin/'
                            }
                        ]
                    },
                    {
                        text: '混合开发框架',
                        items: [
                            {
                                text: '介绍',
                                link: '/frame/mix/introduce/'
                            }
                        ]
                    }
                ]
            }
        ],
        sidebar: {
            // 框架
            '/frame/native/config/': [
                {
                    title: '配置',
                    collapsable: false,
                    children: ['/frame/native/config/']
                }
            ],
            '/frame/native/introduce/': [
                {
                    title: '介绍',
                    collapsable: false,
                    children: ['/frame/native/introduce/']
                }
            ],
            '/frame/native/Jurisdiction/': [
                {
                    title: '权限',
                    collapsable: false,
                    children: ['/frame/native/Jurisdiction/']
                }
            ],
            '/frame/native/router/': [
                {
                    title: '路由',
                    collapsable: false,
                    children: ['/frame/native/router/']
                }
            ],
            '/frame/native/sidebar/': [
                {
                    title: '侧边栏',
                    collapsable: false,
                    children: ['/frame/native/sidebar/']
                }
            ],
            '/frame/native/mixin/': [
                {
                    title: '混入',
                    collapsable: false,
                    children: ['/frame/native/mixin/']
                }
            ],
            '/frame/mix/introduce/': [
                {
                    title: '介绍',
                    collapsable: false,
                    children: ['/frame/mix/introduce/']
                }
            ],
            // 命名规范
            '/name/': [
                {
                    title: '',
                    collapsable: false,
                    children: ['/name/']
                }
            ],
            // 代码规范 html
            '/code/html/': [
                {
                    title: '',
                    collapsable: false,
                    children: ['/code/html/']
                }
            ],
            // 代码规范 css
            '/code/css/': [
                {
                    title: '',
                    collapsable: false,
                    children: ['/code/css/']
                }
            ],
            // 代码规范 javascript
            '/code/javascript/': [
                {
                    title: '',
                    collapsable: false,
                    children: ['/code/javascript/']
                }
            ],
            // 代码规范 es6
            '/code/es6/': [
                {
                    title: '',
                    collapsable: false,
                    children: ['/code/es6/']
                }
            ],
            // 代码规范 react
            '/code/vue/': [
                {
                    title: '',
                    collapsable: false,
                    children: ['/code/vue/']
                }
            ],
            // 关于
            '/about/': [
                {
                    title: '',
                    collapsable: false,
                    children: ['/about/']
                }
            ],
            // 项目应用
            '/use/': [
                {
                    title: '',
                    collapsable: false,
                    children: ['/use/']
                }
            ],
            // 快速入门
            '/': [
                {
                    title: '',
                    collapsable: false,
                    children: ['/']
                }
            ]
        }
    }
};
