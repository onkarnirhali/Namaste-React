import { IMG_URL } from "../utils/const";

const RestaurantCard = (props) => {
    const { resData } = props;
    // console.log(props);
    const { name, cuisines, avgRating, costForTwo, deliveryTime } = resData;
    
    return(<div className='restaurant-card' style={{backgroundColor:"#f0f0f0", padding:"20px", borderRadius:"10px"}}>
      <h2>{name}</h2>
      <img className='restaurant-logo' src={IMG_URL}></img>
      {/* <h3>{resList.cuisines.join(",")}</h3> */}
      <h4>{avgRating} Ratings</h4>
      <h4>{costForTwo / 100}</h4>
      <h4>30 mins</h4>
    </div>
  )}

export default RestaurantCard;