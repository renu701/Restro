import Shimmer from "./shimmer";
import { useParams } from "react-router";
// import { useState , useEffect } from "react";
// import { ITEM_API } from "../utils/constants"
import useRestaurantMenu from "./../utils/useRestaurantMenu";
import ResCategory from "./ResCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const params = useParams();
  //console.log("params.resId",params.resId)
  const restInfo = useRestaurantMenu(params.resId);

  const [showIndex, setShowIndex] = useState(0);
  const [toggle, setToggle] = useState(true);

  if (!restInfo) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage } =
    restInfo?.cards[2]?.card?.card?.info;

  const catagories =
    restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log("catagories", catagories);
  const { itemCards } =
    restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;
  console.log("restInfo", restInfo);
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg mb-2">
        {cuisines.join(" ,")} - {costForTwoMessage}
      </p>
      {catagories.map((catagory, index) => {
        return (
          <ResCategory
            key={catagory.card.card.title}
            data={catagory.card.card}
            showItem={index === showIndex && toggle ? true : false}
            setShowIndex={() => setShowIndex(index)}
            setToggle={setToggle}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
