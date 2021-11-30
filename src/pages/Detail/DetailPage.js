import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BiCurrentLocation, BiLocationPlus } from "react-icons/bi";
import { GiFamilyHouse } from "react-icons/gi";
import { FaDollarSign } from "react-icons/fa";

import "./DetailPage.css";

const DetailPage = () => {
    const { id } = useParams();
    const [detailData, setDetailData] = useState([]);

    useEffect(() => {
        const getDetailData = async () => {
            const res = await axios.get(
                `http://localhost:5000/api/v1/apartment/${id}`
            );
            setDetailData(res.data);
        };
        getDetailData();
    }, [id]);

    console.log("detailData is available", detailData);
    return (
        <div className="DetailPage">
            <div className="DetailPage-Container">
                <img src={detailData?.apartment?.images} alt="images" />
                <div className="DetailPage-Container-text">
                    <h2 className="DetailPage-Container-text-name">
                        {detailData?.apartment?.name}
                    </h2>
                    <div className="DetailPage-Container-text-card">
                        <div>
                            <h2>{detailData?.apartment?.type}</h2>
                        </div>
                        <div>
                            <h2>{detailData?.apartment?.price}</h2>
                        </div>
                        <div>
                            <h2>{detailData?.apartment?.location}</h2>
                        </div>
                        <div>
                            <h2>{detailData?.apartment?.address}</h2>
                        </div>
                        <div>
                            <h2>{detailData?.apartment?.bedrooms}</h2>
                        </div>
                        <div>
                            <h2>{detailData?.apartment?.bathrooms}</h2>
                        </div>
                        <div>
                            <h2>{detailData?.apartment?.garage}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailPage;
