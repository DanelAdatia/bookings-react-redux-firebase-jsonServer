import React from "react";
import Layout from "../../SharedComponents/Layout";
import SearchTrains from "./SearchTrains";
import SelectedTrainsDisplay from "./SelectedTrainsDisplay";
import TrainDetails from "./TrainDetails";

const Trains = () => {
  return (
    <Layout>
      <SearchTrains />
      <TrainDetails />
      <SelectedTrainsDisplay />
    </Layout>
  );
};

export default Trains;
