webpackJsonp([1],{120:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();Object.defineProperty(t,"__esModule",{value:!0});var c=n(4),i=a(c),f=function(e){function t(){return l(this,t),r(this,Object.getPrototypeOf(t).apply(this,arguments))}return o(t,e),u(t,[{key:"render",value:function(){return i["default"].createElement("section",{className:"about J-about",id:"about"},i["default"].createElement("div",{className:"wrap"},i["default"].createElement("h2",null,"关于我"),i["default"].createElement("div",{className:"about-info"},i["default"].createElement("p",null,"90后水瓶男，传说中的暖男就是我"),i["default"].createElement("p",null,"毕业于湖南的一个本科院校"),i["default"].createElement("p",null,"爱玩，爱拍照，爱看书，爱旅行，当然－－更爱代码"),i["default"].createElement("p",null,"(ps: 最爱的还是我媳妇)"))))}}]),t}(i["default"].Component);t["default"]=f},121:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();Object.defineProperty(t,"__esModule",{value:!0});var c=n(4),i=a(c),f=function(e){function t(e){l(this,t);var n=r(this,Object.getPrototypeOf(t).call(this,e));return n.state={wrap:"exper-wrap",box:"experience fadeInDown"},n}return o(t,e),u(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({wrap:e["class"]})}},{key:"hide",value:function(){this.setState({wrap:"exper-wrap",box:"experience"}),$("html, body").css({height:"",overflow:""}),this.props.hideMoudle({experClass:"exper-wrap"})}},{key:"render",value:function(){var e=[{project:"Wipos",company:"上海迈外迪网络科技有限公司",time:"2015.10－至今",introduction:"为商家提供智能化支付管理;",skill:"Html、css、javascript、jQuery、、Zepto、Django、微信SDK、ejs、gulp、less、highcharts, bootstrap"},{project:"TangoWifi",url:"http://tangowifi.com/",company:"上海迈外迪网络科技有限公司",time:"2015.04－至今",introduction:"面向中小商家的智能化wifi管理系统; ",skill:"Html、css、javascript、jQuery、Django、viewport、ejs、gulp、less、highcharts "},{project:"Asp(智慧机场)",company:"上海迈外迪网络科技有限公司",time:"2015.01－至今",introduction:"在部有Asp服务的机场，使用手机通过微信连wifi ,同时为游客提供航班查询等相关服务; ",skill:"Html、css、javascript、jQuery、微信SDK、Django、viewport、ejs、gulp、less"},{project:"Wiwide 官网",url:"http://wiwide.com/",company:"上海迈外迪网络科技有限公司",time:"2014.07－2015.01",introduction:"迈外迪公司官方网站。",skill:"Html、css、javascript、jQuery"},{project:"WAEWEB",url:"https://passport.wiwide.com/login",company:"上海迈外迪网络科技有限公司",time:"2014.04－2015.01",introduction:"为使用公司提供的Wi-Fi服务的商家提供后台智能化管理； ",skill:"Html、css、javascript、jQuery、backbone"}];return i["default"].createElement("div",{className:this.state.wrap},i["default"].createElement("div",{className:this.state.box},i["default"].createElement("h1",null,"WORK Experience ",i["default"].createElement("i",{className:"close",onClick:this.hide.bind(this)},"X")),i["default"].createElement("div",{className:"item-box"},e.map(function(e,t){return i["default"].createElement("section",{key:t},i["default"].createElement("header",null,i["default"].createElement("h2",null,i["default"].createElement("a",{href:e.url?e.url:"javascript:void(0);",target:"_blank"},e.project)),i["default"].createElement("p",null,e.company,",WEB前端／",e.time)),i["default"].createElement("div",{className:"exper-detail"},i["default"].createElement("p",null,"项目简介：",e.introduction),i["default"].createElement("p",null,"相关技术： ",e.skill)))}))))}}]),t}(i["default"].Component);t["default"]=f},122:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();Object.defineProperty(t,"__esModule",{value:!0});var c=n(4),i=a(c),f=function(e){function t(){return l(this,t),r(this,Object.getPrototypeOf(t).apply(this,arguments))}return o(t,e),u(t,[{key:"render",value:function(){return i["default"].createElement("footer",{id:"contact"},i["default"].createElement("div",{className:"wrap"},i["default"].createElement("p",null,i["default"].createElement("i",{className:"iconfont icon-phone"}),"18616968045"),i["default"].createElement("p",null,i["default"].createElement("i",{className:"iconfont icon-email"}),i["default"].createElement("a",{href:"mailto:mael.liang@live.com"},"mael.liang@live.com")),i["default"].createElement("p",null,i["default"].createElement("i",{className:"iconfont icon-qq"}),"849311720")))}}]),t}(i["default"].Component);t["default"]=f},123:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();Object.defineProperty(t,"__esModule",{value:!0});var c=n(4),i=a(c),f=n(35),s=a(f),d=function(e){function t(e){l(this,t);var n=r(this,Object.getPrototypeOf(t).call(this,e));return n.state={style:{height:"auto"}},n}return o(t,e),u(t,[{key:"componentDidMount",value:function(){var e="BackCompat"==document.compatMode?document.body.clientHeight:document.documentElement.clientHeight;s["default"].findDOMNode(this.refs._header),this.setState({style:{height:e}})}},{key:"goDown",value:function(){var e="BackCompat"==document.compatMode?document.body.clientHeight:document.documentElement.clientHeight;$("html, body").animate({scrollTop:e},1e3)}},{key:"render",value:function(){return i["default"].createElement("section",{style:this.state.style,className:"header J-header",ref:"_header",id:"home"},i["default"].createElement("div",{className:"header-wrap"},i["default"].createElement("div",{className:"content"},i["default"].createElement("p",{className:"name"}),i["default"].createElement("h1",null,i["default"].createElement("span",{className:"bolder"},"游走在技术与艺术的边缘，"),"偶是一枚前端攻城狮。")),i["default"].createElement("button",{onClick:this.goDown.bind(this),className:"iconfont godown"},"")))}}]),t}(i["default"].Component);t["default"]=d},124:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();Object.defineProperty(t,"__esModule",{value:!0});var c=n(4),i=a(c),f=function(e){function t(e){l(this,t);var n=r(this,Object.getPrototypeOf(t).call(this,e));return n.state={wrap:"exper-wrap",box:"experience fadeInDown"},n}return o(t,e),u(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({wrap:e["class"]})}},{key:"hide",value:function(){this.setState({wrap:"exper-wrap fadeInDown"}),$("html, body").css({height:"",overflow:""}),this.props.hideMoudle({hopeClass:"exper-wrap"})}},{key:"render",value:function(){return i["default"].createElement("div",{className:this.state.wrap},i["default"].createElement("div",{className:this.state.box},i["default"].createElement("h1",null,"PORTFOLIO ",i["default"].createElement("i",{className:"close",onClick:this.hide.bind(this)},"X")),i["default"].createElement("ul",{className:"portfolio tl"},i["default"].createElement("li",{className:"icon-component"}," ",i["default"].createElement("a",{href:"/project/mcp"},i["default"].createElement("h1",null,"Mcom"),i["default"].createElement("p",null,"A jQuery component"))),i["default"].createElement("li",{className:"icon-validate"},i["default"].createElement("a",{href:"https://github.com/MaelWeb/Mvalidate",target:"_blank"},i["default"].createElement("h1",null,"Mvalidate"),i["default"].createElement("p",null,"form validate"))),i["default"].createElement("li",{className:"icon-calender"},i["default"].createElement("a",{href:"https://github.com/MaelWeb/Mcalenders",target:"_blank"},i["default"].createElement("h1",null,"Mcalenders"),i["default"].createElement("p",null,"jQuery calenders"))))))}}]),t}(i["default"].Component);t["default"]=f},125:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();Object.defineProperty(t,"__esModule",{value:!0});var c=n(4),i=a(c),f=function(e){function t(){return l(this,t),r(this,Object.getPrototypeOf(t).apply(this,arguments))}return o(t,e),u(t,[{key:"render",value:function(){return i["default"].createElement("section",{className:"life",id:"life"},i["default"].createElement("div",{className:"wrap"},i["default"].createElement("h2",null,"关于生活"),i["default"].createElement("h3",null,"一直走在伪文艺的路上   从不跑偏"),i["default"].createElement("div",{className:"life-info"},i["default"].createElement("ul",null,i["default"].createElement("li",null,i["default"].createElement("div",null,i["default"].createElement("img",{src:"/images/book.jpg",alt:""}),i["default"].createElement("h4",null,"爱看书"))),i["default"].createElement("li",null,i["default"].createElement("div",null,i["default"].createElement("img",{src:"/images/basektball.jpg",alt:""}),i["default"].createElement("h4",null,"爱运动"))),i["default"].createElement("li",null,i["default"].createElement("div",null,i["default"].createElement("img",{src:"/images/tv.jpg",alt:""}),i["default"].createElement("h4",null,"爱美剧"))),i["default"].createElement("li",null,i["default"].createElement("div",null,i["default"].createElement("img",{src:"/images/train.jpg",alt:""}),i["default"].createElement("h4",null,"爱旅行")))))))}}]),t}(i["default"].Component);t["default"]=f},126:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();Object.defineProperty(t,"__esModule",{value:!0});var c=n(4),i=a(c),f=function(e){function t(e){l(this,t);var n=r(this,Object.getPrototypeOf(t).call(this,e));return n.state={toggle:!1},n}return o(t,e),u(t,[{key:"showMenu",value:function(){this.setState({toggle:!this.state.toggle})}},{key:"componentDidMount",value:function(){$(".menu li>a").click(function(){var e=$(this).attr("data-id");$("html, body").animate({scrollTop:$("#"+e).offset().top-$(".menu").outerHeight()},1e3)})}},{key:"render",value:function(){return i["default"].createElement("section",{className:"menu"},i["default"].createElement("div",{className:"wrap clearfix"},i["default"].createElement("a",{className:"logo"},i["default"].createElement("span",{className:"m"},"M"),i["default"].createElement("span",{className:"ael"},"ael")),i["default"].createElement("a",{onClick:this.showMenu.bind(this),className:"m-menu"},i["default"].createElement("i",null,""),"Menu"),i["default"].createElement("ul",{onClick:this.showMenu.bind(this),className:this.state.toggle?"mon_menu show":"mon_menu"},i["default"].createElement("li",null,i["default"].createElement("a",{href:"javascript:void(0);","data-id":"home"},"HOME")),i["default"].createElement("li",null,i["default"].createElement("a",{href:"javascript:void(0);","data-id":"about"},"ABOUT ME")),i["default"].createElement("li",null,i["default"].createElement("a",{href:"javascript:void(0);","data-id":"work"},"WORK")),i["default"].createElement("li",null,i["default"].createElement("a",{href:"javascript:void(0);","data-id":"skill"},"SKILL")),i["default"].createElement("li",null,i["default"].createElement("a",{href:"javascript:void(0);","data-id":"life"},"LIFE")),i["default"].createElement("li",null,i["default"].createElement("a",{href:"javascript:void(0);","data-id":"contact"},"CONTACT ME")))))}}]),t}(i["default"].Component);t["default"]=f},127:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();Object.defineProperty(t,"__esModule",{value:!0});var c=n(4),i=a(c),f=function(e){function t(){return l(this,t),r(this,Object.getPrototypeOf(t).apply(this,arguments))}return o(t,e),u(t,[{key:"render",value:function(){return i["default"].createElement("section",{className:"skill",id:"skill"},i["default"].createElement("div",{className:"wrap"},i["default"].createElement("h2",null,"关于技能"),i["default"].createElement("div",{className:"skill-info"},i["default"].createElement("ul",null,i["default"].createElement("li",{className:"react"},i["default"].createElement("p",null,"React")),i["default"].createElement("li",{className:"angular"},i["default"].createElement("p",null,"Angular")),i["default"].createElement("li",{className:"jquery"},i["default"].createElement("p",null,"jQuery")),i["default"].createElement("li",{className:"js"},i["default"].createElement("p",null,"Javascript")),i["default"].createElement("li",{className:"html"},i["default"].createElement("p",null,"HTML")),i["default"].createElement("li",{className:"css"},i["default"].createElement("p",null,"CSS")),i["default"].createElement("li",{className:"webpack"},i["default"].createElement("p",null,"WebPack")),i["default"].createElement("li",{className:"gulp"},i["default"].createElement("p",null,"GULP"),i["default"].createElement("p",null)),i["default"].createElement("li",{className:"less"},i["default"].createElement("p",null,"LESS"))))))}}]),t}(i["default"].Component);t["default"]=f},128:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();Object.defineProperty(t,"__esModule",{value:!0});var c=n(4),i=a(c),f=n(121),s=a(f),d=n(124),p=a(d),m=function(e){function t(e){l(this,t);var n=r(this,Object.getPrototypeOf(t).call(this,e));return n.state={experClass:"exper-wrap",hopeClass:"exper-wrap"},n._hideMoudle=n.hideMoudle.bind(n),n}return o(t,e),u(t,[{key:"showExperience",value:function(){this.setState({experClass:"exper-wrap show"}),$("html, body").css({height:"100%"}),$("body").css("overflow","hidden")}},{key:"showHope",value:function(){this.setState({hopeClass:"exper-wrap show"}),$("html, body").css({height:"100%"}),$("body").css("overflow","hidden")}},{key:"hideMoudle",value:function(e){this.setState(e)}},{key:"render",value:function(){return i["default"].createElement("section",{className:"work",id:"work"},i["default"].createElement("div",{className:"wrap"},i["default"].createElement("h2",null,"关于工作"),i["default"].createElement("h3",{className:"tc"},"现在混迹于上海新飞凡(万达电商)"),i["default"].createElement("h4",{className:"tc"},"负责",i["default"].createElement("a",{href:"http://m.ffan.com/",target:"_blank"},"飞凡M站"),", 以及公司其他前端相关开发"),i["default"].createElement("div",{className:"work-info"},i["default"].createElement("div",{className:"box project",onClick:this.showExperience.bind(this)},i["default"].createElement("p",null,"项目经验")),i["default"].createElement("div",{className:"box job",onClick:this.showHope.bind(this)},i["default"].createElement("p",null,"作品/收集"))),i["default"].createElement(s["default"],{"class":this.state.experClass,hideMoudle:this._hideMoudle}),i["default"].createElement(p["default"],{"class":this.state.hopeClass,hideMoudle:this._hideMoudle})))}}]),t}(i["default"].Component);t["default"]=m},129:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();Object.defineProperty(t,"__esModule",{value:!0});var c=n(4),i=a(c),f=n(123),s=a(f),d=n(126),p=a(d),m=n(120),h=a(m),b=n(128),y=a(b),E=n(125),v=a(E),w=n(127),j=a(w),g=n(122),O=a(g),_=function(e){function t(e){l(this,t);var n=r(this,Object.getPrototypeOf(t).call(this,e));return n.state={},n}return o(t,e),u(t,[{key:"componentDidMount",value:function(){var e="BackCompat"==document.compatMode?document.body.clientHeight:document.documentElement.clientHeight;$("#_loadding").addClass("fadeOut"),window.onscroll=function(t){t=t||window.event;var n=document.documentElement.scrollTop||document.body.scrollTop;n>$(".J-about")[0].offsetTop-e/3&&($(".J-about").find("p:nth-child(odd)").addClass("fadeInLeft"),$(".J-about").find("p:nth-child(even)").addClass("fadeInRight")),n>e?$(".menu").addClass("fixed"):$(".menu").removeClass("fixed")}}},{key:"render",value:function(){return i["default"].createElement("div",null,i["default"].createElement(s["default"],null),i["default"].createElement(p["default"],null),i["default"].createElement(h["default"],null),i["default"].createElement(y["default"],null),i["default"].createElement(j["default"],null),i["default"].createElement(v["default"],null),i["default"].createElement(O["default"],null))}}]),t}(i["default"].Component);t["default"]=_}});