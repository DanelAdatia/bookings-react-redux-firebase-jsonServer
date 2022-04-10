import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import { Fragment, useEffect, useContext, useState } from "react";
import { useSelector } from "react-redux";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import PropTypes from "prop-types";
import { UserContext } from "../../Context/ContextFile";
import "../../assets/css/Search.css";
import { useNavigate } from "react-router-dom";

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

const ShowHotelDetails = () => {
  const displayAllHotelData = useSelector((state) => state);

  const [searchCity, setSearchedCity] = useState("");
  const [searchStar, setSearchedStar] = useState();
  const [AllData, setAllData] = useState([]);

  const { searchedData } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    function SearchFunction() {
      searchedData.map((search) => {
        setSearchedCity(search.city);
        setSearchedStar(search.stars);
      });
    }

    function FilterData() {
      setAllData(
        Object.values(displayAllHotelData.details.product).filter(
          CheckCondition
        )
      );
    }
    function CheckCondition(data) {
      return data.city === searchCity || data.star === searchStar;
    }
    SearchFunction();
    FilterData();
  });

  const NavigateToShowHotelDetails = (hotelData) => {
    navigate(`/selectedhotel/${hotelData.id}`);
  };

  return (
    <Fragment>
      <Grid style={{ padding: "30px" }} container spacing={1}>
        {AllData.map((hotelData, n) => {
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

                <button
                  onClick={() => NavigateToShowHotelDetails(hotelData)}
                  className="HotelBook"
                >
                  Show Details
                </button>
              </Card>
            </div>
          );
        })}
      </Grid>
    </Fragment>
  );
};

export default ShowHotelDetails;
