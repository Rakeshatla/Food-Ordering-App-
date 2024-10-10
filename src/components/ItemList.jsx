import { RES_LOGO } from "../utils/const";

const ItemList = ({ items }) => {
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
                            <p className="text-xs text-gray-600 mt-2 max-w-md">
                                {item.card.info.description}
                            </p>
                        </div>
                        {/* Right side with image */}
                        <div className="flex-shrink-0">
                            <img className="w-36 h-36 object-cover rounded-lg" src={RES_LOGO + item.card.info.imageId} alt={item.card.info.name} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;
