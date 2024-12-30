import { Link } from "react-router-dom";
import useGetCartItems from "../../hooks/GetCartItemsHook";
import CartCard from "../../components/CartCard";

export default function Cart() {
    const { cart } = useGetCartItems();

    return (
        <div className="max-w-screen-2xl px-4 py-10">
            <div className="container mx-auto">
                <div className="flex mt-12 h-full flex-col overflow-hidden bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                        <div className="flex items-start justify-between">
                            <div className="text-lg font-medium text-gray-900">Shopping cart</div>
                        </div>

                        <div className="mt-8">
                            <div className="flow-root">
                                {
                                    cart.length > 0 ? (
                                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                                            {
                                                cart.map((product) => (
                                                    <CartCard key={product.cartId} product={product} />
                                                ))
                                            }
                                        </ul>
                                    ) : (<p>No Books found!</p>)
                                }
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                        { cart.length > 0 ? 
                            <div className="mt-6">
                                <Link
                                    to="/checkout"
                                    className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                >
                                    Checkout
                                </Link>
                            </div>
                            :
                            ''
                        }
                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                            <Link to="/">
                                <button
                                    type="button"
                                    className="font-medium text-indigo-600 hover:text-indigo-500 ml-1"
                                >
                                    Continue Shopping
                                    <span aria-hidden="true"> &rarr;</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}