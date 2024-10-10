import { RES_LOGO } from "../utils/const";

const Rescard = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, costForTwo, sla, areaName
    } = resData.info;

    return (
        <div className="p-6 m-4 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            {/* Restaurant Image */}
            <img
                className="w-full h-40 object-cover rounded-md mb-4"
                src={RES_LOGO + resData.info.cloudinaryImageId}
                alt={name}
            />

            {/* Restaurant Info */}
            <h3 className="text-xl font-semibold mb-2">{name}</h3>
            <h4 className="text-sm text-gray-500 mb-1">{cuisines.join(", ")}</h4>
            <h4 className="text-sm text-green-600 font-semibold mb-1">
                {avgRating} 🟢
            </h4>
            <h4 className="text-sm text-gray-700 mb-1">{costForTwo}</h4>
            <h4 className="text-sm text-gray-700">{sla.deliveryTime} minutes</h4>
            <h4 className="text-md text-gray-700">{areaName}</h4>
        </div>
    );
};

export default Rescard;
