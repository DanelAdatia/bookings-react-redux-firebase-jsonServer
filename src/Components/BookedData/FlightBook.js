import React, { useEffect, useState } from "react";
import { DeleteFlightBookedData, ShowFlightData } from "../../api/Api";
import { Button, Card, CardHeader, Grid, Typography } from "@mui/material";

const FlightBook = () => {
  const [FlightData, setFlightData] = useState([]);
  const [count, setCount] = useState(0);
  const FetchFlightData = async () => {
    let result = await ShowFlightData();
    setFlightData(result.data);
  };

  const handleFlightRemoveBooking = (id) => {
    setCount(count + 1);
    DeleteFlightBookedData(id);
  };

  useEffect(() => {
    FetchFlightData();
  }, [count]);

  return (
    <div>
      Flights Booked
      <Grid style={{ padding: "30px" }} container spacing={1}>
        {FlightData.map((data) => {
          console.log(data[0].Way);
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
                      <b>{data[0].Class}</b>
                    </span>
                  }
                  subheader={
                    <span>
                      <b>{data[0].Way}</b>
                    </span>
                  }
                />
                <Typography>{data[0].price}</Typography>

                <Button
                  variant="contained"
                  onClick={() => handleFlightRemoveBooking(data.id)}
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

export default FlightBook;
