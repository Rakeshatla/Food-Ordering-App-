import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItem } from "../utils/cartSlice";
import { useState } from "react";
import TotalBill from "../utils/TotalBill";

const Cart = () => {
    const cartitems = useSelector((store) => store.cart.items)
    // console.log(cartitems)
    const dispatch = useDispatch();
    const bill = TotalBill(cartitems);
    const handleClear = () => {
        dispatch(clearItem())
    }
    return (
        <div className="w-6/12 m-auto">
            <h1 className="text-center m-2 p-2 font-bold border-b-black">Cart</h1>
            <button className="m-2 p-2 bg-black text-white" onClick={handleClear}>Clear</button>

            {(cartitems.length === 0) ? <h1 className="text-center font-bold">Please add items to cart</h1> : <ItemList items={cartitems} showAddButton={false} showCustom={true} />}
            <div className="text-right font-bold m-4">
                <h1>Total Bill: ₹{bill.toFixed(2)}</h1>
            </div>
        </div>
    )
}
export default Cart;