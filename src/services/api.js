import axios from 'axios'
import { API_URL } from '../constants/constant'

export const getAllRecipe = async (input) => {
    try {
        let response = await axios.get(`${API_URL}/search?q=${input}`);
        return response.data;
    } catch (error) {
        return error.message;
    }
}