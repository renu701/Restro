import { useState } from "react";
import ItemList from "./ItemList";

const ResCategory = ({ data, showItem, setShowIndex, setToggle }) => {
  const handleClick = () => {
    setToggle(!showItem);
    setShowIndex();
  };
  const restaurantCategories = data;
  return (
    <div className="w-6/12 m-auto bg-gray-100 shadow-lg mb-4 p-4">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold">
          {restaurantCategories.title} ({restaurantCategories.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      <div>
        {showItem && (
          <ItemList
            key={restaurantCategories.title}
            data={restaurantCategories.itemCards}
          />
        )}
      </div>
    </div>
  );
};

export default ResCategory;
