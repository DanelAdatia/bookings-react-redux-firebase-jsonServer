import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { FetchTrainDetails } from "../../api/Api";
import { setTrainDetails } from "../../Redux/actions/ProductActions";

const TrainDetails = () => {
  const dispatch = useDispatch();
  const TrainDetail = async () => {
    let details = await FetchTrainDetails();
    dispatch(setTrainDetails(details));
  };

  useEffect(() => {
    TrainDetail();
  }, []);
  return <Fragment></Fragment>;
};

export default TrainDetails;
