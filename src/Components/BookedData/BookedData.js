import React, { useEffect, useState } from "react";
import { DeleteBookedData, ShowBookedData } from "../../api/Api";
import Layout from "../../SharedComponents/Layout";
import {
  Button,
  Card,
  CardHeader,
  Grid,
  Rating,
  Typography,
} from "@mui/material";

const BookedData = () => {
  const [AllData, setAllData] = useState([]);
  const [count, setCount] = useState(0);

  const FetchData = async () => {
    let result = await ShowBookedData();
    setAllData(result.data);
  };

  const handleDeleteBooking = (id) => {
    setCount(count + 1);
    DeleteBookedData(id);
  };

  useEffect(() => {
    FetchData();
  }, [count]);

  return (
    <Layout>
      <div>
        {" "}
        Booked Hotel:-
        <Grid style={{ padding: "30px" }} container spacing={1}>
          {AllData.map((hotelData, n) => {
            return (
              <div key={n}>
                <Card
                  style={{
                    border: "2px solid pink",
                    margin: "25px",
                    height: 200,
                    width: 300,
                  }}
                >
                  <CardHeader
                    title={
                      <span>
                        Name: <b>{hotelData.name}</b>
                      </span>
                    }
                    subheader={
                      <span>
                        <b>
                          {hotelData.city}, {hotelData.country}
                        </b>
                      </span>
                    }
                  />

                  <Typography component="legend">Stars</Typography>
                  <Rating name="Rating" value={hotelData.stars} />
                  <Button
                    variant="contained"
                    onClick={() => handleDeleteBooking(hotelData.id)}
                  >
                    Remove Booking
                  </Button>
                </Card>
              </div>
            );
          })}
        </Grid>
      </div>
    </Layout>
  );
};

export default BookedData;
