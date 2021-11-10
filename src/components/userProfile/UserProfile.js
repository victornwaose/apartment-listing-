import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

import { signOut } from "@firebase/auth";
import { useHistory } from "react-router-dom";

import "./UserProfile.css";
import { useAuth } from "../../context/AuthContext";
import { auth } from "../../firebase";

const UserProfile = () => {
    const { user, setAlert } = useAuth();
    const history = useHistory();

    const signOutUser = () => {
        signOut(auth);
        setAlert({
            open: true,
            type: "success",
            message: "User Successfully LogOut ",
        });
        history.push("/login");
    };
    return (
        <div>
            <div>
                <img
                    src={user?.photoURL}
                    alt={user?.displayName || user?.email}
                    style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                    }}
                />
                <RiArrowDropDownLine style={{ width: "30px", height: "30px" }}>
                    <button onClick={signOutUser()}>LogOut</button>
                </RiArrowDropDownLine>
            </div>
        </div>
    );
};

export default UserProfile;
