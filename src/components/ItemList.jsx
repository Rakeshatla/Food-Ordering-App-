import { useDispatch } from "react-redux";
import { RES_LOGO } from "../utils/const";
import { addItem, removeItem } from "../utils/cartSlice";
import { useState } from "react";

const ItemList = ({ items, showAddButton = true, showCustom = false }) => {
    const dispatch = useDispatch();
    const [count, setCount] = useState(1);
    // const add = () => {
    //     setCount(count + 1)
    // }
    // const subtract = () => {
    //     setCount(count - 1)
    // }
    //to dispatch the actions
    const handlecart = (item) => {
        dispatch(addItem(item))
    }
    const handleDelete = (item) => {
        dispatch(removeItem(item))
    }

    return (
        <div>
            {items.map((item) => (
                <div key={item.card.info.id} className="m-4 py-4 border-black border-b-2 ">
                    {/* Flex container to align items */}
                    <div className="flex justify-between items-start space-x-4 ">
                        {/* Left side with name and price */}
                        <div className="flex-grow text-left">
                            <span className="block text-lg font-semibold text-gray-800">
                                {item.card.info.name}
                            </span>
                            <span className="block text-lg text-gray-800">
                                ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                            </span>
                            {showCustom && <div className="flex my-0 mx-0 m-auto p-2">
                                <button onClick={() => { setCount(count - 1) }} className="m-2">-</button>
                                <h1 className="m-2 text-center">{count}</h1>
                                <button
                                    onClick={() => {
                                        setCount(count + 1);  // Increase the count
                                    }}
                                    className="m-2"
                                >
                                    +
                                </button>

                                <div>
                                    <button onClick={handleDelete} className="m-2 bg-black text-white">delete</button>
                                </div>
                            </div>}
                            {showAddButton && <p className="text-xs text-gray-600 mt-2 max-w-md">
                                {item.card.info.description}
                            </p>}
                        </div>
                        {/* Right side with image */}
                        <div className="flex-shrink-0">
                            <div className="absolute">
                                {showAddButton && <button
                                    className=" text-center p-2 mx-16 rounded-lg bg-white text-green-600 shadow-lg transition hover:bg-green-600 hover:text-white hover:scale-105"
                                    onClick={() => handlecart(item)}
                                >
                                    Add +
                                </button>}
                            </div>
                            <img className="w-36 h-36 object-cover rounded-lg" src={RES_LOGO + item.card.info.imageId} alt={item.card.info.name} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;
