webpackJsonp([2],{132:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}();Object.defineProperty(t,"__esModule",{value:!0});var i=a(3),d=l(i),u=a(133),m=a(136),s=l(m),f=function(e){function t(e){n(this,t);var a=r(this,Object.getPrototypeOf(t).call(this,e));return a.state={show:"index"},a}return c(t,e),o(t,[{key:"changeShow",value:function(e){this.setState({show:e})}},{key:"creatItems",value:function(e){return e.length?e.map(function(e,t){return d["default"].createElement("li",{className:"item",key:t},d["default"].createElement("div",{className:"inner"},d["default"].createElement("div",{className:"cover-side"},d["default"].createElement("div",{className:"works-meta"},d["default"].createElement("div",{className:"title"},d["default"].createElement("a",{href:e.link,target:"_blank"},e.title)),d["default"].createElement("div",{className:"author ellipsis"},e.author)),d["default"].createElement("div",{className:"cover shadow-cover"},d["default"].createElement("a",{href:e.link,className:"pic",target:"_blank"},d["default"].createElement("img",{src:e.img,alt:""})))),d["default"].createElement("div",{className:"info-side"},d["default"].createElement("div",{className:"name"},"概览："),d["default"].createElement("blockquote",null,e.excerpt))))}):null}},{key:"render",value:function(){var e=this.state.show;return d["default"].createElement("div",{className:"books-layout"},d["default"].createElement("header",{className:"top"},d["default"].createElement("nav",{className:"nav clearfix"},d["default"].createElement("ul",null,d["default"].createElement("li",{className:"index",onClick:this.changeShow.bind(this,"index")},d["default"].createElement("a",{href:"javascript:void(0);"},"Under 7℃")),d["default"].createElement("li",{onClick:this.changeShow.bind(this,"web")},d["default"].createElement("a",{href:"javascript:void(0);"},"前端")),d["default"].createElement("li",{onClick:this.changeShow.bind(this,"novel")},d["default"].createElement("a",{href:"javascript:void(0);"},"小说")),d["default"].createElement("li",{onClick:this.changeShow.bind(this,"other")},d["default"].createElement("a",{href:"javascript:void(0);"},"其他"))),d["default"].createElement("a",{href:"/#/me",className:"r"},"关于我"),d["default"].createElement("a",{href:"/blog",className:"r"},"博客"))),d["default"].createElement("div",{className:(0,s["default"])("main animated",{hide:"index"!=e})},d["default"].createElement("article",null,d["default"].createElement("section",null,d["default"].createElement("header",null,d["default"].createElement("h3",null,"「最近在读」")),d["default"].createElement("div",{className:"booklist"},d["default"].createElement("ul",null,this.creatItems(u.reading)))),d["default"].createElement("section",null,d["default"].createElement("header",null,d["default"].createElement("h3",null,"「准备阅读」")),d["default"].createElement("div",{className:"booklist"},d["default"].createElement("ul",null,this.creatItems(u.toread)))),d["default"].createElement("section",null,d["default"].createElement("header",null,d["default"].createElement("h3",null,"「已经阅读」")),d["default"].createElement("div",{className:"booklist"},d["default"].createElement("ul",null,this.creatItems(u.year)))))),d["default"].createElement("div",{className:(0,s["default"])("web main animated",{hide:"web"!=e})},d["default"].createElement("article",null,d["default"].createElement("section",null,d["default"].createElement("header",null,d["default"].createElement("h3",null,"「Javascript」")),d["default"].createElement("div",{className:"booklist"},d["default"].createElement("ul",{id:"js"},this.creatItems(u.js)))),d["default"].createElement("section",null,d["default"].createElement("header",null,d["default"].createElement("h3",null,"「Html&Css」")),d["default"].createElement("div",{className:"booklist"},d["default"].createElement("ul",null,this.creatItems(u.html_css)))))),d["default"].createElement("div",{className:(0,s["default"])("novel main animated",{hide:"novel"!=e})},d["default"].createElement("article",null,d["default"].createElement("section",null,d["default"].createElement("div",{className:"booklist"},d["default"].createElement("ul",null,this.creatItems(u.novel)))))),d["default"].createElement("div",{className:(0,s["default"])("novel main animated",{hide:"other"!=e})},d["default"].createElement("article",null,d["default"].createElement("section",null,d["default"].createElement("div",{className:"booklist"},d["default"].createElement("ul",{id:"otherlist"},this.creatItems(u.other)))))))}}]),t}(d["default"].Component);t["default"]=f},133:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=[{title:"阿弥陀佛么么哒",author:"大冰 ",img:"http://7xqfgq.com1.z0.glb.clouddn.com/s28259771.jpg",excerpt:"请相信，这个世界上真的有人在过着你想要的生活。忽晴忽雨的江湖，祝你有梦为马，随处可栖。",link:"http://e.dangdang.com/pc/reader/index.html;jsessionid=CE14FFA5FDFFC204A3F9952F9D17D7F0?id=1900492476"},{title:"AngularJS深度剖析与最佳实践",author:"雪狼 破狼 彭洪伟",img:"http://7xqfgq.com1.z0.glb.clouddn.com/angularjs.jpg",excerpt:"深入讲解AngularJS的基本概念及其背后的原理，包括完整的开发框架与实践。不仅抽丝剥茧地展现了AngularJS的诸多特性与技巧，还讲解了工程实践中容易陷入的“坑”，是从小工走向专家的必备参考。",link:"https://read.douban.com/reader/ebook/17826372/"}],l=[{title:"单恋",author:"东野圭吾",img:"http://7xqfgq.com1.z0.glb.clouddn.com/%E5%8D%95%E6%81%8B.jpg",excerpt:"一个深藏内心的秘密究竟有多大杀伤力？哲朗与美月久别重逢，十年前的一夜缱绻如在昨日...",link:"https://read.douban.com/ebook/9440506/"},{title:"JAVASCRIPT语言精髓与编程实践",author:"周爱民 ",img:"http://7xqfgq.com1.z0.glb.clouddn.com/s2970031.jpg",excerpt:"主要包括以下三个方面的内容：（1）动态、函数式语言，以及其它语言特性在JavaScript的表现与应用；（2）如何用动态函数式语言的特性来扩展JavaScript的语言特性与框架；（3）如何将JavaScript引擎整合到其它高级语言的开发过程中。",link:"http://www.amazon.cn/mn/detailApp/ref=asc_df_B0017KOV8E1999593/?asin=B0017KOV8E&tag=douban-23&creative=2384&creativeASIN=B0017KOV8E&linkCode=df0"}],n=[{title:"白夜行",author:"东野圭吾 ",img:"http://7xqfgq.com1.z0.glb.clouddn.com/s4610502.jpg",excerpt:"“只希望能手牵手在太阳下散步”，这个象征故事内核的绝望念想，有如一个美丽的幌子，随着无数凌乱、压抑、悲凉的故事片段像纪录片一样一一还原……",link:"https://read.douban.com/reader/ebook/680843/"},{title:"活着",author:"余华",img:"http://7xqfgq.com1.z0.glb.clouddn.com/s23836852.jpg",excerpt:"每读一页，都让我们止不住泪湿双眼，因为生命里难得的温情将被一次次死亡撕扯得粉碎，只剩得老了的福贵伴随着一头老牛在阳光下回忆。",link:"http://e.dangdang.com/pc/reader/index.html;jsessionid=8ECCBB61DFA087224081AEE9FD486102?id=1900386506"},{title:"幻夜",author:"东野圭吾",img:"http://7xqfgq.com1.z0.glb.clouddn.com/s3960322.jpg",excerpt:"他们相偕前往东京，然而等待他们的，却是从此再无一丝太阳的无边幻夜：凡是接近过她的人，都遭逢厄运；凡是触碰过她过去的人，都不知所踪……",link:"https://read.douban.com/reader/ebook/698016/"}],r=[{title:"JavaScript权威指南（第6版）",author:"Flanagan，D.",img:"http://7xqfgq.com1.z0.glb.clouddn.com/15113928.jpg",excerpt:"本书是程序员学习核心JavaScript语言和由Web浏览器定义的JavaScript API的指南和综合参考手册。第6版涵盖HTML 5和ECMAScript 5。新增章节描述了jQuery和服务器端JavaScript。",link:"https://read.douban.com/reader/ebook/15113928/"},{title:"AngularJS深度剖析与最佳实践",author:"雪狼 破狼 彭洪伟",img:"http://7xqfgq.com1.z0.glb.clouddn.com/angularjs.jpg",excerpt:"深入讲解AngularJS的基本概念及其背后的原理，包括完整的开发框架与实践。不仅抽丝剥茧地展现了AngularJS的诸多特性与技巧，还讲解了工程实践中容易陷入的“坑”，是从小工走向专家的必备参考。",link:"https://read.douban.com/reader/ebook/17826372/"},{title:"JavaScript高级程序设计（第3版）",author:"Nicholas C.Zakas ",img:"http://7xqfgq.com1.z0.glb.clouddn.com/41ae83c0-f276-451a-8fca-3f769820f3d1.jpg",excerpt:"JavaScript技术经典名著，在详细讲解了JavaScript语言的核心，条分缕析地为读者展示了现有规范及实现为开发Web应用提供的各种支持和特性。",link:"http://cread.e.jd.com/read/startRead.action?bookId=30137817&readType=1"},{title:"ECMAScript6入门",author:"阮一峰",img:"http://7xqfgq.com1.z0.glb.clouddn.com/s28315395.jpg",excerpt:"全面介绍了ECMAScript6新引入的语法特性，覆盖了ECMAScript6与ECMAScript5的所有不同之处，对涉及的语法知识给予了详细介绍，并给出了大量简洁易懂的示例代码。",link:"http://e.dangdang.com/html/reader.html?productId=1900366150&bookUid=br.141466668691055626"},{title:"JAVASCRIPT语言精髓与编程实践",author:"周爱民 ",img:"http://7xqfgq.com1.z0.glb.clouddn.com/s2970031.jpg",excerpt:"主要包括以下三个方面的内容：（1）动态、函数式语言，以及其它语言特性在JavaScript的表现与应用；（2）如何用动态函数式语言的特性来扩展JavaScript的语言特性与框架；（3）如何将JavaScript引擎整合到其它高级语言的开发过程中。",link:"http://www.amazon.cn/mn/detailApp/ref=asc_df_B0017KOV8E1999593/?asin=B0017KOV8E&tag=douban-23&creative=2384&creativeASIN=B0017KOV8E&linkCode=df0"}],c=[{title:"HTML 5与CSS 3权威指南",author:"陆凌牛",img:"http://7xqfgq.com1.z0.glb.clouddn.com/15160963.jpg",excerpt:"《HTML 5与CSS 3权威指南》内容系统而全面，详尽地讲解了html 5和css 3的所有新功能和新特性；技术新颖，所有知识点都紧跟html 5与css 3的最新发展动态。",link:"https://read.douban.com/reader/ebook/15160963/"}],o=[{title:"单恋",author:"东野圭吾",img:"http://7xqfgq.com1.z0.glb.clouddn.com/%E5%8D%95%E6%81%8B.jpg",excerpt:"一个深藏内心的秘密究竟有多大杀伤力？哲朗与美月久别重逢，十年前的一夜缱绻如在昨日...",link:"https://read.douban.com/ebook/9440506/"},{title:"乖，摸摸头",author:"大冰",img:"http://7xqfgq.com1.z0.glb.clouddn.com/7737069.jpg",excerpt:"12个故事，12种善意，如点点星光与烛火，给所有心怀希望的人们以温暖和光芒。请相信，这个世界上真的有人在过着你想要的生活。忽晴忽雨的江湖，祝你有梦为马，随处可栖。...",link:"https://read.douban.com/reader/ebook/7737069/"},{title:"阿弥陀佛么么哒",author:"大冰 ",img:"http://7xqfgq.com1.z0.glb.clouddn.com/s28259771.jpg",excerpt:"请相信，这个世界上真的有人在过着你想要的生活。忽晴忽雨的江湖，祝你有梦为马，随处可栖。",link:"http://e.dangdang.com/pc/reader/index.html;jsessionid=CE14FFA5FDFFC204A3F9952F9D17D7F0?id=1900492476"},{title:"白夜行",author:"东野圭吾 ",img:"http://7xqfgq.com1.z0.glb.clouddn.com/s4610502.jpg",excerpt:"“只希望能手牵手在太阳下散步”，这个象征故事内核的绝望念想，有如一个美丽的幌子，随着无数凌乱、压抑、悲凉的故事片段像纪录片一样一一还原……",link:"https://read.douban.com/reader/ebook/680843/"},{title:"活着",author:"余华",img:"http://7xqfgq.com1.z0.glb.clouddn.com/s23836852.jpg",excerpt:"每读一页，都让我们止不住泪湿双眼，因为生命里难得的温情将被一次次死亡撕扯得粉碎，只剩得老了的福贵伴随着一头老牛在阳光下回忆。",link:"http://e.dangdang.com/pc/reader/index.html;jsessionid=8ECCBB61DFA087224081AEE9FD486102?id=1900386506"},{title:"幻夜",author:"东野圭吾",img:"http://7xqfgq.com1.z0.glb.clouddn.com/s3960322.jpg",excerpt:"他们相偕前往东京，然而等待他们的，却是从此再无一丝太阳的无边幻夜：凡是接近过她的人，都遭逢厄运；凡是触碰过她过去的人，都不知所踪……",link:"https://read.douban.com/reader/ebook/698016/"}],i=[{title:"从0到1",author:"蒂尔 马斯特斯",img:"http://7xqfgq.com1.z0.glb.clouddn.com/8937101.jpg",excerpt:"在传统时代，成功企业的商业模式是一个从1到N的过程，也就是在现有基础上，复制之前的经验，通过竞争不断扩大自己的市场影响力。而在互联网时代，成功的企业却是一个从无到有，即从0到1创造市场的过程。",link:"https://read.douban.com/reader/ebook/8937101/"},{title:"风光摄影的N个关键",author:"王猛",img:"http://7xqfgq.com1.z0.glb.clouddn.com/s22791066.jpg",excerpt:"将风光摄影的成功要诀总结为22个简单易记的关键词，从器材准备出发，再帮助影友在21种风光题材拍摄实战中活学活用这些关键词，最后的部分总结出9个拍摄效果的优化秘技，巩固并提升风光片的拍摄水准。",link:"http://www.amazon.cn/%E9%A3%8E%E5%85%89%E6%91%84%E5%BD%B1%E7%9A%84N%E4%B8%AA%E5%85%B3%E9%94%AE-%E7%8E%8B%E7%8C%9B/dp/B008X0QMUG"},{title:"国富论",author:"亚当·斯密",img:"http://7xqfgq.com1.z0.glb.clouddn.com/s2164670.jpg",excerpt:"可以说《国富论》是现代政治经济学研究的起点。",link:"http://yuedu.baidu.com/ebook/7385b5ff89eb172ded63b7ed?fr=aladdin&key=%E5%9B%BD%E5%AF%8C%E8%AE%BA&f=read"}];t.reading=a,t.toread=l,t.year=n,t.js=r,t.html_css=c,t.novel=o,t.other=i},136:function(e,t,a){var l,n;!function(){"use strict";function a(){for(var e=[],t=0;t<arguments.length;t++){var l=arguments[t];if(l){var n=typeof l;if("string"===n||"number"===n)e.push(l);else if(Array.isArray(l))e.push(a.apply(null,l));else if("object"===n)for(var c in l)r.call(l,c)&&l[c]&&e.push(c)}}return e.join(" ")}var r={}.hasOwnProperty;"undefined"!=typeof e&&e.exports?e.exports=a:(l=[],n=function(){return a}.apply(t,l),!(void 0!==n&&(e.exports=n)))}()}});