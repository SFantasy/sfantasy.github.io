import React, { Component } from 'react';
import Footer from '../Footer';

export default class Design extends Component {
    render () {
        return (
            <div>
                <header className="nav-header">
                    <a href="#">
                        <h1>Design</h1>
                    </a>
                    <nav className="menu">
                        <a href="#logos">Logos</a>
                    </nav>
                    <a className="back" href="/">BACK</a>
                </header>
                <section className="site-section">
                    <h2 id="logos">Logos</h2>
                    <ul className="pic-list">
                        <li><img src="./images/Keyboard_terminal.png" /></li>
                        <li><img src="./images/sch.png" /></li>
                        <li><img src="./images/lambda.png" /></li>
                    </ul>
                </section>
                <Footer />
            </div>
        );
    }
}
