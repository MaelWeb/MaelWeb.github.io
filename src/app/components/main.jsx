import React from 'react';
import ReactDom from 'react-dom';


var Main = React.createClass({

	getInitialState() {
		return{
			layout : " ",
			container : "ip-container loading"
		};
	},

	componentDidMount() {
		this._startLoading();
	},

 	render() {
 		return (
 			<div className={this.state.layout}>
 			<div id="ip-container" className={this.state.container}>
 				<header className="ip-header">
					<h1 className="ip-logo">
						<span className="wihite">U</span>nder 7℃
					</h1>
					<div className="ip-loader">
						<svg className="ip-inner" width="60px" height="60px" viewBox="0 0 80 80">
							<path className="ip-loader-circlebg" d="M40,10C57.351,10,71,23.649,71,40.5S57.351,71,40.5,71 S10,57.351,10,40.5S23.649,10,40.5,10z"/>
							<path ref="ipLoaderCircle" className="ip-loader-circle" d="M40,10C57.351,10,71,23.649,71,40.5S57.351,71,40.5,71 S10,57.351,10,40.5S23.649,10,40.5,10z"/>
						</svg>
					</div>
				</header>
				<div className="ip-main">
					<div className="wrap">
			            <img src="about/images/me.png" alt="my" className="animated zoomIn" height="150px"/>
			            <h1>零下柒度</h1>
			            <p>前端攻城狮，伪文艺青年</p>
			            <a href="/blog" className="btn">博客</a>
			            <a href="/about" className="btn">简历</a>
			            <a href="/book" className="btn">书单</a>
        			</div>
				</div>
			</div>
			</div>
 		);
 	},

 	_startLoading() {
 		var circle = ReactDom.findDOMNode(this.refs.ipLoaderCircle);
 		var progress = 0;
 		let self = this;
 		circle.style.strokeDasharray = circle.style.strokeDashoffset = circle.getTotalLength();
 		var interval = setInterval(function(){
			 				progress = Math.min( progress + Math.random() * 0.1, 1 );
			 				circle.style.strokeDashoffset = circle.getTotalLength() * ( 1 - progress );
			 				if ( progress === 1 ) {
								clearInterval( interval );
								self._changClass();
							};
			 		}, 80);
 	},

 	_changClass() {
 		this.setState({
 			layout : "layout-switch",
			container : "ip-container loaded"
 		});
 	}

});

module.exports = Main;