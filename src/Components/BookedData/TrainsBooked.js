import React, { useState, useEffect } from "react";
import { DeleteTrainBooked, ShowTrainDetailsBooked } from "../../api/Api";
import { Button, Card, CardHeader, Grid, Typography } from "@mui/material";


const TrainsBooked = () => {
  const [TrainData, setTrainData] = useState([]);
  const [count, setCount] = useState(0);
  const FetchTrainData = async () => {
    let result = await ShowTrainDetailsBooked();
    setTrainData(result.data);
  };
  const handleTrainRemoveBooking = (id) => {
    setCount(count+1)
    DeleteTrainBooked(id);
  };

  useEffect(() => {
    FetchTrainData();
  },[count]);

  return (
    <div>
      Trains Booked:-
      <Grid style={{ padding: "30px" }} container spacing={1}>
        {TrainData.map((data) => {
          return (
            <div>
              <Card
                style={{
                  border: "2px solid pink",
                  margin: "25px",
                  height: 150,
                  width: 300,
                }}
              >
                <CardHeader
                  title={
                    <span>
                      <b>{data[0].From}</b>
                    </span>
                  }
                  subheader={
                    <span>
                      <b>{data[0].To}</b>
                    </span>
                  }
                />
                <Typography>{data[0].price}</Typography>

                <Button
                  variant="contained"
                  onClick={() => handleTrainRemoveBooking(data.id)}
                >
                  Remove Booking
                </Button>
              </Card>
            </div>
          );
        })}
      </Grid>
    </div>
  );
};

export default TrainsBooked;
