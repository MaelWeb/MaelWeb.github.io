/**
 * Work moudle
 */
import React from 'react';
import Experience from './Experience';
import Hope from './Hope';

export default class Work extends React.Component {
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
                <h3 className="tc">现在混迹于上海新飞凡(万达电商)</h3>
                <h4 className="tc">负责<a href="http://m.ffan.com/" target='_blank'>飞凡M站</a>, 以及公司其他前端相关开发</h4>
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
