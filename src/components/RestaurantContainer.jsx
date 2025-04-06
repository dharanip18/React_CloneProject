import RestaurantCard from "../components/RestaurantCard";
// import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";



const RestaurantContainer = () =>{
  const [restaurantList,setRestaurantList]= useState([]);
  const [filterRestaurantList,setfilterRestaurantList]= useState([]);
  const [searchText,setSearchText]=useState("");
  useEffect(()=>{
    console.log("useEffect is called");
    fetchData();
  },[])

  const fetchData = async () =>{
    const data= await fetch("http://localhost:3000/api/data/");
    const json =await data.json();
    console.log(json);
    setRestaurantList(json);
    setfilterRestaurantList(json);
  }

  function filterRating(){
    let filteredList = restaurantList.filter((res)=>res.info.rating.rating_text>4.3);
    console.log(filteredList);
    setfilterRestaurantList(filteredList);
  }
  function filterOffer(){
    let filteredList= restaurantList.filter((res)=>res.gold?.offerValue);
    console.log(filteredList);
    setfilterRestaurantList(filteredList);
  }
  function allRestaurant(){
    let allList = restaurantList
    setfilterRestaurantList(allList);
  }
  function searchFilter(){
    let searchList=restaurantList.filter((res) => (res.info.name).toLowerCase().includes(searchText))
    setfilterRestaurantList(searchList);
  }

  return restaurantList.length === 0 ? <Shimmer/> :
     ( <div className="Body">
        <div className="filter">
          <div className="search">
            <input value={searchText} onChange={(e)=> setSearchText(e.target.value)}/>
            <button value="" onClick={searchFilter}>search</button>
          </div>
            <button className="btn" onClick={allRestaurant}>All</button>
             <button className="filter-btn btn" onClick={filterRating} >Top Rated</button>
             <button className="btn" onClick={filterOffer} >Offer</button>
             {/* <button className="btn" onClick={filterOutdoor} >Outdoor</button> */}
        </div>
        <div className="restaurantContainer">
          {filterRestaurantList.map((res) =>{
            return(<RestaurantCard key={res.info.resId} {...res}/>)
          })}
        </div>
      </div>
    )
}
export default RestaurantContainer;