import React from "react";

const Sell = () => {
    return (
        <div>
            {" "}
            <form className="product__container">
                <h2 className="heading">Upload a product for review</h2>

                <div className="input__container">
                    <label>Product Name</label>
                    <input type="text" required />
                </div>

                <div className="input__container">
                    <label>Product Description</label>
                    <textarea cols="10" rows="10" required />
                </div>

                <div className="input__container">
                    <label>Product Image</label>
                    <input type="file" />
                </div>

                <div className="input__container">
                    <label>Product Review</label>
                    <input type="text" required />
                </div>

                <button className="btn"></button>
            </form>
        </div>
    );
};

export default Sell;
