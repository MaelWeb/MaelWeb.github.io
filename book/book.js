/*
 * 模板渲染，不能防备xss。
 * 如果有xss防备需求，请使用ejs等具备该功能的模板引擎
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
        title: "单恋",
        author: "东野圭吾",
        img: "http://7xqfgq.com1.z0.glb.clouddn.com/%E5%8D%95%E6%81%8B.jpg",
        excerpt: "一个深藏内心的秘密究竟有多大杀伤力？哲朗与美月久别重逢，十年前的一夜缱绻如在昨日...",
        link: "https://read.douban.com/reader/ebook/9440506/"
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
    }],
};
window._year = {
    data: [{
        title: "单恋",
        author: "东野圭吾",
        img: "http://7xqfgq.com1.z0.glb.clouddn.com/%E5%8D%95%E6%81%8B.jpg",
        excerpt: "一个深藏内心的秘密究竟有多大杀伤力？哲朗与美月久别重逢，十年前的一夜缱绻如在昨日...",
        link: "https://read.douban.com/ebook/9440506/"
    }],
};
window._js = {
    data: [{
        title: "JavaScript权威指南（第6版）",
        author: "〔美〕弗兰纳根（Flanagan，D.）",
        img: "http://7xqfgq.com1.z0.glb.clouddn.com/15113928.jpg",
        excerpt: "本书是程序员学习核心JavaScript语言和由Web浏览器定义的JavaScript API的指南和综合参考手册。第6版涵盖HTML 5和ECMAScript 5。新增章节描述了jQuery和服务器端JavaScript。",
        link: "https://read.douban.com/reader/ebook/15113928/"
    },{
        title: "AngularJS深度剖析与最佳实践",
        author: "雪狼 破狼 彭洪伟",
        img: "http://7xqfgq.com1.z0.glb.clouddn.com/angularjs.jpg",
        excerpt: "深入讲解AngularJS的基本概念及其背后的原理，包括完整的开发框架与实践。不仅抽丝剥茧地展现了AngularJS的诸多特性与技巧，还讲解了工程实践中容易陷入的“坑”，是从小工走向专家的必备参考。",
        link: "https://read.douban.com/reader/ebook/17826372/"
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
    }],
};
var readingUl = document.getElementById("reading"),
    toReadUl = document.getElementById("toread"),
    yearUl = document.getElementById("yaer"),
    jsUl = document.getElementById("js"),
    htmlUl = document.getElementById("html"),
    novelUl = document.getElementById("novellist"),
    tplStr = document.getElementById("tpl").innerHTML;

readingUl.innerHTML = tpl(tplStr, _reading);
toReadUl.innerHTML = tpl(tplStr, _toread);
yearUl.innerHTML = tpl(tplStr, _year);

jsUl.innerHTML = tpl(tplStr, _js);
htmlUl.innerHTML = tpl(tplStr, _html_css);

novelUl.innerHTML = tpl(tplStr, _novel);

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