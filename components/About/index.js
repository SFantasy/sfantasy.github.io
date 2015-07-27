import React, { Component } from 'react';
import { Link } from 'react-router';
import Footer from '../Footer';

export default class About extends Component {
    render () {
        return (
            <div>
                <header className="nav-header">
                    <a href="#">
                        <h1>About</h1>
                    </a>
                    <Link className="back" to="home">BACK</Link>
                </header>
                <section className="site-section">
                    <p>Hi, my name is Fantasy Shao.</p>
                    <p>I've graduated in the College of Software Engineering, the Southeast University.</p>
                    <p>And now working as a Web developer in Nanjing, China.</p>
                    <p>Front-end and Node.js development is my work, and I'm also learning iOS App development.</p>
                    <p>I'm also interested in many other fields of Computer Science and Software Engineering.</p>
                    <p>You can find me in:</p>
                    <ul>
                        <li><a href="https://github.com/SFantasy">Github</a></li>
                        <li><a href="https://www.npmjs.org/~fantasyshao">NPM</a></li>
                        <li><a href="http://stackoverflow.com/users/1040952/fantasy">StackOverFlow</a></li>
                    </ul>
                    <h3>E-mail</h3>
                    <ul>
                        <li><a href="mailto:forever.fantasy27@gmail.com">forever.fantasy27@gmail.com</a></li>
                        <li><a href="mailto:fantasyshao@icloud.com">fantasyshao@icloud.com</a></li>
                    </ul>
                    <h3>SNS</h3>
                    <ul>
                        <li><a href="http://weibo.com/shaofantasy">Weibo</a></li>
                        <li><a href="http://twitter.com/ForFantasy">Twitter</a></li>
                        <li><a href="http://instagram.com/fantasyshao">Instagram</a></li>
                        <li><a href="http://www.douban.com/fanTasy00">Douban</a></li>
                    </ul>
                </section>
                <Footer />
            </div>
        )
    }
}
