import { useEffect, useState } from "react";
import axios from "axios";
import ApiBaseUrl from "../utils/baseUrl";
import { useAuth } from "../context/AuthContext";

const useGetOrders = () => {
    const{ user } = useAuth();
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState(null);

    const fetchOrders = async () => {
        if (user) {
            try {
                const response = await axios.get(`${ApiBaseUrl}orders`, {
                    headers: { Authorization: `Bearer ${user.token}` }
                });
                setOrders(response.data.data);
            } catch (error) {
                // console.error('Error fetching orders:', error.response.data);
                setError(error);
            }
        }
    };

    useEffect(() => {
        fetchOrders();
    }, [user]);

    return { orders };
}

export default useGetOrders;