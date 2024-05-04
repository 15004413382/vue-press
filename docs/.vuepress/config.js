const moment = require ('moment');

module.exports = {
  base:'/docs/',
  title: 'Hello VuePress',
  description: 'Just playing around',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
    ],
    [
      'meta',
      {
        name: 'about',
        content: 'wdsdadsadasdadasda',
      },
    ],
    [
      'meta',
      {
        name: 'keyword',
        content: 'wdsdadsadasdadasdadasd dasdadasdad dasda',
      },
    ],
  ],
  themeConfig: {
    // navbar:false,
    lastUpdated: '最后更新时间',
    logo: '/assets/img/hero.png',
    nav: [
      {text: 'Home', link: '/'},
      {text: 'About', link: '/about/'},
      {
        text: 'External',
        items: [
          {text: 'Chinese', link: '/language/chinese'},
          {text: 'Japanese', link: '/language/japanese'},
        ],
      },
    ],
    // sidebar: [
    //   '',
    //   'about',
    //   {
    //     title: '我是css',
    //     path: '/css/',
    //     collapsable: false,
    //     sidebarDepth: 1,
    //     children: ['/css/css1', '/css/css2', '/css/css3'],
    //   },
    //   {
    //     title: '我是js',
    //     path: '/js/',
    //     collapsable: false,
    //     sidebarDepth: 1,
    //     children: ['/js/js1', '/js/js2', '/js/js3'],
    //   },
    // ],
    sidebar: {
      '/css/': ['css1', 'css2', 'css3'],
      '/js/': ['js1', 'js2', 'js3'],
    },
  },
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          // 不要忘了安装 moment
          const moment = require ('moment');
          moment.locale ('zh-cn');
          return moment (timestamp).format ('LLLL');
        },
      },
    ],
  ],
};
