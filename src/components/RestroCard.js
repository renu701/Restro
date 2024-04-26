import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/userContext";

const RestroCard = (restObj) => {
  const { cloudinaryImageId, name, cuisines, avgRating, sla } =
    restObj.restObj.info;
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="m-4 p-4 w-[200px] rounded-lg bg-gray-100 shadow-md hover:shadow-xl">
      <img
        className="h-40 rounded-lg w-full"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <div className="container__text">
        <h3 className="font-bold py-4 text-xl">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating + " Stars"}</h4>
        <h4>{sla.slaString}</h4>
        <h4>User : {loggedInUser}</h4>
      </div>
    </div>
  );
};

export default RestroCard;
