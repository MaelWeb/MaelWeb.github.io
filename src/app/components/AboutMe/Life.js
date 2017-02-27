/**
 * Life moudle
 */
import React from 'react';
export default class Life extends React.Component {
    render() {
        return  <section className="life" id="life">
            <div className="wrap">
                <h2>关于生活</h2>
                <h3>一直走在伪文艺的路上 &nbsp;&nbsp;从不跑偏</h3>
                <div className="life-info">
                    <ul>
                        <li>
                            <div>
                                <img src="/images/book.jpg" alt="" />
                                <h4>爱看书</h4>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src="/images/basektball.jpg" alt="" />
                                <h4>爱运动</h4>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src="/images/tv.jpg" alt="" />
                                <h4>爱美剧</h4>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src="/images/train.jpg" alt="" />
                                <h4>爱旅行</h4>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>;
    }
}