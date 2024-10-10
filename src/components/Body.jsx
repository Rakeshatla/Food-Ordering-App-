import Rescard from "./Rescard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useResList from "../utils/useResList";
import useOnline from "../utils/useOnline";

const Body = () => {
    const [search, setSearch] = useState("");
    const [list, filterList, setFilterList] = useResList();
    const ostatus = useOnline();
    if (ostatus === false) return (
        <h1>
            you are offline
        </h1>
    )
    return list.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="p-4">
            <div className="flex flex-col md:flex-row justify-between mb-4">
                {/* Search Bar */}
                <div className="flex space-x-4 mb-4 md:mb-0">
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="p-2 border border-gray-300 rounded-md"
                        placeholder="Search for a restaurant"
                    />
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                        onClick={() => {
                            const filterList = list.filter((res) =>
                                res.info.name.toLowerCase().includes(search.toLowerCase())
                            );
                            if (filterList) {
                                setFilterList(filterList);
                            } else {
                                console.log("not found");
                            }
                        }}
                    >
                        Search
                    </button>
                </div>

                {/* Top Rated Button */}
                <button
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
                    onClick={() => {
                        const final = list.filter((res) => res.info.avgRating > 4.1);
                        setFilterList(final);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>

            {/* Restaurant List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filterList.map((restaurant) => (
                    <Link
                        key={restaurant.info.id}
                        to={"/restaurants/" + restaurant.info.id}
                    >
                        <Rescard resData={restaurant} />
                    </Link>
                ))}
            </div>

        </div>
    );
};

export default Body;
