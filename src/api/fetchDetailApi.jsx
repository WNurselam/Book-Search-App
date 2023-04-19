import axios from "axios";

export async function fetchDetailApi(id) {
    try {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('An error occurred while fetching data from the API');
    }
}
