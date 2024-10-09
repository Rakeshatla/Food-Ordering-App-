import Rescard from "./Rescard";
import {useState} from "react"
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useResList from "../utils/useResList";

const Body=()=>{
    const [search,setSearch]=useState("");
    const [list,filterList,setFilterList]=useResList();
    
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
            <div>
                <button className="btn1" onClick={()=>{
                    const final =list.filter((res)=>res.info.avgRating>4.1);
                setFilterList(final);}}>Top Rated Restaurant</button>
            </div>
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