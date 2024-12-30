import { useEffect, useState } from "react";
import axios from "axios";
import ApiBaseUrl from "../utils/baseUrl";

const useGetCategories = () => {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);

    const fetchCategories = async () => {
        try {
            const response = await axios.get(`${ApiBaseUrl}categories`);
            setCategories(response.data.data);
        } catch (error) {
            // console.error('Error fetching categories:', error.response.data);
            setError(error);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, [categories]);

    return { categories };
}

export default useGetCategories;