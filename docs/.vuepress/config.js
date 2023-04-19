module.exports = {
    title: "Aurora Lin",
    description: "My details",
    head: [
        ['link', { rel: 'icon', href: '/kitty.png' }],
    ],
    base: '/gum-blog/',
    themeConfig: {
        logo: '/kitty.png',
        nav: [
            { text: '首页', link: '/' },
            {
                text: '成品展示',
                link: '/display/',
                items: [
                    { text: '普通奶油胶', link: '/display/normal/' },
                    { text: '布洛克奶油胶', link: '/display/brogue/' }
                ]
            },
            {
                text: '个人信息',
                link: '/profile/'
            },
            {
                text: '原料购买',
                link: '/ingredients/',
                items: [
                    { text: '奶油胶', link: '/ingredients/gum/' },
                    { text: '花嘴', link: '/ingredients/beak/' },
                    { text: '树脂配件', link: '/ingredients/accessories/' },
                    { text: '卡套', link: '/ingredients/holder/' }

                ]
            },
            {
                text: '制作教程',
                link: '/course/'
            }
        ],
        sidebar: 'auto',
    },
    plugins: [
        ['cursor-effects', {
            size: 2, // size of the particle, default: 2
            shape: 'star', // ['star' | 'circle'], // shape of the particle, default: 'star'
            zIndex: 999999999, // z-index property of the canvas, default: 999999999
        }],
        ['@vuepress/back-to-top'],
        ['@vuepress/plugin-medium-zoom'],
        ['vuepress-plugin-comment',
            {
                choosen: 'valine',
                options: {
                    el: '#valine-vuepress-comment',
                    appId: '6i928PFGTEwqv0J1iDiJ8qPN-gzGzoHsz',
                    appKey: 'X3z2wNkN4oRZxpoMqCHWXtpD',
                    placeholder: '畅所欲言',
                    avatar: 'wavatar',
                    recordIP: true,
                }
            }
        ],
        [
            "music-bar",
            {

                platform: [

                    {
                        name: "music.163.com",
                        playListIDs: ["910222728"] //支持多个歌单 ID  //Support multiple playlist IDs
                    }
                ],

                firstClickPlay: true,
                background: "#f6bcd2"
            }
        ]
    ]
}