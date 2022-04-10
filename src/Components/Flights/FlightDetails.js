import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { FetchFlightDetails } from "../../api/Api";
import { setFlightDetails } from "../../Redux/actions/ProductActions";


const FlightDetails = () => {
  const dispatch = useDispatch();
  const FlightDetail = async () => {
    let details = await FetchFlightDetails();
    dispatch(setFlightDetails(details));
  };

  useEffect(() => {
    FlightDetail();
  });
  return <Fragment></Fragment>;
};

export default FlightDetails;
