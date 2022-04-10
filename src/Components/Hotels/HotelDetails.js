import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchHotelDetails } from "../../api/Api";
import { cityDetails, setDetails } from "../../Redux/actions/ProductActions";

const HotelDetails = () => {
  const dispatch = useDispatch();
  const [Cities, setCities] = useState([]);
  const displayCities = useSelector((state) => state.details);

  const FetchDetailsHotel = async () => {
    let details = await FetchHotelDetails();
    dispatch(setDetails(details.data));
  };

  const MapThroughCities = () => {
    Object.values(displayCities.product).map((data) => {
      setCities((Cities) => [...Cities, data.city]);
    });
  };
  useEffect(() => {
    MapThroughCities();
    dispatch(cityDetails(Cities));
  }, [Cities.length <= 0]);

  useEffect(() => {
    FetchDetailsHotel();
  }, []);

  return <Fragment></Fragment>;
};

export default HotelDetails;
