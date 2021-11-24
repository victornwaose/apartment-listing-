import axios from "axios";

const url = "http://localhost:5000/api/v1/singleFile";

export const signFileUpload = async (data) => {
    try {
        await axios.post(url + "singleFile" + data);
    } catch (error) {
        console.log(error);
    }
};
