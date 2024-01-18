import Shimmer from "./shimmer";
import { useParams } from "react-router";
// import { useState , useEffect } from "react";
// import { ITEM_API } from "../utils/constants"
import useRestaurantMenu from "./../utils/useRestaurantMenu"


const RestaurantMenu = () => {
    const params = useParams();
 //console.log("params.resId",params.resId)
    const restInfo = useRestaurantMenu(params.resId);
   

    // const [restInfo,setRestInfo] = useState(null);
    // const params = useParams();
    // console.log(params);

    // useEffect(()=> {
    //     fetchMenu();
    // },[]);

    // const fetchMenu = async () => {
    //     const data = await fetch(ITEM_API+params.resId)
    //     const json = await data.json();
    //     console.log(json)
    //     setRestInfo(json.data);
    // };

    if( !restInfo ) {
        return <Shimmer />
    }

    const {name,cuisines,costForTwoMessage} = restInfo?.cards[0]?.card?.card?.info;

    const {itemCards} = restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
   console.log("restInfo",restInfo)
    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(" ,")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item)=> 
                    (<li key={item.card.info.id}>{item.card.info.name} - {"Rs."} {item.card.info.price/100 || item.card.info.defaultPrice/100}</li>)
                )}
            </ul>
        </div>
    )
};

export default RestaurantMenu;