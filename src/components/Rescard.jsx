import { RES_LOGO } from "../utils/const";


const Rescard=(props)=>{
    const {resData}=props;
    const {name,cuisines,avgRating,costForTwo,sla}=resData.info;
    return(
    <div className="res-card">
        <img  className="rlogo" src={RES_LOGO+resData.info.cloudinaryImageId}></img>
        <h3>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating}🟢</h4>
        <h4> {costForTwo}</h4>
        <h4>{sla.deliveryTime}minutes</h4>
    </div>
    )
}
export default Rescard;