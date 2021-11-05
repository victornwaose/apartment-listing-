import React from "react";
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
                </div>
            </div>
        </div>
    );
};

export default Login;
