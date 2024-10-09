import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResmenu from "../utils/useResmenu";


const Resmenu = () => {
    // const [menu, setMenu] = useState(null);
    const { resId } = useParams();

    const menu = useResmenu(resId);
    
    // useEffect(() => {
    //   fetchmenu();
    // }, []);
    
    // const fetchmenu = async () => {
    //   const data = await fetch(
    //     "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId=" +
    //       resId +
    //       "&catalog_qa=undefined&submitAction=ENTER"
    //   );
    //   const json = await data.json();
    //   // console.log(json)
    //   // console.log(json.data)
    //   setMenu(json.data);
    // };
    
    if (menu === null) return <Shimmer />;
    
    const { name, cuisines, avgRating, sla,costForTwo
    } = menu.cards[2].card.card.info;
    const { itemCards } =
      menu.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
      // console.log(itemCards)
    
    return (
      <div className="container">
        {/* Restaurant Information */}
        <div className="restaurant-info">
          
          <h1>{name}</h1>
          <h3>{cuisines.join(", ")}</h3>
        </div>
  
        {/* Delivery Info */}
        <div className="delivery-info">
          <div>
            <span>{sla.deliveryTime} mins</span>
            Delivery Time
          </div>
          <div>
            <span>{avgRating} ⭐</span>
            Rating
          </div>
          <div>
            <span>{cuisines.length}</span>
            Cuisines Available
          </div>
          <div>
            <span>{costForTwo/100}</span>
            Cost For Two
          </div>
        </div>
  
        {/* Menu Section */}
        <div className="menu-section">
          <h2>Menu</h2>
          <ul className="menu-list">
            {itemCards.map((item) => (
              <li key={item.card.info.id}>
                <span>{item.card.info.name}</span>
                <span>₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export default Resmenu;
  