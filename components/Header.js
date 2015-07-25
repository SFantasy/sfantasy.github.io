import React, { Component } from 'react';

export default class Header extends Component {
    render () {
        return (
            <header className="site-header">
                <div className="site-header-inner">
                    <a href="/"><h1>FANTASY</h1></a>
                    <p></p>
                    <nav className="site-nav">
                        <ul>
                            <li><a href="http://blog.fantasy.codes">Blog</a></li>
                            <li><a href="./design/">Design</a></li>
                            <li><a href="http://fantasyshao.lofter.com/">Lofter</a></li>
                            <li><a href="./about/">About</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}
