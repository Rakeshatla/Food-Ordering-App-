import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/const";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const ostatus = useOnline();
    const [loginbtn, setLoginbtn] = useState("Login");
    const { loginUser } = useContext(UserContext);
    //to subscribe to cart
    const cartItems = useSelector((store) => store.cart.items)
    const favitems = useSelector((store) => store.favorites.items)

    return (
        <div className="flex justify-between items-center p-4 shadow-lg">
            {/* Logo */}
            <img className="h-16 w-1/12" src={import.meta.env.VITE_LOGO_URL} alt="Logo" />

            {/* Navbar */}
            <div>
                <ul className="flex space-x-6 items-center">
                    {/* Online Status */}
                    <li className="text-sm">
                        OnlineStatus: {ostatus ? "🟩" : "❤️"}
                    </li>

                    {/* Navigation Links */}
                    <li>
                        <Link to="/" className="hover:text-blue-500">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="hover:text-blue-500">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="hover:text-blue-500">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/grocery" className="hover:text-blue-500">Grocery</Link>
                    </li>
                    <li>
                        <Link to="/favorites" className="hover:text-blue-500">Favorites({favitems.length})</Link>
                    </li>
                    <li className="hover:text-blue-500">
                        <Link to="/cart">Cart:({cartItems.length})</Link></li>

                    {/* Login/Logout Button */}
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                        onClick={() => {
                            loginbtn === "Login" ? setLoginbtn("Logout") : setLoginbtn("Login");
                        }}
                    >
                        {loginbtn}
                    </button>
                    <li>{loginUser}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
