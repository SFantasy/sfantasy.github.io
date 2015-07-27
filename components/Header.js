import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {
    render () {
        return (
            <header className="site-header">
                <div className="site-header-inner">
                    <a href="/"><h1>FANTASY <small>.codes</small></h1></a>
                    <p></p>
                    <nav className="site-nav">
                        <ul>
                            <li><a href="http://blog.fantasy.codes">Blog</a></li>
                            <li><Link to="/design" href="./design/">Design</Link></li>
                            <li><a href="https://github.com/SFantasy">Github</a></li>
                            <li><Link to="about" href="./about/">About</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}
