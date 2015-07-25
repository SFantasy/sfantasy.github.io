import React, { Component } from 'react';
import Footer from '../Footer';

export default class About extends Component {
    render () {
        return (
            <div>
                <section class="site-section">
                    <p>Hi, my name is Fantasy Shao.</p>
                    <p>I've graduated in the College of Software Engineering, the Southeast University. And now working as a Web developer in Nanjing, China.</p>
                    <p>Front-end development is my work, and I'm also learning Node.js and iOS App development.</p>
                    <p>I'm also interested in many other fields of Computer Science and Software Engineering.</p>
                    <p>You can find me in:</p>
                    <ul>
                        <li><a href="https://github.com/SFantasy">Github</a></li>
                        <li><a href="https://www.npmjs.org/~fantasyshao">NPM</a></li>
                        <li><a href="http://stackoverflow.com/users/1040952/fantasy">StackOverFlow</a></li>
                    </ul>
                    <h3>E-mail</h3>
                    <ul>
                        <li><a href="">forever.fantasy27@gmail.com</a></li>
                        <li><a href="">fantasyshao@icloud.com</a></li>
                    </ul>
                    <h3>SNS</h3>
                    <ul>
                        <li><a href="http://weibo.com/shaofantasy">Weibo</a></li>
                        <li><a href="http://twitter.com/ForFantasy">Twitter</a></li>
                        <li><a href="http://instagram.com/fantasyshao">Instagram</a></li>
                        <li><a href="http://www.douban.com/fanTasy00">Douban</a></li>
                    </ul>
                    <h3>I'm reading</h3>
                    <div>
                        <script type="text/javascript" src="http://www.douban.com/service/badge/fanTasy00/?selection=latest&amp;picsize=small&amp;hideself=on&amp;show=dolist&amp;n=8&amp;hidelogo=on&amp;cat=book&amp;columns=8"></script>
                    </div>
                    <h3>I've Read</h3>
                    <div>
                        <script type="text/javascript" src="http://www.douban.com/service/badge/fanTasy00/?selection=latest&amp;picsize=small&amp;hideself=on&amp;show=collection&amp;n=16&amp;hidelogo=on&amp;cat=book&amp;columns=8"></script>
                    </div>
                    <h3>I watched</h3>
                    <div>
                        <script type="text/javascript" src="http://www.douban.com/service/badge/fanTasy00/?selection=latest&amp;picsize=small&amp;hideself=on&amp;show=collection&amp;n=16&amp;hidelogo=on&amp;cat=movie&amp;columns=8"></script>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}
