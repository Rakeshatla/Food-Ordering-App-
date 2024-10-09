import { useState } from "react"
import { LOGO_URL } from "../utils/const"
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Header=()=>{
    const ostatus =useOnline()
    const [loginbtn,setLoginbtn]=useState("Login");
    return(
        <div className="Header">
            <img  className="logo" src={LOGO_URL}></img>
            <div className="Navbar">
                <ul>
                    <li>OnlineStatus:{ostatus?"🟩":"❤️"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li>Cart</li>
                <button className="loginbtn" onClick={()=>{
                    loginbtn === "Login"?setLoginbtn("Logout"):setLoginbtn("Login");
                }}>{loginbtn}</button>
                </ul>
            </div>
        </div>

    )
}
export default Header;