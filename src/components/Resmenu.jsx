import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResmenu from "../utils/useResmenu";
import Rescategory from "./Rescategory";
import { useState } from "react";

const Resmenu = () => {
  const { resId } = useParams();
  const menu = useResmenu(resId);
  const [showindex, setShowindex] = useState(null);

  if (menu === null) return <Shimmer />;

  const { name, cuisines, avgRating, sla, costForTwo, areaName } = menu.cards[2].card.card.info;
  const category = menu.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
    (cat) => cat.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  // console.log(category);

  return (
    <div className="max-w-5xl mx-auto p-4">
      {/* Restaurant Information */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{name}</h1>
        <h3 className="text-gray-600">{cuisines.join(", ")}</h3>
      </div>

      {/* Delivery Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <span className="text-xl font-semibold">{sla.deliveryTime} mins</span>
          <p className="text-sm text-gray-500">Delivery Time</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <span className="text-xl font-semibold">{avgRating} ⭐</span>
          <p className="text-sm text-gray-500">Rating</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <span className="text-xl font-semibold">{cuisines.length}</span>
          <p className="text-sm text-gray-500">Cuisines Available</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <span className="text-xl font-semibold">₹{costForTwo / 100}</span>
          <p className="text-sm text-gray-500">Cost For Two</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <span className="text-xl font-semibold">{areaName} </span>
          <p className="text-sm text-gray-500">Area Name</p>
        </div>
      </div>

      {/* Menu Section */}
      <div>
        {category.map((item, index) => (
          <Rescategory key={item.card.card.title}
            data={item.card.card}
            display={index === showindex ? true : false}
            setShowindex={() => setShowindex(index)} />
        ))}
      </div>
    </div>
  );
};

export default Resmenu;
