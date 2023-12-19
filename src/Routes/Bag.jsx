import React from "react";
import BagSummary from "../Components/BagSummary";
import Bagdetails from "../Components/BagItem";
import { useSelector } from "react-redux";

function Bag() {
  const bagItems = useSelector((state) => state.bag);
  const items = useSelector((state) => state.items);
  const finalItems = items.filter((item) => {
    const itemsIndex = bagItems.indexOf(item.id);
    return itemsIndex >= 0;
  });
  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {finalItems.map((item) => (
              <Bagdetails key={item.id} item={item} />
            ))}
          </div>
          <BagSummary />
        </div>
      </main>
    </>
  );
}

export default Bag;
