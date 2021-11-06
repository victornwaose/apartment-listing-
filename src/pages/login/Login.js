import React from "react";
import { Link } from "react-router-dom";

import "./Login.css";

const Login = () => {
    return (
        <div className="log">
            <div className="log-container">
                <div className="log-detail">
                    <h1> Login</h1>
                    <div className="log-form">
                        <input
                            type="text"
                            placeholder="enter your email"
                            className="log-input"
                        />
                        <input
                            type="password"
                            placeholder="enter your password"
                            className="log-input"
                        />
                        <button className="">Login</button>
                    </div>
                    <p>
                        Don't have an account <Link>Sign-Up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
