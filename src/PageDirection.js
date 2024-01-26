import React, { Component } from "react";
import { Router, Switch, Route, Routes } from "react-router-dom";

import About from "./About/AboutPage";
import News from "./News/NewsPage";
import Home from "./Home/HomePage";
import history from './history';

export default class PageDirection extends Component {
    render() {
        return (
            <Router history={history}>
                <Routes>
                    <Route path="/" exact component={Home} />
                    <Route path="/About" component={About} />
                    <Route path="/News" component={News} />
                </Routes>
            </Router>
        )
    }
}