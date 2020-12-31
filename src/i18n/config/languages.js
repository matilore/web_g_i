module.exports = [
    {
        default: true,
        locale: 'es',
        label: 'Español',
        routes: {
            '/': '/',
            '/contact': '/contact',
            '/page1': '/stranka1',
            '/subpage/page1': '/podstranka/stranka1',
            '/subpage/subsubpage/page1': '/podstranka/podpodstranka/stranka1',
        },
    },
    {
        locale: 'en',
        label: 'English',
        routes: {
            '/': '/',
            '/contact': '/contact',
            '/page1': '/page1',
            '/subpage/page1': '/subpage/page1',
            '/subpage/subsubpage/page1': '/subpage/subsubpage/page1',
        },
    },
    {
        locale: 'pt',
        label: 'Português',
        routes: {
            '/': '/',
            '/contact': '/contact',
            '/page1': '/page1',
            '/subpage/page1': '/subpage/page1',
            '/subpage/subsubpage/page1': '/subpage/subsubpage/page1',
        },
    },
]
