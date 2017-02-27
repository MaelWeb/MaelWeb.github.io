import React from 'react';
import ReactDom from 'react-dom';

/**
 * Header module
 */
export default class Header extends React.Component {
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