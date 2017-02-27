/**
 * Menu moudle
 */
import React from 'react';
export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false
        };
    }
    showMenu() {
        this.setState({
            toggle: !this.state.toggle
        });
    }
    componentDidMount() {
        /*** It's BAD!!! Don't  do this as what I do ***/
        $(".menu li>a").click(function() {
            let _id = $(this).attr("data-id");

            $("html, body").animate({
                scrollTop: $("#" + _id).offset().top - $(".menu").outerHeight()
            }, 1000);
        });
    }

    render() {
        return  <section className="menu">
            <div className="wrap clearfix">
            <a className="logo"><span className="m">M</span><span className="ael">ael</span></a>
            <a onClick={this.showMenu.bind(this)} className="m-menu"><i>&#xe602;</i>Menu</a>
            <ul onClick={this.showMenu.bind(this)} className={this.state.toggle ? "mon_menu show" : "mon_menu" } >
                <li><a href="javascript:void(0);" data-id="home">HOME</a></li>
                <li><a href="javascript:void(0);" data-id="about">ABOUT ME</a></li>
                <li><a href="javascript:void(0);" data-id="work">WORK</a></li>
                <li><a href="javascript:void(0);" data-id="skill">SKILL</a></li>
                <li><a href="javascript:void(0);" data-id="life">LIFE</a></li>
                <li><a href="javascript:void(0);" data-id="contact">CONTACT ME</a></li>
            </ul>
            </div>
        </section>;
    }
}