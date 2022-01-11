module.exports = {
    title: 'HansenPHP',
    description: 'Simple & easy',
    plugins: [
        [
            '@vuepress/docsearch',
            {
                apiKey: 'bf962ebad7fdb56eee154135b921e84d',
                indexName: 'apps',
                locales: {
                    '/': {
                        placeholder: 'Search Documentation',
                    },
                },
            },
        ],
    ],
    theme: '@vuepress/theme-default',
    themeConfig: {
        sidebar: [
            {
                text: 'Docs',
                link: '/docs',
                children: [
                    ''
                ]
            }
        ]
    }
}