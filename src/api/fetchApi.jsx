import axios from "axios";

export async function fetchApi(query) {
    try {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=40`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('An error occurred while fetching data from the API');
    }
}
