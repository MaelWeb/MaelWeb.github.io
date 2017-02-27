import React from 'react';
import Header from './Header';
import Menu from './Menu';
import About from './About';
import Work from './Work';
import Life from './Life';
import Skill from './Skill';
import Footer from './Footer';

export default class AboutMe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        let winHeight = document.compatMode == "BackCompat" ?
            document.body.clientHeight : document.documentElement.clientHeight;

        $("#_loadding").addClass("fadeOut");
        window.onscroll = function(e) {
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
    }

    render() {
        return (<div>
            <Header />
            <Menu />
            <About />
            <Work />
            <Skill />
            <Life />
            <Footer />
        </div>)
    };
}
