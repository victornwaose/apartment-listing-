import React from "react";
import { GiHouseKeys, GiHouse, GiFamilyHouse } from "react-icons/gi";
import { FaHandshake } from "react-icons/fa";

import "./Services.css";

const Services = () => {
    return (
        <div className="services">
            <h4>Our services</h4>
            <h2>How Apartments can help</h2>
            <div className="grid__item">
                <div className="icon__container">
                    <GiHouse className="item__icon" />
                    <p className="item__text">Buy your dream home</p>
                </div>

                <div className="icon__container">
                    <GiFamilyHouse className="item__icon" />
                    <p className="item__text">Easily sell your home</p>
                </div>

                <div className="icon__container">
                    <GiHouseKeys className="item__icon" />
                    <p className="item__text">Rent your home you love</p>
                </div>

                <div className="icon__container">
                    <FaHandshake className="item__icon" />{" "}
                    <p className="item__text">Be partner with Apartments</p>
                </div>
            </div>
        </div>
    );
};

export default Services;
