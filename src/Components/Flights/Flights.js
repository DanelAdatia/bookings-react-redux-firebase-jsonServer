import React from "react";
import Layout from "../../SharedComponents/Layout";
import FlightDetails from "./FlightDetails";
import SearchFlights from "./SearchFlights";
import ShowFlightSearched from "./ShowFlightSearched";

const Flights = () => {
  return (
    <Layout>
      <SearchFlights />
      <ShowFlightSearched/>
      <FlightDetails /> 
    </Layout>
  );
};

export default Flights;
