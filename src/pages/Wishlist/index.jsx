import WishlistCard from "../../components/WishlistCard";
import useGetWishlist from "../../hooks/GetWishlistHook";

export default function Wishlist() {
    const { wishlist } = useGetWishlist();

    return (
        <div className="max-w-screen-2xl px-4 py-10">
            <div className="container mx-auto">
                <h2 className="text-3xl font-semibold mb-6">Wishlist</h2>
                <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 mt-8">
                    {
                        wishlist.length === 0 ? (<div>No Books found!</div>) : (<div>
                            {
                                wishlist.map((wishlist) => {
                                    return (
                                        <WishlistCard key={wishlist.id} wishlist={wishlist} />
                                    )
                                })
                            }
                        </div>)
                        
                    }
                </div>
            </div>
        </div>
    )
}