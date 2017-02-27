/**
 * Skill moudle
 */
import React from 'react';

export default class Skill extends React.Component {
    render() {
        return <section className="skill" id="skill">
            <div className="wrap">
                <h2>关于技能</h2>
                <div className="skill-info">
                    <ul>
                        <li className="react">
                            <p>React</p>
                        </li>
                        <li className="angular">
                            <p>Angular</p>
                        </li>
                        <li className="jquery">
                            <p>jQuery</p>
                        </li>
                        <li className="js">
                            <p>Javascript</p>
                        </li>
                        <li className="html">
                            <p>HTML</p>
                        </li>
                        <li className="css">
                            <p>CSS</p>
                        </li>
                        <li className="webpack">
                            <p>WebPack</p>
                        </li>
                        <li className="gulp">
                            <p>GULP</p>
                            <p></p>
                        </li>
                        <li className="less">
                            <p>LESS</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>;
    }
}
