import React from "react";

import "./House.css";
import Pic1 from "../../../assets/pexels-max-vakhtbovych-6284232.jpg";
import tall from "../../../assets/tall.png";

const Story = () => {
    return (
        <div className="house">
            <div className="house-container">
                <div className="house-container-image">
                    <img src={Pic1} alt="pic1" className="house_pic1" />
                </div>
                <div className="house-container-text">
                    <h5>About Us</h5>
                    <h1>Helping People To Find Their Home </h1>
                    <p>
                        Home finder can help yo find a comfortable home or
                        apartment for sell or rent with new technology with the
                        best possible security for a cheap rent
                    </p>
                    <button>Find more </button>
                </div>
            </div>
            <div className="house-container">
                <div className="house-container-image">
                    <h5>Sell Home</h5>
                    <h1>Helping People To Find Their Home </h1>
                    <p>
                        Home finder can help yo find a comfortable home or
                        apartment for sell or rent with new technology with the
                        best possible security for a cheap rent
                    </p>
                    <button>Find more </button>
                </div>
                <div className="house-container-text">
                    <img src={tall} alt="pic1" className="house_pic1" />
                </div>
            </div>
        </div>
    );
};

export default Story;
