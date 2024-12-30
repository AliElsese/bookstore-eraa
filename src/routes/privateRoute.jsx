import { Navigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

export const PrivateRoute = ({ children }) => {
    const { user } = useAuth();

    if(user) {
        return children;
    }

    return (
        <Navigate to="/login" replace/>
    )
}