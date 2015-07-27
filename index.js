import React from 'react';
import Router, { Route, RouteHandler, DefaultRoute } from 'react-router';
import Home from './components/Home';
import Design from './components/Design/index';
import About from './components/About/index';

var App = React.createClass({
    render () {
        return (
            <RouteHandler />
        );
    }
});

var routes = (
    <Route handler={App} path="/">
        <DefaultRoute name="home" handler={Home} />
        <Route name="design" path="design" handler={Design} />
        <Route name="about" path="about" handler={About} />
    </Route>
);


Router.run(routes, Router.HistoryLocation, (Root) => {
    React.render((
        <Root />
    ), document.getElementById('home'));
});
