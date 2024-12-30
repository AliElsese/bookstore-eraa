import axios from "axios";
import { useAuth } from "../context/AuthContext"
import Swal from "sweetalert2";
import ApiBaseUrl from "../utils/baseUrl";

const useOrderCheckout = () => {
    const { user } = useAuth();

    const addToOrders = async (order) => {
        if(!user) {
            Swal.fire({
                title: "Action Denied!",
                text: 'You need to login first',
                icon: "error"
            });
        }
        else {
            try {
                const response = await axios.post(`${ApiBaseUrl}orders`, { 
                    customerName: order.customerName,
                    customerEmail: order.customerEmail,
                    customerPhone: order.customerPhone,
                    customerAddress: order.customerAddress,
                    notes: order.notes,
                }, {
                    headers: { Authorization: `Bearer ${user.token}` }
                });
                Swal.fire({
                    title: "Added successfully!",
                    icon: "success",
                    // timer: 1500
                });
                return true;
            } catch (error) {
                // console.error('Error adding to orders:', error.response.data.message);
                Swal.fire({
                    title: "Order Failed!",
                    text: `${error.response.data.message}`,
                    icon: "error"
                });
                return false;
            }
        }
    }

    return { addToOrders };
}

export default useOrderCheckout;