import RestroCard from "./RestroCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

const Body = () => {
  const [restroLists, setRestroLists] = useState([]);
  const [filteredRestoList, setFilteredRestoList] = useState([]);

  const [searchText, setSearchText] = useState("");

  const { loggedInUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log("json", json);
    setRestroLists(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestoList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  console.log("restro", restroLists, filteredRestoList);

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline, Please check your internet Connection !!!!
      </h1>
    );

  return restroLists.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="filter flex">
        <div className="px-4 py-2 m-4 flex items-center">
          <button
            className="p-4 bg-gray-100 rounded-lg"
            onClick={() => {
              const restroFilteredList = restroLists.filter(
                (rest) => rest.info.avgRating > 4
              );
              setFilteredRestoList(restroFilteredList);
            }}
          >
            Top Restaurant
          </button>
        </div>

        <div className="search p-4 m-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 m-4 bg-green-300 rounded-lg"
            onClick={() => {
              const filterRestroList = restroLists.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestoList(filterRestroList);
            }}
          >
            Search
          </button>
          <label className=" mr-2">User :</label>
          <input
            className="border border-black p-1"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestoList.map((restrurant) => {
          return (
            <Link
              key={restrurant.info.id}
              to={"/restaurants/" + restrurant.info.id}
            >
              <RestroCard restObj={restrurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
