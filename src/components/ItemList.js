import { useDispatch } from "react-redux";
import { CDN_URL } from "./../utils/constants";
import { addItem } from "../utils/cartSlice";
const ItemList = ({ data }) => {
  const dispach = useDispatch();
  const handleAddItem = (list) => {
    dispach(addItem(list));
  };
  return (
    <div>
      {data.map((list) => (
        <div
          className="p-2 m-2 text-left mb-2 border-b-2 border-gray-200 flex justify-between"
          key={list.card.info.id}
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{list.card.info.name}</span>
              <span>
                - ₹
                {list.card.info.defaultPrice
                  ? list.card.info.defaultPrice / 100
                  : list.card.info.price / 100}
              </span>
            </div>

            <p className="text-xs">{list.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="p-2 mx-16 my-20 rounded-lg shadow-lg m-auto bg-white "
                onClick={() => handleAddItem(list)}
              >
                Add +
              </button>
            </div>
            <img
              src={CDN_URL + list.card.info.imageId}
              className="w-full h-28 bg-white"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
