import useWishlist from "../../hooks/WishlistHook";
import useGetSingleBook from "../../hooks/GetSingleBookHook";
import useCart from "../../hooks/CartHook";

export default function SingleBook() {
    const { book } = useGetSingleBook();

    const { addToWishlist } = useWishlist();
    const { addToCart } = useCart();
    
    const handleAddToWishlist = () => {
        addToWishlist(book.id);
    }

    const handleAddToCart = () => {
        addToCart(book.id);
    }

    return (
        <div className="max-w-screen-2xl px-4 py-10">
            <div className="container mx-auto">
                <div className="shadow-md p-5">
                    <h1 className="text-2xl font-bold mb-6">{book.title}</h1>

                    <div className=''>
                        <div>
                            <img
                                src={book.image}
                                alt={book.title}
                                className="mb-8 size-72"
                            />
                        </div>

                        <div className='mb-5'>
                            <p className="text-gray-700 mb-2"><strong>Author:</strong> {book.title}</p>
                            <p className="text-gray-700 mb-4 capitalize">
                                <strong>Category:</strong> {book.category}
                            </p>
                            <p className="text-gray-700"><strong>Description:</strong> {book.description}</p>
                        </div>

                        <div className="px-6 pt-4 pb-2">
                            <button 
                            onClick={handleAddToWishlist}
                            className="inline-block bg-primary rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                Add To Wishlist
                            </button>
                            <button 
                            onClick={handleAddToCart}
                            className="inline-block bg-sky-500 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                Add To Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}