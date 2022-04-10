import React, { useContext, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Card, CardHeader, Grid } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { sendTrainDetails } from "../../api/Api";
import { UserContext } from "../../Context/ContextFile";

const SelectedTrainsDisplay = () => {
  const trains = useSelector((state) => state.details.train.data);
  console.log(trains);
  const [AllData, setAllData] = useState([]);
  const [searchData, setSearchData] = useState();

  const { searchedTrains } = useContext(UserContext);

  const sendBookedTrains = (id) => {
    sendTrainDetails(AllData.filter((idIs) => idIs.id === id));
  };

  useEffect(() => {
    function SearchFunction() {
      searchedTrains.map((search) => {
        setSearchData(search);
      });
    }

    function FilterData() {
      if (trains) {
        setAllData(Object.values(trains).filter(CheckCondition));
      }
    }
    function CheckCondition(data) {
      if (searchData) {
        return data.From === searchData.From || data.To === searchData.To;
      }
    }
    SearchFunction();
    FilterData();
    
  });

  return (
    <div>
      <Grid style={{ padding: "30px" }} container spacing={1}>
        {AllData.map((trains, n) => {
          return (
            <div key={n}>
              <Card
                style={{
                  border: "2px solid pink",
                  margin: "25px",
                  height: 300,
                  width: 300,
                }}
              >
                <CardHeader
                  title={
                    <span>
                      <b>{trains.From}</b>
                    </span>
                  }
                  subheader={
                    <span>
                      <b>{trains.To}</b>
                    </span>
                  }
                />
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
                    {trains.From}
                  </Grid>
                  <ArrowDownwardIcon
                    style={{ color: "black", marginTop: 20 }}
                  />
                  <Grid
                    style={{
                      width: 100,
                      height: 20,
                      float: "left",
                      color: "black",
                      marginTop: 20,
                    }}
                  >
                    {trains.To}
                  </Grid>
                  <Grid
                    style={{
                      color: "black	",
                      marginTop: 20,
                      marginLeft: 100,
                    }}
                  >
                    {trains.price}
                  </Grid>
                </div>
                <button
                  style={{
                    width: 100,
                    height: 50,
                    float: "right",
                    borderRadius: 22,
                    cursor: "pointer",
                    backgroundColor: "red",
                  }}
                  onClick={() => sendBookedTrains(trains.id)}
                >
                  Book Train
                </button>
              </Card>
            </div>
          );
        })}
      </Grid>
    </div>
  );
};

export default SelectedTrainsDisplay;
