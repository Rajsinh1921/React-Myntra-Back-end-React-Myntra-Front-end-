import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../Store/Bag";
import { GrAddCircle } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";

function HomeItem({ item }) {
  const dispatchItem = useDispatch();
  const bagItems = useSelector((store) => store.bag);
  const elementFound = bagItems.indexOf(item.id) >= 0;
  const handleAddToBag = () => {
    dispatchItem(bagActions.addTObag(item.id));
  };
  const handleRemove = () => {
    dispatchItem(bagActions.removeFromBag(item.id));
  };

  return (
    <>
      <div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">CAD {item.current_price}</span>
          <span className="original-price">CAD {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>
        {elementFound ? (
          <button
            type="button"
            className="btn-add-bag btn btn-danger"
            onClick={handleRemove}
          >
            <AiFillDelete />
            Remove
          </button>
        ) : (
          <button
            type="button"
            className="btn-add-bag btn btn-success"
            onClick={handleAddToBag}
          >
            <GrAddCircle /> Add to bag
          </button>
        )}
      </div>
    </>
  );
}

export default HomeItem;
