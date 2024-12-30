import { Link } from "react-router-dom";
import useWishlist from "../../hooks/WishlistHook";
import useCart from "../../hooks/CartHook";

export default function WishlistCard({ wishlist }) {
    const { removeFromWishlist } = useWishlist();
    const { addToCart } = useCart();

    const handleRemoveFromWishlist = () => {
        removeFromWishlist(wishlist.id);
    }

    const handleAddToCart = () => {
        addToCart(wishlist.book.id);
    }

    return (
        <div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <Link to={`/book/${wishlist.book.id}`}>
                    <img className="w-full" src={wishlist.book.image} alt={wishlist.book.title} />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{wishlist.book.title}</div>
                        <p className="text-gray-700 text-base">
                            {wishlist.book.description.length > 80 ? `${wishlist.book.description.slice(0, 80)}...` : wishlist.book.description}
                        </p>
                        <p className="text-red-700 text-bold mt-2">
                            {wishlist.book.price}
                        </p>
                    </div>
                </Link>
                <div className="px-6 pt-4 pb-2">
                    <button 
                    onClick={handleRemoveFromWishlist}
                    className="inline-block bg-primary rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        Remove From Wishlist
                    </button>
                    <button 
                    onClick={handleAddToCart}
                    className="inline-block bg-sky-500 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    )
}