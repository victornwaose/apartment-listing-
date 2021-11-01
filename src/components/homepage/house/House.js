import React from "react";

import "./House.css";
import Pic1 from "../../../assets/pexels-max-vakhtbovych-6284232.jpg";
import tall3 from "../../../assets/tall3.jpg";
import home from "../../../assets/home.jpg";

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
                <div className="house-container-text2">
                    <h5>Sell Home</h5>
                    <h1>Home Selling is now much more easier </h1>
                    <p>
                        The Winning award doesn't have to be the highest offer.
                        How Walter buying Agent help to making the best offer
                        for your situation. We alway include technical checks
                        Reservation of funding and when to move in our final
                        bidding strategy thanks to our Walter you don't have to
                        wait longer
                    </p>
                    <button>Find more </button>
                </div>
                <div className="house-container-image2">
                    <img src={tall3} alt="pic1" className="house_pic2" />
                </div>
            </div>
            <div className="compare">
                <div className="compare-text">
                    <h1>Compare Your Options Side By Side</h1>
                </div>
                <div className="compare-container">
                    {" "}
                    <img
                        src={home}
                        alt="img-cen"
                        className="compare-container-img"
                    />
                    <div className="compare-text-text">
                        <p>
                            Thanks to walter you don't have to trust an Agent on
                            their words, our expert help your understand the
                            data about housing marketing to help you make
                            smarter choice{" "}
                        </p>
                        <div className="compare-text-profile">
                            <span></span>
                            <h6>Segun Ibrahim</h6>
                        </div>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Story;
