module.exports = {
	title: 'qiaoyun主页', 
	description: '周巧云的博客',
	head: [
			['link', { rel: 'icon', href: '/img/logo.ico' }],
			['link', { rel: 'manifest', href: '/manifest.json' }],
	],
	port: 8086,
	themeConfig: {
    nav: [
      { text: '🐱的Home', link: '/' },
      { text: '技术', link: '/skills/' },
      { text: '杂文', link: '/essay/' },
		],
		
  }
}