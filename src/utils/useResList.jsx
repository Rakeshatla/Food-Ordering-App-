import { useState, useEffect } from "react";
const useResList = () => {
    const [list, setList] = useState([]);
    const [filterList, setFilterList] = useState([]);
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        try {
            const data = await fetch(import.meta.env.VITE_SWIGGY_API);
            const json = await data.json();
            const restaurantList = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
                ;
            // console.log(restaurantList)
            // console.log(restaurantList)


            if (restaurantList) {
                setList(restaurantList);
                setFilterList(restaurantList); // Only set list if restaurantList is valid
            } else {
                console.error("Could not find the restaurants data.");
            }
        } catch (error) {
            console.error("Failed to fetch data:", error);
        }
    };
    return [list, filterList, setFilterList];
}
export default useResList;