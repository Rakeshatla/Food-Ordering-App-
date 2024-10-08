import Rescard from "./Rescard";
import {useState,useEffect} from "react"
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body=()=>{
    const [list,setList]=useState([]);
    const[filterList,setFilterList]=useState([]);
    const [search,setSearch]=useState("");
    // console.log(list.length)
    useEffect(()=>{
        fetchData()
    },[])
    // console.log('a')
    const fetchData = async () => {
        try {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTINGhttps://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const json = await data.json();
            // console.log(json)
            // console.log(json);
            // console.log(json?.data); 
            // console.log(json?.data?.cards);
            // console.log(json?.data?.cards?.[1]);
            // console.log(json?.data?.cards?.[1]?.card);
            // console.log(json?.data?.cards?.[1]?.card?.card);
            // console.log(json?.data?.cards?.[1]?.card?.card?.gridElements);
            // console.log(json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle);
            // console.log(json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            // console.log(json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.info?.externalRatings
            // );
    
            // Optional chaining for safe access
            // const restaurantList = json1?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info;
            const restaurantList = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
            ;
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
    
    return list.length===0?(<Shimmer/>):(
    <div className="body">
        <div className="body-btn">
          <div className="search">
            <input type="text" value={search} onChange={(e)=>{
                setSearch(e.target.value)
            }} />
            <button className="search-btn" onClick={()=>{
                const filterList=list.filter((res)=>
                    res.info.name.toLowerCase().includes(search.toLowerCase()));
                if(filterList){
                    setFilterList(filterList);
                }
                else{
                    console.log("not found");
                }
            }}>search</button>
        </div>
            <button className="btn1" onClick={()=>{
                const final =list.filter((res)=>
                    res.info.avgRating>4.3
            );
            setFilterList(final);
            }}>Top Rated Restaurant</button>
        </div>
        <div className="rcontainer">
        {filterList.map((restarunt) => (
            <Link key={restarunt.info.id}  to={"/restarunts/" + restarunt.info.id}><Rescard  resData={restarunt}/></Link>
        ))}
        </div>
{/* //can be done in another way also */}
    </div>
    )
}
// const Body=()=>{
//     return(
//     <div className="body">
//         <Rescard resData={reslist[0]}/>
//         <Rescard resData={reslist[1]}/>
//         <Rescard resData={reslist[2]}/>
//         <Rescard resData={reslist[3]}/>
// {/* //can be done in another way also */}
//     </div>
//     )
// }

export default Body;