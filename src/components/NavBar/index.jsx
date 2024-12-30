import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/footer-logo.png"
import SearchIcon from "../../assets/images/Search.svg";
import FavIcon from "../../assets/images/Favorite.svg";
import CartIcon from "../../assets/images/cart.svg";
import AvatarImage from "../../assets/images/avatar.png"
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

export default function NavBar() {
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const navigation = [
        {name: "Wish List", href:"/wishlist"},
        {name: "Orders", href:"/orders"},
        {name: "Cart", href:"/cart"},
        {name: "Check Out", href:"/checkout"},
    ]

    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        const logoutCheck = logout();
        if(logoutCheck) {
            navigate('/login')
        }
    }

    return (
        <header className="max-w-screen-2xl px-4 py-6 border-b-2 border-gray-200">
            <nav className='container mx-auto flex justify-between items-center'>

                <div className="flex items-center md:gap-10 gap-4">
                    <Link to='/'>
                        <img src={Logo} className="sm:size-10 size-6 sm:block" alt="" />
                    </Link>
                    
                    {/* <div className="relative sm:w-64 w-40 space-x-2">
                        <img src={SearchIcon} className="absolute left-3 inset-y-2" alt="" />
                        <input type="text" placeholder="Search here .."
                        className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded focus:outline-none" />
                    </div> */}
                </div>

                <div className="relative flex items-center md:space-x-3 space-x-2">
                    <div>
                        {
                            user ? 
                            <>
                                <button className="sm:block" onClick={() => {setIsDropDownOpen(!isDropDownOpen)}}>
                                    <img src={AvatarImage} className={`size-7 rounded-full ring-2 ring-blue-600`} alt="" />
                                </button>
                                {
                                    isDropDownOpen && (
                                        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
                                            <ul className="py-2">
                                                {
                                                    navigation.map((item) => (
                                                        <li key={item.name} onClick={() => setIsDropDownOpen(false)}>
                                                            <Link to={item.href} className="block px-4 py-2 text-sm hover:bg-gray-100">
                                                                {item.name}
                                                            </Link>
                                                        </li>
                                                    ))
                                                }
                                                <li>
                                                    <button
                                                    onClick={handleLogout}
                                                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-200">
                                                        Logout
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    )
                                }
                            </>
                            :
                            <Link to='/login' className="flex items-center bg-primary p-1 sm:px-6 px-2 rounded">
                                Login
                            </Link>
                        }
                    </div>
                    <Link to='/wishlist' className={`${user ? 'hidden sm:block' : 'hidden'}`}>
                        <img src={FavIcon} className="size-6" alt="" />
                    </Link>
                    <Link to='/cart' className={`${user ? 'hidden sm:block' : 'hidden'}`}>
                        <img src={CartIcon} className="size-6" alt="" />
                    </Link>
                </div>
            </nav>
        </header>
    )
}