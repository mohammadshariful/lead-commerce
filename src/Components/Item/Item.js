import React, { useContext } from "react";
import { FaTrashAlt } from "react-icons/fa";
import MyContext from "../ContextApi/ContextApi";
import "./Item.css";
const Item = ({ item }) => {
  const { deleteItems } = useContext(MyContext);
  const { phone_name, image } = item;
  return (
    <li className="list-container">
      <div className="list-img">
        <img src={image} alt="" />
      </div>
      <div>{phone_name}</div>
      <div onClick={() => deleteItems(item)}>
        <FaTrashAlt />
      </div>
    </li>
  );
};

export default Item;
