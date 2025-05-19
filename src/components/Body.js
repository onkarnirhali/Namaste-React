import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import resList from "../utils/mockData";

const Body = () => {
  const[listofRes, setListOfRecs] = useState(resList);
  useEffect(()=>{
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.594566&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
  }

  return ( 
      <div className='body'>
        <div>
          <div className='search-container'>
            <button className='topRated-bth' onClick={() => {
              const topRated = listofRes.filter((restaurant) => restaurant.avgRating > 4);
              setListOfRecs(topRated);
            }} >Top Rated Only</button>
          </div>
          <div className='restaurant-container'>
            {listofRes.map((restaurant) => {
              return <RestaurantCard key={restaurant.id} resData={restaurant} />
            }
            )}
          </div>
        </div>

      </div>
  )
}
    


export default Body;