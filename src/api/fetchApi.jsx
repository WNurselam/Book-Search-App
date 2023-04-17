import axios from "axios";

export const fetchApi = async (query) => {
    const { data } =await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=40`)
    return data;
}