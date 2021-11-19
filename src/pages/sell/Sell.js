import React from "react";

import "./Sell.css";
import Form from "./form/Form.js";
import Upload from "./uploads/Uploads.js";

const Sell = () => {
    return (
        <div className="sell">
            <h2 className="heading">Upload a product for review</h2>
            <div className="sell-section">
                <Upload />
                <Form />
            </div>
        </div>
    );
};

export default Sell;
