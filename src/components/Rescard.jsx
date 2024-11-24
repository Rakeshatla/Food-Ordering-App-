import { useDispatch } from "react-redux";
import { RES_LOGO } from "../utils/const";
import { addFav, delFav } from "../utils/favoritesSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesome
import { faHeart } from "@fortawesome/free-solid-svg-icons"; // Import heart icon

const Rescard = ({ resData, displayfav = true, displaydel = false }) => {
    const { name, cuisines, avgRating, costForTwo, sla, areaName } = resData.info;
    const dispatch = useDispatch();

    const handlefav = (event, resData) => {
        event.preventDefault(); // Prevent any default behavior (like routing)
        dispatch(addFav(resData)); // Dispatch favorite action
    }
    const handledel = (resData) => {
        dispatch(delFav(resData))
    }

    return (
        <div className="relative p-6 m-4 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            {/* Heart Icon */}
            {displayfav && <FontAwesomeIcon
                icon={faHeart}
                className="absolute top-4 right-4 text-red-500 text-2xl cursor-pointer hover:border-black"
                onClick={(event) => handlefav(event, resData)} // Pass event to handlefav
            />}

            {/* Restaurant Image */}
            <img
                className="w-full h-40 object-cover rounded-md mb-4"
                src={RES_LOGO + resData.info.cloudinaryImageId}
                alt={name}
            />

            {/* Restaurant Info */}
            <h3 className="text-xl font-semibold mb-2">{name}</h3>
            {displaydel && <button className="p-2 bg-black text-white m-auto" onClick={handledel}>delete</button>}
            <h4 className="text-sm text-gray-500 mb-1">{cuisines.join(", ")}</h4>
            <h4 className="text-sm text-green-600 font-semibold mb-1">
                {avgRating} 🟢
            </h4>
            <h4 className="text-sm text-gray-700 mb-1">{costForTwo}</h4>
            <h4 className="text-sm text-gray-700">{sla.deliveryTime} minutes</h4>
            <h4 className="text-md text-gray-700">{areaName}</h4>

            {/* Add Fav Button (only if displayfav is true) */}
        </div>
    );
};

export default Rescard;
