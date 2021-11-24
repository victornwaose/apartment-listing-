import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from "firebase/storage";

import "./Sell.css";

const Sell = () => {
    const [singleFile, setSingleFile] = useState([]);
    const [images, setImages] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [progress, setProgress] = useState(0);

    const [apartmentLists, setApartmentLists] = useState({
        price: "",
        bedrooms: "",
        bathrooms: "",
        garage: "",
        description: "",
        size: "",
        address: "",
        location: "",
        type: "bungalow",
        name: "",
    });
    const history = useHistory();
    const Url = "http://localhost:5000/api/v1/apartment";

    const singleFileChange = (e) => {
        const storage = getStorage();
        const file = e.target.files[0];
        const storageRef = ref(storage, file?.name);

        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const prog =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgress(prog);
            },
            (error) => {
                console.log(error);
                setErrorMsg(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log(downloadURL);
                    setImages(downloadURL);
                });
            }
        );
    };

    const postData = async () => {
        try {
            await axios.post(Url, { ...apartmentLists, images });

            console.log(apartmentLists);
        } catch (error) {
            console.log(error);
        }
    };

    const onSubmit = async () => {
        await postData();
        // history.push("/");
    };

    return (
        <div className="sell">
            <h2 className="heading">Upload a product for review</h2>
            <div className="sell-section">
                <form className="form__container" onSubmit={onSubmit}>
                    <div className="input__container">
                        <label>Seller Name</label>
                        <input
                            type="text"
                            required
                            placeholder="Enter Your Full Name"
                            value={apartmentLists.name}
                            onChange={(e) =>
                                setApartmentLists({
                                    ...apartmentLists,
                                    name: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="input__container">
                        <label>Property Name</label>
                        <input
                            type="text"
                            required
                            placeholder="Enter a  Property Name"
                        />
                    </div>
                    <div className="input__container">
                        <label>Asking Price</label>
                        <input
                            type="number"
                            required
                            placeholder="Enter a Asking price"
                            value={apartmentLists.price}
                            onChange={(e) =>
                                setApartmentLists({
                                    ...apartmentLists,
                                    price: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="input__container">
                        <label>Property Type</label>
                        <select
                            className="type__select"
                            required
                            value={apartmentLists.type}
                            onChange={(e) =>
                                setApartmentLists({
                                    ...apartmentLists,
                                    type: e.target.value,
                                })
                            }
                        >
                            <option value="bungalow">Bungalow</option>
                            <option value="flat">Flat</option>
                            <option value="duplex">Duplex</option>
                            <option value="terrace">Terrace</option>
                            <option value="semi-detached">Semi-detached</option>
                            <option value="detached">Detached</option>
                            <option value="maisonette">Maisonette</option>
                            <option value="penthouse">Penthouse</option>
                        </select>
                    </div>
                    <div className="input__container">
                        <label>Number Of Bedroom</label>
                        <input
                            type="number"
                            required
                            placeholder="Enter a Number Of Bedroom"
                            value={apartmentLists.bedrooms}
                            onChange={(e) =>
                                setApartmentLists({
                                    ...apartmentLists,
                                    bedrooms: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="input__container">
                        <label>Number Of Bathroom</label>
                        <input
                            type="number"
                            required
                            placeholder="Enter a Number Of bathrooms"
                            value={apartmentLists.bathrooms}
                            onChange={(e) =>
                                setApartmentLists({
                                    ...apartmentLists,
                                    bathrooms: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="input__container">
                        <label>Number Of Garage</label>
                        <input
                            type="number"
                            required
                            placeholder="Enter a Number Of Garage"
                            value={apartmentLists.garage}
                            onChange={(e) =>
                                setApartmentLists({
                                    ...apartmentLists,
                                    garage: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="input__container">
                        <label>Location</label>
                        <input
                            type="text"
                            required
                            placeholder="Enter The  Location"
                            value={apartmentLists.location}
                            onChange={(e) =>
                                setApartmentLists({
                                    ...apartmentLists,
                                    location: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="input__container">
                        <label>Address</label>
                        <input
                            type="text"
                            required
                            placeholder="Enter The  Address"
                            value={apartmentLists.address}
                            onChange={(e) =>
                                setApartmentLists({
                                    ...apartmentLists,
                                    address: e.target.value,
                                })
                            }
                        />
                    </div>

                    <div className="input__container">
                        <label>Product Description</label>
                        <textarea
                            cols="10"
                            rows="10"
                            required
                            value={apartmentLists.description}
                            onChange={(e) =>
                                setApartmentLists({
                                    ...apartmentLists,
                                    description: e.target.value,
                                })
                            }
                        />
                    </div>

                    <div className="input__container">
                        <label>Product Image</label>
                        <input type="file" onChange={singleFileChange} />
                        <div>
                            {progress < 100 ? `${progress}%` : "image Loaded"}
                        </div>
                    </div>
                    <button className="btn"> Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Sell;
