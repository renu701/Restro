import { useEffect, useState } from "react";
import { ITEM_API } from "../utils/constants"

const useRestaurantMenu = (resId) => {

    console.log("resId", resId)

    const [restInfo , setRestInfo] = useState(null);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () =>{
        const data = await fetch(ITEM_API + resId);
        const json = await data.json();
        console.log("custom Hook",data,json)
        setRestInfo(json.data);
    }
    return restInfo;
}
export default useRestaurantMenu;