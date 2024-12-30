import { useEffect, useState } from "react";
import axios from "axios";
import ApiBaseUrl from "../utils/baseUrl";

const useGetCategoryBooks = (categoryId) => {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);

    const fetchBooks = async () => {
        if(categoryId === 'All') {
            try {
                const response = await axios.get(`${ApiBaseUrl}books`);
                setBooks(response.data.data);
            } catch (error) {
                setError(error);
            }
        }
        else {
            try {
                const response = await axios.get(`${ApiBaseUrl}categories/${categoryId}`);
                setBooks(response.data.data.books);
            } catch (error) {
                setError(error);
            }
        }
    }

    useEffect(() => {
        fetchBooks();
    }, [categoryId])

    return { books };
}

export default useGetCategoryBooks;