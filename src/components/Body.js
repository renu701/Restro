
import RestroCard from "./RestroCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {
    const [restroLists,setRestroLists] = useState([]);
    const [filteredRestoList,setFilteredRestoList] = useState([]);

    const [searchText, setSearchText] = useState("");

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async() =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log("json",json)
        setRestroLists(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestoList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

console.log("restro",restroLists)

    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false)
        return (
            <h1>Looks like you are offline, Please check your internet Connection !!!!</h1>
        )

    return restroLists.length === 0 ? <Shimmer /> : (
        <div className="body-container">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                     const restroFilteredList = restroLists.filter(
                        (rest) => rest.info.avgRating > 4
                        );
                        setFilteredRestoList(restroFilteredList);

                }}>Top Restaurant</button>

                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }} />
                    <button className="search-btn" onClick={() => {
                        const filterRestroList = restroLists.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        )

                        setFilteredRestoList(filterRestroList);
                    }}>Search</button>
                </div>
            </div>
            <div className="restro-container">
                {filteredRestoList.map((restrurant) => {
                return <Link key={restrurant.info.id} to={"/restaurants/" + restrurant.info.id}><RestroCard restObj={restrurant} /></Link>
                })}
            </div>
        </div>
    )
}

export default Body;