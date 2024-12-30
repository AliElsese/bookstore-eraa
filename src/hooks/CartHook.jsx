import axios from "axios";
import { useAuth } from "../context/AuthContext"
import Swal from "sweetalert2";
import ApiBaseUrl from "../utils/baseUrl";
import useGetCartItems from "./GetCartItemsHook";

const useCart = () => {
    const { user } = useAuth();
    const { setCart } = useGetCartItems();

    const addToCart = async (bookId) => {
        if(!user) {
            Swal.fire({
                title: "Action Denied!",
                text: 'You need to login first',
                icon: "error"
            });
        }
        else {
            try {
                const response = await axios.post(`${ApiBaseUrl}cart`, { bookId: bookId }, {
                    headers: { Authorization: `Bearer ${user.token}` }
                });
                Swal.fire({
                    title: "Added successfully!",
                    icon: "success",
                    // timer: 1500
                });
            } catch (error) {
                // console.error('Error adding to cart:', error.response.data.message);
                Swal.fire({
                    title: "Already Added!",
                    text: `${error.response.data.message}`,
                    icon: "info"
                });
            }
        }
    }

    const updateQuantity = async (cartId, qty) => {
        if(!user) {
            Swal.fire({
                title: "Action Denied!",
                text: 'You need to login first',
                icon: "error"
            });
        }
        else {
            try {
                const response = await axios.post(`${ApiBaseUrl}cart/${cartId}`, { qty: qty }, {
                    headers: { Authorization: `Bearer ${user.token}` }
                });
                Swal.fire({
                    title: "Updated successfully!",
                    icon: "success",
                    // timer: 1500
                });
                setCart(response.data.data);
            } catch (error) {
                // console.error('Error adding to cart:', error.response.data.message);
                Swal.fire({
                    title: "Already Added!",
                    text: `${error.response.data.message}`,
                    icon: "info"
                });
            }
        }
    }

    const removeFromCart = async (cartId) => {
        if(!user) {
            Swal.fire({
                title: "Action Denied!",
                text: 'You need to login first',
                icon: "error"
            });
        }
        else {
            try {
                const response = await axios.delete(`${ApiBaseUrl}cart/${cartId}`, {
                    headers: { Authorization: `Bearer ${user.token}` }
                });
                Swal.fire({
                    title: "Removed successfully!",
                    icon: "success",
                    // timer: 1500
                });
                setCart(response.data.data);
            } catch (error) {
                // console.error('Error removing from cart:', error.response.data);
                Swal.fire({
                    title: "error!",
                    text: `${error.response.data.message}`,
                    icon: "error"
                });
            }
        }
    }

    return { updateQuantity, removeFromCart, addToCart };
}

export default useCart;