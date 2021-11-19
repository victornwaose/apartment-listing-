import React from "react";

import "./Form.css";

const Form = () => {
    return (
        <div>
            <form className="form__container">
                <div className="input__container">
                    <label>Seller Name</label>
                    <input
                        type="text"
                        required
                        placeholder="Enter Your Full Name"
                    />
                </div>

                <div className="input__container">
                    <label>Product Name</label>
                    <input
                        type="text"
                        required
                        placeholder="Enter a  Product Name"
                    />
                </div>
                <div className="input__container">
                    <label>Asking Price</label>
                    <input
                        type="number"
                        required
                        placeholder="Enter a Asking price"
                    />
                </div>
                <div className="input__container">
                    <label>Property Type</label>
                    <select className="type__select" required>
                        <option value="bungalow">Bungalow</option>
                        <option value="flat">Flat</option>
                        <option value="duplex">Duplex</option>
                        <option value="terrace">Terrace</option>
                        <option value="semi-detached">Semi-detached</option>
                        <option value="detached">Detached</option>
                        <option value="maisonette">Maisonette</option>
                        <option value="penthouse">Penthouse</option>
                    </select>
                </div>
                <div className="input__container">
                    <label>Number Of Bedroom</label>
                    <input
                        type="number"
                        required
                        placeholder="Enter a Number Of Bedroom"
                    />
                </div>
                <div className="input__container">
                    <label>Number Of Bathroom</label>
                    <input
                        type="number"
                        required
                        placeholder="Enter a Number Of Bathroom"
                    />
                </div>
                <div className="input__container">
                    <label>Number Of Garage</label>
                    <input
                        type="number"
                        required
                        placeholder="Enter a Number Of Garage"
                    />
                </div>
                <div className="input__container">
                    <label>Location/Address</label>
                    <input
                        type="number"
                        required
                        placeholder="Enter The  Location/Address"
                    />
                </div>
                <div className="input__container">
                    <label>Product Description</label>
                    <textarea cols="10" rows="10" required />
                </div>

                <div className="input__container">
                    <label>Product Image</label>
                    <input type="file" />
                </div>
                <button className="btn"> Submit</button>
            </form>
        </div>
    );
};

export default Form;
