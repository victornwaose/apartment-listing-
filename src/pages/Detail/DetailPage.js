import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BiCurrentLocation, BiLocationPlus } from "react-icons/bi";
import { GiFamilyHouse, GiMechanicGarage } from "react-icons/gi";
import { FaDollarSign, FaBed, FaBath } from "react-icons/fa";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";

import "./DetailPage.css";

const style = {
    position: "absolute",
    top: "47%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
};

const DetailPage = () => {
    const { id } = useParams();
    const [detailData, setDetailData] = useState([]);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                    <div className="DetailPage-Container-text-cards">
                        <div className="card">
                            <div className="type">
                                <GiFamilyHouse className="icons" />
                                <h2>{detailData?.apartment?.type}</h2>
                            </div>
                            <div className="location">
                                <BiCurrentLocation className="icons" />
                                <h2>{detailData?.apartment?.location}</h2>
                            </div>
                            <div className="bedrooms">
                                <FaBed className="icons" />
                                <h2>{detailData?.apartment?.bedrooms}</h2>
                            </div>
                            <div className="garage">
                                <GiMechanicGarage className="icons" />
                                <h2>{detailData?.apartment?.garage}</h2>
                            </div>
                        </div>
                        <div className="card">
                            <div className="price">
                                <FaDollarSign className="icons" />
                                <h2>{detailData?.apartment?.price}</h2>
                            </div>
                            <div className="address">
                                <BiLocationPlus className="icons" />
                                <h2>{detailData?.apartment?.address}</h2>
                            </div>
                            <div className="bathrooms">
                                <FaBath className="icons" />
                                <h2>{detailData?.apartment?.bathrooms}</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={handleOpen}>Make Enquiry </button>
                <Modal open={open} onClose={handleClose}>
                    <Box sx={style}>
                        <Typography variant="h6" component="h2">
                            Enquiry
                        </Typography>
                        <TextField
                            label="enter buyer name"
                            variant="outlined"
                            style={{ marginBottom: "9px", width: "300px" }}
                        />
                        <TextField
                            label="enter buyer phone number"
                            variant="outlined"
                            style={{ marginBottom: "9px", width: "300px" }}
                        />
                        <TextField
                            label="enter buyer email"
                            variant="outlined"
                            style={{ marginBottom: "9px", width: "300px" }}
                        />
                        <textarea
                            cols="10"
                            rows="10"
                            style={{
                                marginTop: "5px",
                                width: "300px",
                                padding: "10px",
                            }}
                            placeholder="Message"
                        />
                        <button>Send Message</button>
                    </Box>
                </Modal>
            </div>
        </div>
    );
};

export default DetailPage;
