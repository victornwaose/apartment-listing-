import React from "react";

import "./Search.css";

const Search = () => {
    return (
        <div className="search">
            <div className="search_container">
                <input className="search_input" placeholder="Search Location" />
                <input className="search_input" placeholder="Search Price" />
                <select className="search_select" required>
                    <option>Bungalow</option>
                    <option>Flat</option>
                    <option>Duplex</option>
                    <option>Terrace</option>
                    <option>Semi-detached</option>
                    <option>Detached</option>
                    <option>Maisonette</option>
                    <option>Penthouse</option>
                </select>
            </div>
        </div>
    );
};

export default Search;
