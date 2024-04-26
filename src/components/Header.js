import { Logo_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("LogIn");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  // subscribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items);
  //   console.log(cartItems);

  return (
    <div className="flex justify-between bg-green-100 shadow-lg mb-2">
      <div className="logo-container">
        <img className="w-28" src={Logo_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold text-lg">
            <Link to="/cart">Cart - ({cartItems.length} items)</Link>
          </li>
          <button
            className="login"
            onClick={() =>
              btnNameReact === "LogIn"
                ? setBtnNameReact("LogOut")
                : setBtnNameReact("LogIn")
            }
          >
            {btnNameReact}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
