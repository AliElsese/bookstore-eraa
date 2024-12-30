import { useRef } from "react";
import useCart from "../../hooks/CartHook";

export default function CartCard({ product }) {
    const QuantityInput = useRef();
    const { removeFromCart, updateQuantity } = useCart();

    const handleRemoveFromCart = () => {
        removeFromCart(product.cartId);
    }

    const handleNewQuantity = () => {
        updateQuantity(product.cartId, Number(QuantityInput.current.value));
    }

    return (
        <li className="flex py-6">
            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img
                    alt=""
                    src={product?.image}
                    className="h-full w-full object-cover object-center"
                />
            </div>

            <div className="ml-4 flex flex-1 flex-col">
                <div className="flex flex-wrap justify-between text-base font-medium text-gray-900">
                    <h3>Quantity: {product.qty}</h3>
                    <p className="sm:ml-4">Total Price: ${product.totalPrice}</p>
                </div>
                <div className="flex flex-1 flex-wrap items-end justify-between space-y-2 text-sm">
                    <div className="flex flex-wrap gap-5">
                        <button
                        onClick={handleRemoveFromCart}
                        type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Remove
                        </button>
                        <div className="flex flex-wrap gap-1">
                            <input 
                                type="number" ref={QuantityInput} id="qty" placeholder='New Quantity'
                                className='w-28 shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow'
                            />
                            <button 
                                onClick={handleNewQuantity}
                                className='w-28 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none'>
                                Update
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}