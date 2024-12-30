import axios from "axios";
import { useAuth } from "../context/AuthContext"
import Swal from "sweetalert2";
import ApiBaseUrl from "../utils/baseUrl";

const useWishlist = () => {
    const { user } = useAuth();

    const addToWishlist = async (bookId) => {
        if(!user) {
            Swal.fire({
                title: "Action Denied!",
                text: 'You need to login first',
                icon: "error"
            });
        }
        else {
            try {
                const response = await axios.post(`${ApiBaseUrl}wishlist/add`, { bookId: bookId }, {
                    headers: { Authorization: `Bearer ${user.token}` }
                });
                Swal.fire({
                    title: "Added successfully!",
                    icon: "success",
                    // timer: 1500
                });
            } catch (error) {
                // console.error('Error adding to wishlist:', error.response.data.message);
                Swal.fire({
                    title: "Already Added!",
                    text: `${error.response.data.message}`,
                    icon: "info"
                });
            }
        }
    }

    const removeFromWishlist = async (wishlistId) => {
        if(!user) {
            Swal.fire({
                title: "Action Denied!",
                text: 'You need to login first',
                icon: "error"
            });
        }
        else {
            try {
                const response = await axios.post(`${ApiBaseUrl}wishlist/remove`, { wishlistId: wishlistId }, {
                    headers: { Authorization: `Bearer ${user.token}` }
                });
                Swal.fire({
                    title: "Removed successfully!",
                    icon: "success",
                    // timer: 1500
                });
            } catch (error) {
                // console.error('Error removing from wishlist:', error.response.data);
                Swal.fire({
                    title: "error!",
                    text: `${error.response.data.message}`,
                    icon: "error"
                });
            }
        }
    }

    return { addToWishlist, removeFromWishlist };
}

export default useWishlist;