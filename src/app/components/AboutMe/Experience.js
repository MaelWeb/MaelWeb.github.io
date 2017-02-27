import React from 'react';

export default class Experience extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            wrap: "exper-wrap",
            box: "experience fadeInDown"
        };
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            wrap: nextProps.class
        });
    }
    hide() {
        this.setState({
            wrap: "exper-wrap",
            box: "experience"
        });
        $("html, body").css({
            height: "",
            overflow: ""
        });
        this.props.hideMoudle({
            experClass: "exper-wrap"
        });
    }
    render() {
        let experData = [
            {
                project: "Wipos",
                company: "上海迈外迪网络科技有限公司",
                time: "2015.10－至今",
                introduction: "为商家提供智能化支付管理;",
                skill: "Html、css、javascript、jQuery、、Zepto、Django、微信SDK、ejs、gulp、less、highcharts, bootstrap"

            }, {
                project: "TangoWifi",
                url: "http://tangowifi.com/",
                company: "上海迈外迪网络科技有限公司",
                time: "2015.04－至今",
                introduction: "面向中小商家的智能化wifi管理系统; ",
                skill: "Html、css、javascript、jQuery、Django、viewport、ejs、gulp、less、highcharts "

            },{
                project: "Asp(智慧机场)",
                company: "上海迈外迪网络科技有限公司",
                time: "2015.01－至今",
                introduction: "在部有Asp服务的机场，使用手机通过微信连wifi ,同时为游客提供航班查询等相关服务; ",
                skill: "Html、css、javascript、jQuery、微信SDK、Django、viewport、ejs、gulp、less"

            },{
                project: "Wiwide 官网",
                url: "http://wiwide.com/",
                company: "上海迈外迪网络科技有限公司",
                time: "2014.07－2015.01",
                introduction: "迈外迪公司官方网站。",
                skill: "Html、css、javascript、jQuery"

            },{
                project: "WAEWEB",
                url: "https://passport.wiwide.com/login",
                company: "上海迈外迪网络科技有限公司",
                time: "2014.04－2015.01",
                introduction: "为使用公司提供的Wi-Fi服务的商家提供后台智能化管理； ",
                skill: "Html、css、javascript、jQuery、backbone"

            }
        ];
        return (<div className={ this.state.wrap } >
                <div className={ this.state.box }>
                <h1>WORK Experience <i className="close" onClick={this.hide.bind(this)}>X</i></h1>
                    <div className="item-box">
                    {experData.map((item, index)=> {
                        return <section key={index} >
                                <header>
                                    <h2><a href={ item.url ? item.url : "javascript:void(0);" } target="_blank">{item.project}</a></h2>
                                    <p >{item.company},WEB前端／{item.time}</p>
                                </header>
                                <div className="exper-detail">
                                    <p >项目简介：{item.introduction}</p>
                                    <p >相关技术： {item.skill}</p>
                                </div>
                            </section>;
                    })}
                    </div>
                </div>
            </div>
        )
    }
}