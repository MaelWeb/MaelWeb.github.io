/**
 * About module
 */
import React from 'react';

export default class About extends React.Component {
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
