/**
 * Footer moudle
 */
import React from 'react';
export default class Footer extends React.Component {
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