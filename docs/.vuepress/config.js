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
        lastUpdated: '上次更新',
        serviceWorker: {
            updatePopup: {
                message: '发现新内容可用',
                buttonText: '刷新'
            }
        },
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
            }
        ],
        sidebar: {
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
