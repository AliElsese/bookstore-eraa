import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import ApiBaseUrl from "../utils/baseUrl";
import Swal from "sweetalert2";

const AuthContext = createContext();

export const AuthProvider = ({ children  }) => {
    const [user, setUser] = useState(null);

    const signup = async (data) => {
        try {
            const response = await axios.post(`${ApiBaseUrl}auth/register`, data);
            Swal.fire({
                title: "Register successful!",
                icon: "success"
            });
            setUser({ token: response.data.data.token });
            return true;
        } catch (error) {
            console.log(error.response.data.message)
            Swal.fire({
                title: "Register failed!",
                text: `${error.response.data.message}`,
                icon: "error"
            });
            return false;
        }
    }

    const login = async (data) => {
        try {
            const response = await axios.post(`${ApiBaseUrl}auth/login`, data);
            Swal.fire({
                title: "Login successful!",
                icon: "success",
                // timer: 1500
            });
            setUser({ token: response.data.data.token });
            return true;
        } catch (error) {
            // console.error('Login failed:', error.response.data.message);
            Swal.fire({
                title: "Login failed!",
                text: `${error.response.data.message}`,
                icon: "error"
            });
            return false;
        }
    }

    const logout = () => {
        Swal.fire({
            title: "Logged out successfully!",
            icon: "success",
            // timer: 1500
        });
        setUser(null);
        return true;
    }

    const value = {
        user,
        signup,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
};