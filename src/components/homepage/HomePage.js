import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

import "./HomePage.css";
import Video from "./ved/Video";
import House from "./house/House";
import Services from "./our_services/Services";
import Listed from "./listed/Listed";
import Testimony from "./testimony/Testimony";
import master from "../../assets/materCard.jpg";
import airbnb from "../../assets/Airbnb-Logo.jpg";
import uber from "../../assets/uber.png";
import paypal from "../../assets/paypal.png";
import visa from "../../assets/visa.png";
import About from "./about/About";

const Homepage = () => {
    const [search, setSearch] = useState("");

    const onChange = (e) => {
        e.preventDefault();
    };
    console.log(search);

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
                    <h4>we provide the best of house for affordable price</h4>
                    <h4>search for the best price of house</h4>
                    <div className="Search_Items">
                        <input
                            type="text"
                            placeholder="Search for house ready for rent "
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="Search_input"
                        />
                        <SearchIcon
                            className="searchBtn"
                            style={{ width: "10%", height: "34px" }}
                        />
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
            <House />
            <Video embedId={"7x3Dz7idqCo"} />
            <Testimony />
            <Listed />
        </div>
    );
};

export default Homepage;
