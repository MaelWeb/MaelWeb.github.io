webpackJsonp([2],{131:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();Object.defineProperty(t,"__esModule",{value:!0});var c=a(4),s=n(c),u=a(35),f=n(u),d=a(83),m=function(e){function t(e){l(this,t);var a=r(this,Object.getPrototypeOf(t).call(this,e));return a.state={layout:" ",container:"ip-container loading"},a}return o(t,e),i(t,[{key:"componentDidMount",value:function(){this._startLoading()}},{key:"_startLoading",value:function(){var e=f["default"].findDOMNode(this.refs.ipLoaderCircle),t=0,a=this;e.style.strokeDasharray=e.style.strokeDashoffset=e.getTotalLength();var n=setInterval(function(){t=Math.min(t+.1*Math.random(),1),e.style.strokeDashoffset=e.getTotalLength()*(1-t),1===t&&(clearInterval(n),a._changClass())},80)}},{key:"_changClass",value:function(){this.setState({layout:"layout-switch",container:"ip-container loaded"})}},{key:"render",value:function(){return s["default"].createElement("div",{className:"index-layout"},s["default"].createElement("div",{className:"mac"},s["default"].createElement("div",{className:this.state.layout},s["default"].createElement("div",{id:"ip-container",className:this.state.container},s["default"].createElement("header",{className:"ip-header"},s["default"].createElement("h1",{className:"ip-logo"},s["default"].createElement("span",{className:"wihite"},"U"),"nder 7℃"),s["default"].createElement("div",{className:"ip-loader"},s["default"].createElement("svg",{className:"ip-inner",width:"60px",height:"60px",viewBox:"0 0 80 80"},s["default"].createElement("path",{className:"ip-loader-circlebg",d:"M40,10C57.351,10,71,23.649,71,40.5S57.351,71,40.5,71 S10,57.351,10,40.5S23.649,10,40.5,10z"}),s["default"].createElement("path",{ref:"ipLoaderCircle",className:"ip-loader-circle",d:"M40,10C57.351,10,71,23.649,71,40.5S57.351,71,40.5,71 S10,57.351,10,40.5S23.649,10,40.5,10z"})))),s["default"].createElement("div",{className:"ip-main"},s["default"].createElement("div",{className:"index-content"},s["default"].createElement("img",{src:"/images/me.png",alt:"my",className:"animated zoomIn",height:"150px"}),s["default"].createElement("h1",null,"零下柒度"),s["default"].createElement("p",null,"前端攻城狮，伪文艺青年"),s["default"].createElement("a",{href:"/blog",className:"btn"},"博客"),s["default"].createElement(d.Link,{to:{pathname:"/me"},className:"btn"},"简历"),s["default"].createElement("a",{href:"/book",className:"btn"},"书单")))))),s["default"].createElement("div",{className:"mac-bottom"}))}}]),t}(s["default"].Component);t["default"]=m}});