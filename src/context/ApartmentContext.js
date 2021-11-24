import { createContext, useContext, useEffect, useState } from "react";

const ApartmentContext = createContext();

export const useApartmentContext = () => useContext(ApartmentContext);

const ApartmentProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [type, setType] = useState("flat");
    const [price, setPrice] = useState(400);
    const [location, setLocation] = useState("Asaba");
    const [keyword, setKeyword] = useState(" ");

    const Url = "https://apartment-backend-api.herokuapp.com/api/v1/apartment";

    useEffect(() => {
        const fetchData = () => {
            setLoading(true);
            if (price === 0 || location === " " || type === " ") {
                try {
                    fetch(Url)
                        .then((res) => res.json())
                        .then((data) => {
                            console.log(data);
                        });
                    setLoading(false);
                } catch (error) {
                    console.log(error);
                    setLoading(false);
                }
            } else {
                try {
                    fetch(
                        `${Url}?price=${price}&location=${location}&type=${type}`
                    )
                        .then((response) => response.json())
                        .then((data) => {
                            console.log(data);
                        });
                    setLoading(false);
                } catch (error) {
                    console.log(error);
                    setLoading(false);
                }
            }
        };
        fetchData();
    }, [data, location, price, type]);

    const values = {
        data,
        type,
        loading,
        price,
        location,
        setType,
        setPrice,
        setLocation,
        setKeyword,
    };

    return (
        <ApartmentContext.Provider value={values}>
            {children}
        </ApartmentContext.Provider>
    );
};

export default ApartmentProvider;
