module.exports = {
    base: '/myDocs/',

    title: 'Allen的学习文档',

    description: 'Allen的学习文档',

    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],

    port: 8081,

    markdown: {
        lineNumbers: true // 代码块显示行号
    },

    themeConfig: {
        nav: [
            { text: 'HTML', link: '/html/' }, // 内部链接 以docs为根目录
            { text: 'CSS', link: '/css/' },
            { text: 'JS', link: '/js/' },
            { text: 'VUE', link: '/vue/' }
        ],

        sidebar: 'auto',

        lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    }
};