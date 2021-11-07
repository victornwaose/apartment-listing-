import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "@firebase/auth";

import { auth } from "../firebase";

const Auth = createContext();

export const useAuth = () => {
    return useContext(Auth);
};

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState({
        open: false,
        message: "",
        type: "success",
    });

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) setUser(user);
            else setUser(null);
        });
    }, []);
    const values = {
        user,
        loading,
        alert,
        email,
        password,
        setEmail,
        setPassword,
        setUser,
        setAlert,
        setLoading
    };

    return <Auth.Provider value={values}>{children}</Auth.Provider>;
};

export default AuthProvider;
