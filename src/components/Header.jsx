import { useState } from "react";
import { LOGO_URL } from "../utils/const";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Header = () => {
    const ostatus = useOnline();
    const [loginbtn, setLoginbtn] = useState("Login");

    return (
        <div className="flex justify-between items-center p-4 shadow-lg">
            {/* Logo */}
            <img className="h-16 w-1/12" src={LOGO_URL} alt="Logo" />

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
                    <li className="hover:text-blue-500">Cart</li>

                    {/* Login/Logout Button */}
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                        onClick={() => {
                            loginbtn === "Login" ? setLoginbtn("Logout") : setLoginbtn("Login");
                        }}
                    >
                        {loginbtn}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;
