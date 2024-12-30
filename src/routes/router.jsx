import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SingleBook from "../pages/SingleBook";
import Register from "../pages/Register";
import Wishlist from "../pages/Wishlist";
import { PrivateRoute } from "./privateRoute";
import Cart from "../pages/Cart";
import Orders from "../pages/Orders";
import Checkout from "../pages/Checkout";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/book/:id',
                element: <SingleBook />
            },
            {
                path: '/wishlist',
                element: <PrivateRoute><Wishlist /></PrivateRoute>
            },
            {
                path: '/cart',
                element: <PrivateRoute><Cart /></PrivateRoute>
            },
            {
                path: '/checkout',
                element: <PrivateRoute><Checkout /></PrivateRoute>
            },
            {
                path: '/orders',
                element: <PrivateRoute><Orders /></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '*',
                element: <NotFound />
            },
        ]
    }
]);

export default router;