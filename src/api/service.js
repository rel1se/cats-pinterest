import axios from 'axios'

const API_URL = 'https://api.thecatapi.com/v1/images/search?'



export const fetchCats = async (limit) => {
    try {
        const response = await axios.get(`${API_URL}limit=${limit}&breed_ids=beng&api_key=${import.meta.env.VITE_APIKEY}`);
        return response.data;
    }
    catch (error) {
        console.error(error)
        return [];
    }
}