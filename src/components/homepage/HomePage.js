import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

import "./HomePage.css";
import master from "../../assets/materCard.jpg";
import airbnb from "../../assets/Airbnb-Logo.jpg";
import uber from "../../assets/uber.png";
import paypal from "../../assets/paypal.png";
import visa from "../../assets/visa.png";
import About from "./about/About";
import Services from "./our_services/Services";

const Homepage = () => {
    const [location, setLocation] = useState("abia");
    const [type, setType] = useState("bungalow");
    const [price, setPrice] = useState("5000");
    return (
        <div>
            <div className="homepage">
                <div className="hero">
                    <div className="hero_text">
                        <h1>Find your prefect future home</h1>
                        <h4>
                            search confidently with your trusted source of home
                            for sale or rent
                        </h4>
                    </div>
                </div>

                <div className="Search">
                    <div className="Search_options .active">
                        <button className="buy ">Buy</button>
                        <button className="sell">Sell</button>
                        <button className="rent">Rent</button>
                    </div>

                    <div className="Search_inputs">
                        <div>
                            <h4 className="location__header">Location</h4>
                            <select
                                className="location"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            >
                                <option>New-york</option>
                                <option>London</option>
                                <option>Manchester</option>
                                <option>Merseyside</option>
                            </select>
                        </div>
                        <div>
                            <h4>Type</h4>
                            <select
                                className="Price"
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                            >
                                <option value="bungalow">Bungalow</option>
                                <option value="flat">Flat</option>
                                <option value="duplex">Duplex</option>
                                <option value="terrace">Terrace</option>
                                <option value="semi-detached">
                                    Semi-detached
                                </option>
                                <option value="detached">Detached</option>
                                <option value="maisonette">Maisonette</option>
                                <option value="penthouse">Penthouse</option>
                            </select>
                        </div>
                        <div>
                            <h4>Price</h4>
                            <select
                                className="type"
                                name="type"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            >
                                <option>$60,000</option>
                                <option>$70,000</option>
                                <option>$$100,000</option>
                                <option>$110,000</option>
                            </select>
                        </div>
                        <div className="searchBtn">
                            <SearchIcon
                                style={{ width: "30px", height: "45px" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="partner">
                <img className="master" src={master} alt="master" />
                <img src={airbnb} alt="airbnb" />
                <img src={uber} alt="airbnb" />
                <img src={paypal} alt="airbnb" />
                <img src={visa} alt="airbnb" />
            </div>
            <About />
            <Services />
        </div>
    );
};

export default Homepage;
