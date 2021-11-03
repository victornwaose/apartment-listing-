import React from "react";

import "./Listed.css";

const Listed = () => {
    return (
        <div className="listed">
            <div className="list-search-text">
                <h1>
                    Get Your <span>Home </span>Listed As A <span>Owner</span>
                </h1>
                <p>put your email address an get listed</p>
                <input
                    type="text"
                    placeholder="Email Address"
                    className="list-search"
                />
            </div>
        </div>
    );
};

export default Listed;
