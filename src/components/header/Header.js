import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaStream } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";

import "./Header.css";
import { useAuth } from "../../context/AuthContext";
import UserProfile from "../userProfile/UserProfile";

const Header = () => {
    const [close, setClose] = useState(false);

    const { user } = useAuth();
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
                        <Link to="/" >
                            <li onClick={close}>Home</li>
                        </Link>
                        <Link to="/buy">
                            <li onClick={close}>Buy</li>
                        </Link>
                        <Link to="/sell" >
                            <li onClick={close}>Sell</li>
                        </Link>
                        <Link to="/lend" >
                            <li onClick={close}>Listed</li>
                        </Link>
                        <Link to="/reviews" >
                            <li onClick={close}>Reviews</li>
                        </Link>
                        {user ? (
                            <UserProfile />
                        ) : (
                            <div className="nav-button">
                                <Link to="/login" >
                                    <button className="login" onClick={close}>Login</button>
                                </Link>
                                <Link to="/signup" >
                                    <button className="signup" onClick={close}>Sign Up</button>
                                </Link>
                            </div>
                        )}
                    </ul>{" "}
                </div>
            </div>
        </header>
    );
};

export default Header;
