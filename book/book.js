/*
 * 模板渲染，不能防备xss。
 *
 */
'use strtic'

function tpl(str, data) {
    var fn = function(data) {
        var i, variable = [],
            value = [];
        for (i in data) {
            variable.push(i);
            value.push(data[i]);
        }
        return (new Function(variable, fn.code))
            .apply(data, value); // new Function返回渲染结果HTML
    };

    fn.code = fn.code || "var $parts=[]; $parts.push('" + str
        .replace(/\\/g, '\\\\')
        .replace(/[\r\t\n]/g, " ")
        .split("<%").join("\t")
        .replace(/(^|%>)[^\t]*/g, function(str) {
            return str.replace(/'/g, "\\'");
        }) // 将模板中文本部分的单引号替换为\'
        .replace(/\t=(.*?)%>/g, "',$1,'") // 将模板中<%= %>的直接数据引用（无逻辑代码）与两侧的文本用'和,隔开，同时去掉了左标签产生的tab符
        .split("\t").join("');") // 将tab符（上面替换左标签产生）替换为'); 由于上一步已经把<%=产生的tab符去掉，因此这里实际替换的只有逻辑代码的左标签
        .split("%>").join("$parts.push('") // 把剩下的右标签%>（逻辑代码的）替换为"$parts.push('"
        + "'); return $parts.join('');"; // 最后得到的就是一段JS代码，保留模板中的逻辑，并依次把模板中的常量和变量压入$parts数组

    return data ? fn(data) : fn;
}
var util = {
    // 事件监听
    // 参数： 操作的元素,事件名称 ,事件处理程序
    addEvent: function(element, type, handler) {
        if (element.addEventListener) {
            //事件类型、需要执行的函数、是否捕捉
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent('on' + type, function() {
                handler.call(element);
            });
        } else {
            element['on' + type] = handler;
        }
    },
    hasClass: function(obj, cls) {
        return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
    },
    addClass: function(obj, cls) {
        if (!this.hasClass(obj, cls)) { obj.className += " " + cls; }
    },
    removeClass: function(obj, cls) {
        if (this.hasClass(obj, cls)) {
            var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
            obj.className = obj.className.replace(reg, ' ');
        }
    }
};
window._reading = {
    data: [{
        title: "阿弥陀佛么么哒",
        author: "大冰 ",
        img: "http://7xqfgq.com1.z0.glb.clouddn.com/s28259771.jpg",
        excerpt: "请相信，这个世界上真的有人在过着你想要的生活。忽晴忽雨的江湖，祝你有梦为马，随处可栖。",
        link: "http://e.dangdang.com/pc/reader/index.html;jsessionid=CE14FFA5FDFFC204A3F9952F9D17D7F0?id=1900492476"
    }, {
        title: "AngularJS深度剖析与最佳实践",
        author: "雪狼 破狼 彭洪伟",
        img: "http://7xqfgq.com1.z0.glb.clouddn.com/angularjs.jpg",
        excerpt: "深入讲解AngularJS的基本概念及其背后的原理，包括完整的开发框架与实践。不仅抽丝剥茧地展现了AngularJS的诸多特性与技巧，还讲解了工程实践中容易陷入的“坑”，是从小工走向专家的必备参考。",
        link: "https://read.douban.com/reader/ebook/17826372/"
    }],
};
window._toread = {
    data: [{
        title: "单恋",
        author: "东野圭吾",
        img: "http://7xqfgq.com1.z0.glb.clouddn.com/%E5%8D%95%E6%81%8B.jpg",
        excerpt: "一个深藏内心的秘密究竟有多大杀伤力？哲朗与美月久别重逢，十年前的一夜缱绻如在昨日...",
        link: "https://read.douban.com/ebook/9440506/"
    },{
        title: "JAVASCRIPT语言精髓与编程实践",
        author: "周爱民 ",
        img: "http://7xqfgq.com1.z0.glb.clouddn.com/s2970031.jpg",
        excerpt: "主要包括以下三个方面的内容：（1）动态、函数式语言，以及其它语言特性在JavaScript的表现与应用；（2）如何用动态函数式语言的特性来扩展JavaScript的语言特性与框架；（3）如何将JavaScript引擎整合到其它高级语言的开发过程中。",
        link: "http://www.amazon.cn/mn/detailApp/ref=asc_df_B0017KOV8E1999593/?asin=B0017KOV8E&tag=douban-23&creative=2384&creativeASIN=B0017KOV8E&linkCode=df0"
    }],
};
window._year = {
    data: [{
        title: "白夜行",
        author: "东野圭吾 ",
        img: "http://7xqfgq.com1.z0.glb.clouddn.com/s4610502.jpg",
        excerpt: "“只希望能手牵手在太阳下散步”，这个象征故事内核的绝望念想，有如一个美丽的幌子，随着无数凌乱、压抑、悲凉的故事片段像纪录片一样一一还原……",
        link: "https://read.douban.com/reader/ebook/680843/"
    },{
        title: "活着",
        author: "余华",
        img: "http://7xqfgq.com1.z0.glb.clouddn.com/s23836852.jpg",
        excerpt: "每读一页，都让我们止不住泪湿双眼，因为生命里难得的温情将被一次次死亡撕扯得粉碎，只剩得老了的福贵伴随着一头老牛在阳光下回忆。",
        link: "http://e.dangdang.com/pc/reader/index.html;jsessionid=8ECCBB61DFA087224081AEE9FD486102?id=1900386506"
    },{
        title: "幻夜",
        author: "东野圭吾",
        img: "http://7xqfgq.com1.z0.glb.clouddn.com/s3960322.jpg",
        excerpt: "他们相偕前往东京，然而等待他们的，却是从此再无一丝太阳的无边幻夜：凡是接近过她的人，都遭逢厄运；凡是触碰过她过去的人，都不知所踪……",
        link: "https://read.douban.com/reader/ebook/698016/"
    }],
};
window._js = {
    data: [{
        title: "JavaScript权威指南（第6版）",
        author: "Flanagan，D.",
        img: "http://7xqfgq.com1.z0.glb.clouddn.com/15113928.jpg",
        excerpt: "本书是程序员学习核心JavaScript语言和由Web浏览器定义的JavaScript API的指南和综合参考手册。第6版涵盖HTML 5和ECMAScript 5。新增章节描述了jQuery和服务器端JavaScript。",
        link: "https://read.douban.com/reader/ebook/15113928/"
    },{
        title: "AngularJS深度剖析与最佳实践",
        author: "雪狼 破狼 彭洪伟",
        img: "http://7xqfgq.com1.z0.glb.clouddn.com/angularjs.jpg",
        excerpt: "深入讲解AngularJS的基本概念及其背后的原理，包括完整的开发框架与实践。不仅抽丝剥茧地展现了AngularJS的诸多特性与技巧，还讲解了工程实践中容易陷入的“坑”，是从小工走向专家的必备参考。",
        link: "https://read.douban.com/reader/ebook/17826372/"
    },{
        title: "JavaScript高级程序设计（第3版）",
        author: "Nicholas C.Zakas ",
        img: "http://7xqfgq.com1.z0.glb.clouddn.com/41ae83c0-f276-451a-8fca-3f769820f3d1.jpg",
        excerpt: "JavaScript技术经典名著，在详细讲解了JavaScript语言的核心，条分缕析地为读者展示了现有规范及实现为开发Web应用提供的各种支持和特性。",
        link: "http://cread.e.jd.com/read/startRead.action?bookId=30137817&readType=1"
    },{
        title: "ECMAScript6入门",
        author: "阮一峰",
        img: "http://7xqfgq.com1.z0.glb.clouddn.com/s28315395.jpg",
        excerpt: "全面介绍了ECMAScript6新引入的语法特性，覆盖了ECMAScript6与ECMAScript5的所有不同之处，对涉及的语法知识给予了详细介绍，并给出了大量简洁易懂的示例代码。",
        link: "http://e.dangdang.com/html/reader.html?productId=1900366150&bookUid=br.141466668691055626"
    },{
        title: "JAVASCRIPT语言精髓与编程实践",
        author: "周爱民 ",
        img: "http://7xqfgq.com1.z0.glb.clouddn.com/s2970031.jpg",
        excerpt: "主要包括以下三个方面的内容：（1）动态、函数式语言，以及其它语言特性在JavaScript的表现与应用；（2）如何用动态函数式语言的特性来扩展JavaScript的语言特性与框架；（3）如何将JavaScript引擎整合到其它高级语言的开发过程中。",
        link: "http://www.amazon.cn/mn/detailApp/ref=asc_df_B0017KOV8E1999593/?asin=B0017KOV8E&tag=douban-23&creative=2384&creativeASIN=B0017KOV8E&linkCode=df0"
    }],
};
window._html_css = {
    data: [{
        title: "HTML 5与CSS 3权威指南",
        author: "陆凌牛",
        img: "http://7xqfgq.com1.z0.glb.clouddn.com/15160963.jpg",
        excerpt: "《HTML 5与CSS 3权威指南》内容系统而全面，详尽地讲解了html 5和css 3的所有新功能和新特性；技术新颖，所有知识点都紧跟html 5与css 3的最新发展动态。",
        link: "https://read.douban.com/reader/ebook/15160963/"
    }],
};
window._novel = {
    data: [{
        title: "单恋",
        author: "东野圭吾",
        img: "http://7xqfgq.com1.z0.glb.clouddn.com/%E5%8D%95%E6%81%8B.jpg",
        excerpt: "一个深藏内心的秘密究竟有多大杀伤力？哲朗与美月久别重逢，十年前的一夜缱绻如在昨日...",
        link: "https://read.douban.com/ebook/9440506/"
    },{
        title: "乖，摸摸头",
        author: "大冰",
        img: "http://7xqfgq.com1.z0.glb.clouddn.com/7737069.jpg",
        excerpt: "12个故事，12种善意，如点点星光与烛火，给所有心怀希望的人们以温暖和光芒。请相信，这个世界上真的有人在过着你想要的生活。忽晴忽雨的江湖，祝你有梦为马，随处可栖。...",
        link: "https://read.douban.com/reader/ebook/7737069/"
    },{
        title: "阿弥陀佛么么哒",
        author: "大冰 ",
        img: "http://7xqfgq.com1.z0.glb.clouddn.com/s28259771.jpg",
        excerpt: "请相信，这个世界上真的有人在过着你想要的生活。忽晴忽雨的江湖，祝你有梦为马，随处可栖。",
        link: "http://e.dangdang.com/pc/reader/index.html;jsessionid=CE14FFA5FDFFC204A3F9952F9D17D7F0?id=1900492476"
    },{
        title: "白夜行",
        author: "东野圭吾 ",
        img: "http://7xqfgq.com1.z0.glb.clouddn.com/s4610502.jpg",
        excerpt: "“只希望能手牵手在太阳下散步”，这个象征故事内核的绝望念想，有如一个美丽的幌子，随着无数凌乱、压抑、悲凉的故事片段像纪录片一样一一还原……",
        link: "https://read.douban.com/reader/ebook/680843/"
    },{
        title: "活着",
        author: "余华",
        img: "http://7xqfgq.com1.z0.glb.clouddn.com/s23836852.jpg",
        excerpt: "每读一页，都让我们止不住泪湿双眼，因为生命里难得的温情将被一次次死亡撕扯得粉碎，只剩得老了的福贵伴随着一头老牛在阳光下回忆。",
        link: "http://e.dangdang.com/pc/reader/index.html;jsessionid=8ECCBB61DFA087224081AEE9FD486102?id=1900386506"
    },{
        title: "幻夜",
        author: "东野圭吾",
        img: "http://7xqfgq.com1.z0.glb.clouddn.com/s3960322.jpg",
        excerpt: "他们相偕前往东京，然而等待他们的，却是从此再无一丝太阳的无边幻夜：凡是接近过她的人，都遭逢厄运；凡是触碰过她过去的人，都不知所踪……",
        link: "https://read.douban.com/reader/ebook/698016/"
    }],
};
window._other = {
    data: [{
        title: "从0到1",
        author: "蒂尔 马斯特斯",
        img: "http://7xqfgq.com1.z0.glb.clouddn.com/8937101.jpg",
        excerpt: "在传统时代，成功企业的商业模式是一个从1到N的过程，也就是在现有基础上，复制之前的经验，通过竞争不断扩大自己的市场影响力。而在互联网时代，成功的企业却是一个从无到有，即从0到1创造市场的过程。",
        link: "https://read.douban.com/reader/ebook/8937101/"
    },{
        title: "风光摄影的N个关键",
        author: "王猛",
        img: "http://7xqfgq.com1.z0.glb.clouddn.com/s22791066.jpg",
        excerpt: "将风光摄影的成功要诀总结为22个简单易记的关键词，从器材准备出发，再帮助影友在21种风光题材拍摄实战中活学活用这些关键词，最后的部分总结出9个拍摄效果的优化秘技，巩固并提升风光片的拍摄水准。",
        link: "http://www.amazon.cn/%E9%A3%8E%E5%85%89%E6%91%84%E5%BD%B1%E7%9A%84N%E4%B8%AA%E5%85%B3%E9%94%AE-%E7%8E%8B%E7%8C%9B/dp/B008X0QMUG"
    },{
        title: "国富论",
        author: "亚当·斯密",
        img: "http://7xqfgq.com1.z0.glb.clouddn.com/s2164670.jpg",
        excerpt: "可以说《国富论》是现代政治经济学研究的起点。",
        link: "http://yuedu.baidu.com/ebook/7385b5ff89eb172ded63b7ed?fr=aladdin&key=%E5%9B%BD%E5%AF%8C%E8%AE%BA&f=read"
    }],
};
var readingUl = document.getElementById("reading"),
    toReadUl = document.getElementById("toread"),
    yearUl = document.getElementById("yaer"),
    jsUl = document.getElementById("js"),
    htmlUl = document.getElementById("html"),
    novelUl = document.getElementById("novellist"),
    otherUl = document.getElementById("otherlist"),
    tplStr = document.getElementById("tpl").innerHTML;

readingUl.innerHTML = tpl(tplStr, _reading);
toReadUl.innerHTML = tpl(tplStr, _toread);
yearUl.innerHTML = tpl(tplStr, _year);

jsUl.innerHTML = tpl(tplStr, _js);
htmlUl.innerHTML = tpl(tplStr, _html_css);

novelUl.innerHTML = tpl(tplStr, _novel);
otherUl.innerHTML = tpl(tplStr, _other);

for (var i = 0; i < document.getElementsByName("nav").length; i++) {
    util.addEvent(document.getElementsByName("nav")[i], "click", function() {
        var _id = this.getAttribute("data-id");
        var main = document.getElementsByName("main");

        for (var i = 0, len = main.length; i < len; i++) {
            util.addClass(main[i],'hide');
            util.removeClass(main[i],'fadeInDown');
        }


        util.removeClass(document.getElementById(_id),'hide');
        util.addClass(document.getElementById(_id),'fadeInDown');
    });
}