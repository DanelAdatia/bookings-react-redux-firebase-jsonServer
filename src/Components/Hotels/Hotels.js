import HotelDetails from "./HotelDetails";
import Layout from "../../SharedComponents/Layout";
import Search from "./Search";
import ShowHotelDetails from "./ShowHotelDetails";

const Hotels = () => {
  return (
    <Layout>
      <Search />
      <HotelDetails />
      <ShowHotelDetails />
    </Layout>
  );
};

export default Hotels;
