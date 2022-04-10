import React, { useContext, useEffect, Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { UserContext } from "../../Context/ContextFile";
import "../../assets/css/FlightDetails.css";
import { Grid } from "@material-ui/core";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import FlightClassIcon from "@mui/icons-material/FlightClass";
import moment from "moment";
import { SendFlightDetails } from "../../api/Api";

const ShowFlightSearched = () => {
  const { searchedDataFlights } = useContext(UserContext);
  const displayFlightDetails = useSelector(
    (state) => state.details.flight.data
  );

  const [searchData, setSearchData] = useState();
  const [AllData, setAllData] = useState([]);

  const handleTimeInHours = (value) => {
    return (
      <div>
        {Math.abs(moment(value[0]).diff(moment(value[1]), "days")) * 24}
      </div>
    );
  };

  const sendBookedFlights = (id) => {
    SendFlightDetails(AllData.filter((idIs) => idIs.id === id));
  };

  useEffect(() => {
    function SearchFunction() {
      searchedDataFlights.map((search) => {
        setSearchData(search);
      });
    }

    function FilterData() {
      if (displayFlightDetails) {
        setAllData(Object.values(displayFlightDetails).filter(CheckCondition));
      }
    }
    function CheckCondition(data) {
      if (searchData) {
        return (
          (data.From === searchData.From &&
            data.To === searchData.To &&
            data.Way === searchData.Way) ||
          data.Class === searchData.Class
        );
      }
    }
    SearchFunction();
    FilterData();
  });

  return (
    <Fragment>
      {AllData.map((flights, index) => {
        return (
          <div
            key={index}
            style={{ marginTop: 20, display: "flex", flexDirection: "row" }}
            className="flight-details"
          >
            <Grid
              style={{
                width: 100,
                height: 20,
                right: 100,
                color: "black",
                position: "absolute",
              }}
            >
              {flights.Way}
            </Grid>

            <div
              style={{
                flexDirection: "column",
                display: "flex",
                marginLeft: 30,
              }}
            >
              <Grid
                style={{
                  width: 100,
                  height: 20,
                  float: "left",
                  color: "black",
                }}
              >
                {flights.From}
              </Grid>
              <ArrowDownwardIcon style={{ color: "black", marginTop: 20 }} />

              <Grid
                style={{
                  width: 100,
                  height: 20,
                  float: "left",
                  color: "black",
                  marginTop: 20,
                }}
              >
                {flights.To}
              </Grid>
            </div>
            <FlightClassIcon style={{ color: "black", marginLeft: 100 }} />
            <Grid
              style={{
                height: 20,
                float: "left",
                color: "black",
                marginTop: 20,
              }}
            >
              {flights.Class}
            </Grid>
            <Grid
              style={{
                color: "black",
                marginTop: 20,
                marginLeft: 100,
                display: "flex",
                flexDirection: "row",
              }}
            >
              {handleTimeInHours(flights.value)}
              <span> - Hour Flight</span>
            </Grid>
            <Grid
              style={{
                color: "black	",
                marginTop: 20,
                marginLeft: 100,
              }}
            >
              {flights.price}
            </Grid>
            <button
              style={{
                width: 100,
                height: 50,
                marginLeft: 350,
                marginTop: 50,
                borderRadius: 22,
                cursor: "pointer",
              }}
              onClick={() => sendBookedFlights(flights.id)}
            >
              Book Flight
            </button>
          </div>
        );
      })}
    </Fragment>
  );
};

export default ShowFlightSearched;
