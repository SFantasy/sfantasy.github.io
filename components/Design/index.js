import React, { Component } from 'react';
import { Link } from 'react-router';
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
                    <Link className="back" to="home">BACK</Link>
                </header>
                <section className="site-section">
                    <h2 id="logos">Logos</h2>
                    <ul className="pic-list">
                        <li><img src="./img/Keyboard_terminal.png" /></li>
                        <li><img src="./img/sch.png" /></li>
                        <li><img src="./img/lambda.png" /></li>
                    </ul>
                </section>
                <Footer />
            </div>
        );
    }
}
