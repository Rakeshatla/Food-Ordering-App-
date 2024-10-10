import { handle, use } from "express/lib/router";
import ItemList from "./ItemList";
import { useState } from "react";
const Rescategory = (props) => {
    const { data, display, setShowindex } = props;
    // console.log(data)
    // const [display, setDisplay] = useState(false);
    const handleChange = () => {
        setShowindex();
    }
    // console.log(data)

    return (
        <div>
            <div className="py-1 text-center bg-gray-200 m-2 ">
                <div className="py-1 text-center bg-gray-200  flex justify-between cursor-pointer" onClick={handleChange}>
                    <span className="text-xl font-bold text-gray-800 m-2 py-1 " >{data.title}({data.itemCards.length})</span>
                    <span className="m-2 p-2 align-middle">{display ? "⬆️" : "⬇️"}</span>
                </div>
                {/* Accordian body */}
                {display && <ItemList items={data.itemCards} />}
            </div>
        </div>
    );
};

export default Rescategory;
