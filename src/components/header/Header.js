import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaStream } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";

import "./Header.css";

const Header = () => {
    const [close, setClose] = useState(false);

    const MobileVeiw = () => {
        setClose(!close);
    };
    return (
        <header className="header">
            <div className="logo">
                <h1>HomeFinder</h1>
            </div>{" "}
            <div className="nav-icon" onClick={MobileVeiw}>
                {close ? <BsXLg /> : <FaStream />}
            </div>
            <div className={close ? "nav" : "nav close"}>
                <div className="nav-options">
                    <ul>
                        <Link to="/">
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
                        <div className="nav-button">
                            <Link to="/login">
                                <button className="login">Login</button>
                            </Link>
                            <Link to="/signup">
                                <button className="signup">Sign Up</button>
                            </Link>
                        </div>
                    </ul>{" "}
                </div>
            </div>
        </header>
    );
};

export default Header;
