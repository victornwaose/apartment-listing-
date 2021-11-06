import { createContext, useContext, useEffect, useState } from "react";

import { auth } from "../firebase";

const Auth = createContext();

export const useAuth = () => {
    return useContext(Auth);
};

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const values = {
        user,
        loading,
        error,
    };
    return <Auth.Provider value={values}>{children}</Auth.Provider>;
};

export default AuthProvider;
