import React from "react";

import ApartDetail from "../components/Apart-Detail/ApartDetail";
import Search from "../components/search/Search";
import { useApart } from "../context/ApartmentContext";
import "./Buy.css";

const Buy = () => {
    const { apartments } = useApart();
    console.log(apartments);
    return (
        <div>
            <Search />
            <div className="buy-apart">
                {apartments?.map((apartment) => (
                    <ApartDetail key={apartment.name} apartment={apartment} />
                ))}
            </div>
        </div>
    );
};

export default Buy;
