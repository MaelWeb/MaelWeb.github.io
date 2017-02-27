import React from 'react';

export default class Hope extends React.Component {
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
            wrap: "exper-wrap fadeInDown"
        });
        $("html, body").css({
            height: "",
            overflow: ""
        });
        this.props.hideMoudle({
            hopeClass: "exper-wrap"
        });
    }
    render() {
        return (<div className={ this.state.wrap } >
                <div className={ this.state.box }>
                <h1>PORTFOLIO <i className="close" onClick={this.hide.bind(this)} >X</i></h1>
                    <ul className="portfolio tl">
                       <li className="icon-component"> <a href="/project/mcp">
                            <h1>Mcom</h1><p>A jQuery component</p>
                        </a></li>
                        <li className="icon-validate"><a href="https://github.com/MaelWeb/Mvalidate" target="_blank">
                            <h1>Mvalidate</h1><p>form validate</p>
                        </a></li>
                        <li className="icon-calender"><a href="https://github.com/MaelWeb/Mcalenders" target="_blank">
                            <h1>Mcalenders</h1><p>jQuery calenders</p>
                        </a></li>
                    </ul>
                </div>
            </div>
        )
    }
}