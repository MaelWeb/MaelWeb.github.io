import React from 'react';
import ReactDom from 'react-dom';
import MainPage from './module.jsx';
import '../less/style.less';

ReactDom.render( < MainPage / > , document.getElementById("main"), function() {
    let winHeight = document.compatMode == "BackCompat" ?
        document.body.clientHeight : document.documentElement.clientHeight;

    $("#_loadding").addClass("fadeOut");
    window.onscroll  = function(e) {
        e = e || window.event;

        var _scroll = document.documentElement.scrollTop || document.body.scrollTop;


        if (_scroll > ($(".J-about")[0].offsetTop - winHeight / 3)) {
            $(".J-about").find("p:nth-child(odd)").addClass("fadeInLeft");
            $(".J-about").find("p:nth-child(even)").addClass("fadeInRight");
        }
        if (_scroll > winHeight) {
            $(".menu").addClass("fixed");
        } else {
            $(".menu").removeClass("fixed");
        }
    };
});
