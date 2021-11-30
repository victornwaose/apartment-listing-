import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
                <img src={detailData?.images} alt={detailData._id} />
                <div>
                    <h2>{detailData?.name}</h2>
                </div>
            </div>
        </div>
    );
};

export default DetailPage;
