import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1>HomeFinder</h1>
            </div>
            <div className="nav">
                <ul className="nav-options">
                    <Link>
                        <li>Home</li>
                    </Link>
                    <Link to="/buy">
                        <li>Buy</li>
                    </Link>
                    <Link to="/sell">
                        <li>Sell</li>
                    </Link>
                    <Link to="/lend">
                        <li>Listed</li>
                    </Link>
                    <Link to="/reviews">
                        <li>Reviews</li>
                    </Link>
                </ul>
            </div>
            <div className="nav-buttons">
                <button className="login">Login</button>
                <button className="signup">Sign Up</button>
            </div>
        </header>
    );
};

export default Header;
