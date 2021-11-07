import React, { useState } from "react";
import { Link } from "react-router-dom";
import GoogleButton from "react-google-button";
import { useHistory } from "react-router";
import {
    createUserWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
} from "@firebase/auth";

import { useAuth } from "../../context/AuthContext";
import { auth } from "../../firebase";

const SignUp = () => {
    const [name, setName] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const history = useHistory();
    const { email, setEmail, password, setPassword, setAlert } = useAuth();
    console.log(email);

    const handleSignUp = async (e) => {
        if (password !== confirmPassword) {
            setAlert({
                open: true,
                message: "passwords don't match",
                type: "error",
            });
            return;
        }
        try {
            const result = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            history.push("/");
            console.log(result);
            setAlert({
                open: true,
                message: `sign up successful, Welcome ${result.user.email}`,
                type: "success",
            });
        } catch (error) {}
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
                    <h1> Sign Up</h1>
                    <div className="log-form">
                        <input
                            placeholder="enter your name"
                            className="log-input"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="enter your email"
                            className="log-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="enter your password"
                            className="log-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Confirm/Retype your  password"
                            className="log-input"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />

                        <button
                            className=""
                            type="submit"
                            onClick={handleSignUp}
                        >
                            Sign-Up
                        </button>
                        <span>Or</span>
                        <GoogleButton
                            style={{ width: "100%", outline: "none" }}
                            onClick={signWithGoogle}
                        />
                    </div>
                    <p>
                        Already have an account?{" "}
                        <Link to="/login" style={{ color: "#rgb(1, 100, 80)" }}>
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
