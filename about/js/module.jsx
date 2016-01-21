import React from 'react';
import ReactDom from 'react-dom';
import {Experience, Hope} from './work.jsx'

/**
 * Header module
 */
export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            style: {height: "auto"}
        };
    }
    componentDidMount() {
       let winHeight = document.compatMode == "BackCompat" ?
            document.body.clientHeight : document.documentElement.clientHeight,
            header = ReactDom.findDOMNode(this.refs._header);
        this.setState({
            style: {height: winHeight}
        });
    }
    goDown() {
        let winHeight = document.compatMode == "BackCompat" ?
            document.body.clientHeight : document.documentElement.clientHeight;

        $("html, body").animate({
            scrollTop: winHeight
        },1000);
    }
    render() {
        return <section style={this.state.style} className="header J-header" ref="_header" id="home">
            <div className="header-wrap">
                <div className="content">
                    <p className="name"></p>
                    <h1><span className="bolder">游走在技术与艺术的边缘，</span>偶是一枚前端攻城狮。</h1>
                </div>
                <button onClick={this.goDown.bind(this)} className="iconfont godown">&#xe605;</button>
            </div>
        </section>;
    }
}


/**
 * About module
 */
export class About extends React.Component {
    render() {
        return <section className="about J-about" id="about">
            <div className="wrap">
                <h2>关于我</h2>
                <div className="about-info">
                    <p>90后水瓶男，传说中的暖男就是我</p>
                    <p>毕业于湖南的一个本科院校</p>
                    <p>爱玩，爱拍照，爱看书，爱旅行，当然－－更爱代码</p>
                    <p>(ps: 最爱的还是我媳妇)</p>
                </div>
            </div>
        </section>;
    }
}

/**
 * Work moudle
 */
export class Work extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            experClass: "exper-wrap",
            hopeClass: "exper-wrap"
        };
        this._hideMoudle = this.hideMoudle.bind(this);
    }
   showExperience() {
        this.setState({
            experClass: "exper-wrap show",
        });
        $("html, body").css({
            height: "100%"
        });
        $("body").css("overflow", "hidden");
    }
    showHope() {
        this.setState({
            hopeClass: "exper-wrap show"
        });
        $("html, body").css({
            height: "100%"
        });
        $("body").css("overflow", "hidden");
    }
    hideMoudle(obj) {
        this.setState(obj);
    }
    render() {
        return <section className="work" id="work">
            <div className="wrap">
                <h2>关于工作</h2>
                <h3 className="tc">现在混迹于上海的一家Wi-Fi服务公司</h3>
                <h4 className="tc">参与公司的官网，后台等前端相关开发</h4>
                <div className="work-info">
                    <div className="box project" onClick={this.showExperience.bind(this)} >
                        <p>项目经验</p>
                    </div>
                    <div className="box job" onClick={this.showHope.bind(this)}>
                        <p>作品/收集</p>
                    </div>
                </div>
                <Experience class={this.state.experClass} hideMoudle={this._hideMoudle} />
                <Hope class={this.state.hopeClass} hideMoudle={this._hideMoudle} />
            </div>
        </section>;
    }
}
/**
 * Skill moudle
 */
export class Skill extends React.Component {
    render() {
        return <section className="skill" id="skill">
            <div className="wrap">
                <h2>关于技能</h2>
                <div className="skill-info">
                    <ul>
                        <li className="jquery">
                            <p>jQuery</p>
                        </li>
                        <li className="js">
                            <p>Javascript</p>
                        </li>
                        <li className="html">
                            <p>HTML</p>
                        </li>
                        <li className="css" data-skill="80">
                            <p>CSS</p>
                        </li>
                        <li className="gulp" data-skill="70">
                            <p>GULP</p>
                            <p></p>
                        </li>
                        <li className="less" data-skill="90">
                            <p>LESS</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>;
    }
}
/**
 * Life moudle
 */
export class Life extends React.Component {
    render() {
        return  <section className="life" id="life">
            <div className="wrap">
                <h2>关于生活</h2>
                <h3>一直走在伪文艺的路上 &nbsp;&nbsp;从不跑偏</h3>
                <div className="life-info">
                    <ul>
                        <li>
                            <div>
                                <img src="images/book.jpg" alt="" />
                                <h4>爱看书</h4>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src="images/basektball.jpg" alt="" />
                                <h4>爱运动</h4>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src="images/tv.jpg" alt="" />
                                <h4>爱美剧</h4>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src="images/train.jpg" alt="" />
                                <h4>爱旅行</h4>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>;
    }
}
/**
 * Footer moudle
 */
export class Footer extends React.Component {
    render() {
        return  <footer id="contact">
            <div className="wrap">
                <p>
                <i className="iconfont icon-phone"></i>18616968045
                </p>
                <p>
                    <i className="iconfont icon-email"></i><a href="mailto:mael.liang@live.com">mael.liang@live.com</a>
                </p>
                <p>
                    <i className="iconfont icon-qq"></i>849311720
                </p>
            </div>
        </footer>;
    }
}
/**
 * Menu moudle
 */
export class Menu extends React.Component {
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

export default class  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        // setInterval((event) => {
        //     this.setState({loadClass: "spinner fadeOut"});
        // }, 1000);
    }
    render() {
        return (<div>
            <Header />
            <Menu />
            <About />
            <Work />
            <Skill />
            <Life />
            <Footer /></div>)
    };
}