import useGetOrders from "../../hooks/GetOrdersHook";

export default function Orders() {
    const { orders } = useGetOrders();

    return (
        <div>
            <div className='container mx-auto p-6'>
                <h2 className='text-2xl font-semibold mb-4'>Orders</h2>
                {
                    orders.length === 0 ? (<div>No orders found!</div>) : (<div>
                        {
                            orders.map((order, index) => (
                                <div key={index} className="border-b mb-4 pb-4">
                                    <p className='p-1 bg-secondary text-white w-10 rounded mb-1'># {index + 1}</p>
                                    <h2 className="font-bold">Order ID: {order.orderNumber}</h2>
                                    <p className="text-gray-600">Name: {order.customerName}</p>
                                    <p className="text-gray-600">Email: {order.customerEmail}</p>
                                    <p className="text-gray-600">Phone: {order.customerPhone}</p>
                                    <p className="text-gray-600">Total Price: ${order.totalPrice}</p>
                                    <h3 className="font-semibold mt-2">Address:</h3>
                                    <p> {order.customerAddress}</p>
                                    <h3 className="font-semibold mt-2">Products Names:</h3>
                                    <ul>
                                        {order.items.map((item, index) => (
                                            <li key={index}>{index + 1} - {item.book.title}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))
                        }
                    </div>)
                }
            </div>
        </div>
    )
}