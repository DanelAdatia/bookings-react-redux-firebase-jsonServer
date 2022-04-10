import React, { Fragment } from "react";
import BookedData from "./BookedData";
import FlightBook from "./FlightBook";
import TrainsBooked from "./TrainsBooked";

const AllBookedData = () => {
  return (
    <Fragment>
      <BookedData />
      <FlightBook />
      <TrainsBooked /> 
    </Fragment>
  );
};

export default AllBookedData;
