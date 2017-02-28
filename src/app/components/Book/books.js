import React from 'react';
import { reading, toread, year, js, html_css, novel, other} from './books_data';
import ClassNames from 'classnames';

export default class Books extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            show: 'index'
        };
    }

    changeShow(show) {
        this.setState({
            show: show
        })
    }

    creatItems(data) {
        return data.length ? data.map((item, index) => {
            return (
                <li className="item" key={index}>
                    <div className="inner">
                        <div className="cover-side">
                            <div className="works-meta">
                                <div className="title"><a href={ item.link } target="_blank">{item.title}</a></div>
                                <div className="author ellipsis">{item.author}</div>
                            </div>
                            <div className="cover shadow-cover">
                                <a href={item.link } className="pic" target="_blank"><img src={item.img} alt="" /></a>
                            </div>
                        </div>
                        <div className="info-side">
                            <div className="name">概览：</div>
                            <blockquote>{item.excerpt}</blockquote>
                        </div>
                    </div>
                </li>
            )
        }) : null;
    }

    render() {
        let show = this.state.show;
        return(
        <div className="books-layout">
            <header className="top">
                <nav className="nav clearfix">
                    <ul>
                        <li className="index" onClick={ this.changeShow.bind(this, 'index') } ><a href="javascript:void(0);" >Under 7℃</a></li>
                        <li onClick={ this.changeShow.bind(this, 'web') }><a href="javascript:void(0);">前端</a></li>
                        <li onClick={ this.changeShow.bind(this, 'novel') }><a href="javascript:void(0);">小说</a></li>
                        <li onClick={ this.changeShow.bind(this, 'other') }><a href="javascript:void(0);">其他</a></li>
                    </ul>
                    <a href="/#/me" className="r">关于我</a><a href="/blog" className="r">博客</a>
                </nav>
            </header>
            <div className={ ClassNames("main animated", {hide: show != 'index'})} >
                <article>
                    <section>
                        <header>
                            <h3>「最近在读」</h3>
                        </header>
                        <div className="booklist">
                            <ul>
                                {this.creatItems(reading)}
                            </ul>
                        </div>
                    </section>
                    <section>
                        <header>
                            <h3>「准备阅读」</h3>
                        </header>
                        <div className="booklist">
                            <ul>
                                {this.creatItems(toread)}
                            </ul>
                        </div>
                    </section>
                    <section>
                        <header>
                            <h3>「已经阅读」</h3>
                        </header>
                        <div className="booklist">
                            <ul>
                                {this.creatItems(year)}
                            </ul>
                        </div>
                    </section>
                </article>
            </div>
            <div className={ ClassNames("web main animated", {hide: show != 'web'})}>
                <article>
                    <section>
                        <header>
                            <h3>「Javascript」</h3>
                        </header>
                        <div className="booklist">
                            <ul id="js">
                                {this.creatItems(js)}
                            </ul>
                        </div>
                    </section>
                    <section>
                        <header>
                            <h3>「Html&Css」</h3>
                        </header>
                        <div className="booklist">
                            <ul>
                                {this.creatItems(html_css)}
                            </ul>
                        </div>
                    </section>
                </article>
            </div>
            <div className={ ClassNames("novel main animated", {hide: show != 'novel'})} >
                <article>
                    <section>
                        <div className="booklist">
                            <ul>
                                {this.creatItems(novel)}
                            </ul>
                        </div>
                    </section>
                </article>
            </div>
            <div className={ClassNames("novel main animated", {hide: show != 'other'}) }>
                <article>
                    <section>
                        <div className="booklist">
                            <ul id="otherlist">
                                {this.creatItems(other)}
                            </ul>
                        </div>
                    </section>
                </article>
            </div>
        </div>
        )
    }
}