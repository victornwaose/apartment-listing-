import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";

import SignUp from "./pages/sign-up/SignUp";
import Header from "./components/header/Header";
import "./App.css";
import Homepage from "./components/homepage/HomePage";
import Buy from "./pages/Buy";
import Login from "./pages/login/Login";
import Lend from "./pages/lend/Lend";
import Review from "./pages/review/Review";
import Sell from "./pages/sell/Sell";
import DetailPage from "./pages/Detail/DetailPage";
import Modal from "./components/modal/Modal";

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
                    <Route path="/signup" component={SignUp} />
                    <Route path="/DetailPage/:id" component={DetailPage} />
                    <Route path="/modal" component={Modal} />
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
