import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ApiBaseUrl from "../utils/baseUrl";

const useGetSingleBook = () => {
    const bookId = useParams();
    const [book, setBook] = useState({});
    const [error, setError] = useState(null);
    
    const fetchBook = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${ApiBaseUrl}books/${bookId.id}`);
            setBook(response.data.data);
        } catch (error) {
            setError(error);
        }
    }
    
    useEffect(() => {
        fetchBook();
    }, [bookId])

    return { book };
}

export default useGetSingleBook;