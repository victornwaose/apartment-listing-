import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";

import Header from "./components/header/Header";
import Homepage from "./components/homepage/HomePage";
import Buy from "./pages/Buy";
import Lend from "./pages/lend/Lend";
import Review from "./pages/review/Review";
import Sell from "./pages/sell/Sell";

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={Homepage} />
                <Route path="/buy" component={Buy} />
                <Route path="/lend" component={Lend} />
                <Route path="/review" component={Review} />
                <Route path="/sell" component={Sell} />
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
