import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

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
                    <button>
                        Find more{" "}
                        <AiOutlineArrowRight style={{ marignTop: "4px" }} />
                    </button>
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
                    <button>
                        Find more <AiOutlineArrowRight />
                    </button>
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
                        <div className="compare-text-text_icon">
                            <svg
                                width="66"
                                height="49"
                                viewBox="0 0 66 53"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M15.9176 24.9638C19.6706 25.3478 22.7118 26.8201 25.0412 29.3804C27.5 31.8128 28.7294 34.8853 28.7294 38.5978C28.7294 42.6944 27.3706 46.151 24.6529 48.9674C22.0647 51.6558 18.8294 53 14.9471 53C10.5471 53 6.92353 51.3998 4.07647 48.1993C1.35882 44.9988 0 40.3261 0 34.1812C0 22.1473 4.27059 11.5857 12.8118 2.49638C14.3647 0.832126 16.1765 0 18.2471 0C20.0588 0 21.6765 0.704105 23.1 2.11231C24.6529 3.39251 25.4294 4.92874 25.4294 6.72101C25.4294 8.25724 24.7824 9.72947 23.4882 11.1377C19.6059 15.2343 17.0824 19.843 15.9176 24.9638ZM53.1882 24.9638C56.9412 25.3478 59.9824 26.8201 62.3118 29.3804C64.7706 31.8128 66 34.8853 66 38.5978C66 42.6944 64.6412 46.151 61.9235 48.9674C59.3353 51.6558 56.1 53 52.2176 53C47.8176 53 44.1941 51.3998 41.3471 48.1993C38.6294 44.9988 37.2706 40.3261 37.2706 34.1812C37.2706 22.1473 41.5412 11.5857 50.0824 2.49638C51.6353 0.832126 53.4471 0 55.5176 0C57.3294 0 58.9471 0.704105 60.3706 2.11231C61.9235 3.39251 62.7 4.92874 62.7 6.72101C62.7 8.25724 62.0529 9.72947 60.7588 11.1377C56.8765 15.2343 54.3529 19.843 53.1882 24.9638Z"
                                    fill="#FF6501"
                                    fill-opacity="0.90"
                                />
                            </svg>
                        </div>
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Story;
