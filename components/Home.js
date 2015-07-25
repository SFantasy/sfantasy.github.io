import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

export default class Home extends Component {
    render () {
        return (
            <div className="site-container">
                <Header />
                <Footer />
            </div>
        );
    }
}
