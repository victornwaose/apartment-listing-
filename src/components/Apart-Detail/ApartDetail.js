import React from "react";
import { BiCurrentLocation, BiLocationPlus } from "react-icons/bi";
import { GiFamilyHouse } from "react-icons/gi";
import { FaDollarSign } from "react-icons/fa";

import "./ApartDetail.css";

const ApartDetail = ({ apartment }) => {
    return (
        <div className="apartDetail">
            <div className="apartDetail-Container">
                <div className="apartDetail-card">
                    <img src={apartment.images} alt={apartment} />
                    <div className="apartDetail-Text">
                        <div className="apartDetail-location">
                            <BiCurrentLocation style={{ color: "#016450" }} />
                            <h4>{apartment.location}</h4>
                        </div>
                        <div className="apartDetail-Address">
                            <BiLocationPlus style={{ color: "#016450" }} />
                            <h4>{apartment.address}</h4>
                        </div>
                        <div className="apartDetail-price">
                            <FaDollarSign style={{ color: "#016450" }} /><h4>{apartment.price}</h4>
                        </div>
                        <div className="apartDetail-type">
                            <GiFamilyHouse style={{ color: "#016450" }} />
                            <h4>{apartment.type}</h4>
                        </div>
                    </div>
                    <div className="apartDetail-button">
                        <button> veiw more</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApartDetail;
