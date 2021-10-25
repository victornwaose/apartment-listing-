import React from "react";
import SearchIcon from "@mui/icons-material/Search";

import "./HomePage.css";
import master from "../../assets/materCard.jpg";
import airbnb from "../../assets/Airbnb-Logo.jpg";
import uber from "../../assets/uber.png";
import paypal from "../../assets/paypal.png";
import visa from "../../assets/visa.png";
import About from "./about/About";

const Homepage = () => {
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
                        <select className="location" name="location">
                            <option>New-york</option>
                            <option>London</option>
                            <option>Manchester</option>
                            <option>Merseyside</option>
                        </select>
                        <select className="Price" name="Max Price">
                            <option>New-york</option>
                            <option>London</option>
                            <option>Manchester</option>
                            <option>Merseyside</option>
                        </select>
                        <select className="type" name="type">
                            <option>$60,000</option>
                            <option>$70,000</option>
                            <option>$$100,000</option>
                            <option>$110,000</option>
                        </select>
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
        </div>
    );
};

export default Homepage;
