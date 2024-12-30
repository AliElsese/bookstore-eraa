import { useEffect, useState } from "react";
import axios from "axios";
import ApiBaseUrl from "../utils/baseUrl";
import { useAuth } from "../context/AuthContext";

const useGetCartItems = () => {
    const{ user } = useAuth();
    const [cart, setCart] = useState([]);
    const [error, setError] = useState(null);

    const fetchCartItems = async () => {
        if (user) {
            try {
                const response = await axios.get(`${ApiBaseUrl}cart`, {
                    headers: { Authorization: `Bearer ${user.token}` }
                });
                setCart(response.data.data);
            } catch (error) {
                // console.error('Error fetching cart:', error.response.data);
                setError(error);
            }
        }
    };

    useEffect(() => {
        fetchCartItems();
    }, [user]);

    return { cart, setCart };
}

export default useGetCartItems;