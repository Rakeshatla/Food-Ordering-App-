import React from 'react';
import { useSelector } from "react-redux";
import Rescard from "./Rescard";

const Favorites = () => {
    const favitems = useSelector((store) => store.favorites.items);

    // If favitems is an array, map over it to render each Rescard
    return (
        <div>
            <h1 className="text-center font-bold m-2 p-2">Favorites</h1>
            <div className="flex flex-wrap justify-center ">
                {favitems.length > 0 ? (
                    favitems.map((resData, index) => (
                        <Rescard key={index} resData={resData} displayfav={false} displaydel={true} />
                    ))
                ) : (
                    <p>No favorite restaurants added yet.</p>
                )}
            </div>
        </div>
    );
};

export default Favorites;
