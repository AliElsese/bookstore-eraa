import { useEffect, useState } from "react";
import axios from "axios";
import ApiBaseUrl from "../utils/baseUrl";
import { useAuth } from "../context/AuthContext";

const useGetWishlist = () => {
    const{ user } = useAuth();
    const [wishlist, setWishlist] = useState([]);
    const [error, setError] = useState(null);

    const fetchWishlist = async () => {
        if (user) {
            try {
                const response = await axios.get(`${ApiBaseUrl}wishlist/get`, {
                    headers: { Authorization: `Bearer ${user.token}` }
                });
                setWishlist(response.data.data);
            } catch (error) {
                // console.error('Error fetching wishlist:', error.response.data);
                setError(error);
            }
        }
    };

    useEffect(() => {
        fetchWishlist();
    }, [user]);

    return { wishlist };
}

export default useGetWishlist;