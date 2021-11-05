import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";

import Header from "./components/header/Header";
import "./App.css";
import Homepage from "./components/homepage/HomePage";
import Buy from "./pages/Buy";
import Login from "./pages/login/Login"
import Lend from "./pages/lend/Lend";
import Review from "./pages/review/Review";
import Sell from "./pages/sell/Sell";

function App() {
    return (
        <div className="App">
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={Homepage} />
                <Route path="/buy" component={Buy} />
                <Route path="/lend" component={Lend} />
                <Route path="/review" component={Review} />
                <Route path="/sell" component={Sell} />
                <Route path="/login" component={Login} />
            </Switch>
            <Footer />
        </Router>
        </div>
    );
}

export default App;
