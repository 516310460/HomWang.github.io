module.exports = {
    // base: '/',
    locales: {
        '/': {
            lang: 'en-us',
            title: 'Nuxt Neo',
            description: 'A nuxt.js module that implements a universal api layer, same-way compatible between server and client side.'
        }
    },
    themeConfig: {
        repo: '516310460/516310460.github.io',
        locales: {
            '/': {
                nav: [
                    {
                        text: 'Languages',
                        items: [
                            { text: 'English', link: '/' },
                        ]
                    }
                ],
                sidebar: [
                    ['/', 'Intro'],
                    ['/getting-started', 'Getting Started'],
                    ['/basic-usage', 'Basic Usage'],
                    ['/configuration', 'Configuration'],
                    ['/middleware', 'Middleware'],
                    ['/error-handling', 'Error Handling'],
                ],
            }
        }
    }
};