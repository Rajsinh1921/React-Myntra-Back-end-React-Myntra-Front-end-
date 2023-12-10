import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../Store/itemsSlice";
import { fetchStatusActions } from "../Store/fetchStatusSlice";

function FeatchItems() {
  const featchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (featchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchStatusActions.markFetchingStarted());
    fetch("https://react-myntra-back-end.onrender.com/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.markFetchingFinished());
        dispatch(itemsActions.addInitialItems(items[0]));
      });

    return () => {
      controller.abort();
    };
  }, []);
  return <></>;
}

export default FeatchItems;
