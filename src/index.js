import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import AuthProvider from "./context/AuthContext";
import ApartmentProvider from "./context/ApartmentContext";

ReactDOM.render(
    <React.StrictMode>
        <AuthProvider>
            <ApartmentProvider>
                <App />
            </ApartmentProvider>
        </AuthProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
