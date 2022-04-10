import React, {  useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import PropTypes from "prop-types";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import Layout from "../../SharedComponents/Layout";
import { SendBookedHotels } from "../../api/Api";

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon />,
    label: "Very Dissatisfied",
  },
  2: {
    icon: <SentimentDissatisfiedIcon />,
    label: "Dissatisfied",
  },
  3: {
    icon: <SentimentSatisfiedIcon />,
    label: "Neutral",
  },
  4: {
    icon: <SentimentSatisfiedAltIcon />,
    label: "Satisfied",
  },
  5: {
    icon: <SentimentVerySatisfiedIcon />,
    label: "Very Satisfied",
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

const SelectedHotelDisplay = () => {
  const { id } = useParams();
  const displayAllAllData = useSelector((state) => state);
  console.log(displayAllAllData, "displayAlldata");
  const [AllData, setAllData] = useState([]);

  const handleHotelBook = (e) => {
    e.preventDefault();
    if (AllData.id === id) {
      SendBookedHotels(AllData);
    }
  };

  function displayData() {
    Object.values(displayAllAllData.details.product).map((data) => {
      if (data.id === id) {
        console.log(data);
        setAllData(data);
      }
    });
  }

  useEffect(() => {
    displayData();
  });

  return (
    <Layout>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
          <Grid style={{ padding: "30px" }} container spacing={1}>
            <div>
              <Card
                style={{
                  height: 400,
                  width: 500,
                }}
              >
                <CardHeader
                  title={
                    <span>
                      Name: <b>{AllData.name}</b>
                    </span>
                  }
                  subheader={
                    <span>
                      <b>
                        {AllData.city}, {AllData.country}
                      </b>
                    </span>
                  }
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Date End: {AllData.date_end}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Date Start {AllData.date_start}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  Price: ${AllData.price}
                </CardActions>
                <CardActions disableSpacing>{AllData.description}</CardActions>
                <Typography component="legend">Stars</Typography>
                <Rating name="Rating" value={parseInt(AllData.stars)} />
                <Typography component="legend">Rating</Typography>
                <Rating
                  name="Rating"
                  value={parseInt(AllData.rating)}
                  IconContainerComponent={IconContainer}
                />
              </Card>
              <Button onClick={handleHotelBook}>Book Hotel</Button>
            </div>
          </Grid>
        </Grid>
        <Grid item xs={8}>
          <img
            style={{ width: 630, height: 500 }}
            src={AllData.images}
            alt="Hotelimage"
          />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default SelectedHotelDisplay;
