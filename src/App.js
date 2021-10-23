import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Homepage from "./components/homepage/HomePage";

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact>
                    <Homepage />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
