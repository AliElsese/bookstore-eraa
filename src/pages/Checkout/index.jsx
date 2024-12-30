import { useForm } from "react-hook-form";
import useOrderCheckout from "../../hooks/CheckoutHook";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
    const { addToOrders } = useOrderCheckout();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate()

    const onSubmit = (data) => {
        const checkOrder = addToOrders(data);
        if(checkOrder) {
            navigate('/')
        }
        else {
            navigate('/cart')
        }
    };

    return (
        <section>
            <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
                <div className="container max-w-screen-lg mx-auto">
                    <div>
                        <div>
                            <h2 className="font-semibold text-xl text-gray-600 mb-2">Cash On Delevary</h2>
                            {/* <p className="text-gray-500 mb-2">Total Price: ${totalPrice}</p>
                            <p className="text-gray-500 mb-6">Items: {cartItems.length > 0 ? cartItems.length : 0}</p> */}
                        </div>

                        
                            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                                <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3 my-8">
                                    <div className="text-gray-600">
                                        <p className="font-medium text-lg">Personal Details</p>
                                        <p>Please fill out all the fields.</p>
                                    </div>

                                    <div className="lg:col-span-2">
                                        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                            <div className="md:col-span-5">
                                                <label htmlFor="customerName">Name</label>
                                                <input
                                                    {...register("customerName", { required: true })}
                                                    type="text" name="customerName" id="customerName" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                                            </div>

                                            <div className="md:col-span-5">
                                                <label html="customerEmail">Email Address</label>
                                                <input
                                                    {...register("customerEmail", { required: true })}
                                                    type="email" name="customerEmail" id="customerEmail" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                    placeholder="email@domain.com" />
                                            </div>
                                            <div className="md:col-span-5">
                                                <label html="customerPhone">Phone Number</label>
                                                <input
                                                    {...register("customerPhone", { required: true })}
                                                    type="number" name="customerPhone" id="customerPhone" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="01025232655" />
                                            </div>

                                            <div className="md:col-span-5">
                                                <label htmlFor="customerAddress">Address</label>
                                                <input
                                                    {...register("customerAddress", { required: true })}
                                                    type="text" name="customerAddress" id="customerAddress" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
                                            </div>

                                            <div className="md:col-span-5">
                                                <label htmlFor="notes">Notes</label>
                                                <input
                                                    {...register("notes", { required: true })}
                                                    type="text" name="notes" id="notes" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
                                            </div>

                                            <div className="md:col-span-5 text-right">
                                                <div className="inline-flex items-end">
                                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Place an Order</button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </form>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    )
}