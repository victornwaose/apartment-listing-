import React from "react";

import "./HomePage.css";

const Homepage = () => {
    return (
        <div className="homepage">
            <div className="hero">
                <div className="hero_text">
                    <h1>Find your prefect future home</h1>
                    <h4>
                        search confidently with your trusted source of home for
                        sale or rent
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
                </div>
            </div>
        </div>
    );
};

export default Homepage;
