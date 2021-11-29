import { createContext, useContext, useEffect, useState } from "react";

const Apartment = createContext();

//https://apartment-backend-api.herokuapp.com/api/v1/apartment

export const useApart = () => {
    return useContext(Apartment);
};

const ApartmentProvider = ({ children }) => {
    const [apartments, setApartments] = useState([]);
    const [type, setType] = useState("");
    const [price, setPrice] = useState(0);
    const [location, setLocation] = useState("");
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState({
        open: false,
        message: "",
        type: "success",
    });

    const Url = "http://localhost:5000/api/v1/apartment";

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const fetchData = async () => {
        setLoading(true);
        if (!apartments.length) {
            if (price === 0 || location === " " || type === " ") {
                try {
                    const response = await fetch(Url);
                    if (response.ok) {
                        const getData = await response.json();
                        setApartments(getData);
                        setLoading(false);
                    }
                } catch (error) {
                    console.log(error);
                    setLoading(false);
                }
            } else {
                try {
                    const res = await fetch(
                        `${Url}?price=${price}&location=${location}&type=${type}`
                    );
                    if (res.ok) {
                        const newData = await res.json();
                        setApartments(newData);
                        setLoading(false);
                    }
                } catch (error) {
                    console.log(error);
                    setLoading(false);
                }
            }
        }
    };

    useEffect(() => {
        fetchData();
    }, [apartments, fetchData, location, price, type]);
    console.log(apartments);

    const values = {
        type,
        location,
        price,
        apartments,
        loading,
        alert,
        setAlert,
        setLoading,
        setLocation,
        setPrice,
        setType,
    };

    return <Apartment.Provider value={values}>{children}</Apartment.Provider>;
};

export default ApartmentProvider;
