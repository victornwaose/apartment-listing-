import React from "react";
import GoogleButton from "react-google-button";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

import {
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
} from "@firebase/auth";

import { useAuth } from "../../context/AuthContext";
import { auth } from "../../firebase";
import "./Login.css";

const Login = () => {
    const { email, setEmail, password, setPassword, setAlert, setLoading } =
        useAuth();
    console.log(email);
    const history = useHistory();

    const handleLogin = async () => {
        setLoading(true);
        if (!email || !password) {
            setAlert({
                option: true,
                message: "please fill all fields",
                type: "error",
            });
            return;
        }
        try {
            const result = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            setLoading(false);
            history.push("/");

            console.log(result);
            setAlert({
                option: true,
                message: `login successful, Welcome back ${result.user.email}`,
                type: "success",
            });
        } catch (error) {
            setAlert({
                option: true,
                message: error.message,
                type: "error",
            });
        }
    };

    const googleProvider = new GoogleAuthProvider();

    const signWithGoogle = async () => {
        try {
            const res = await signInWithPopup(auth, googleProvider);
            history.push("/");
            setAlert({
                open: true,
                message: `Sign Up Successful. Welcome ${res.user.displayName}`,
                type: "success",
            });
        } catch (error) {
            console.log(error);
        }
    };

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
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="enter your password"
                            className="log-input"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            className=""
                            type="submit"
                            onClick={handleLogin}
                        >
                            Login
                        </button>
                        <span>OR</span>
                        <GoogleButton
                            style={{ width: "100%", outline: "none" }}
                            onClick={signWithGoogle}
                        />
                    </div>
                    <p>
                        Don't have an account{" "}
                        <Link
                            to="/signup"
                            style={{ color: "green", }}
                        >
                            Sign-Up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
