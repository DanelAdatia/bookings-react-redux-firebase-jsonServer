import {
  FormControl,
  FormGroup,
  MenuItem,
  Select,
  Button,
} from "@mui/material";
import FlightIcon from "@mui/icons-material/Flight";
import FlightClassIcon from "@mui/icons-material/FlightClass";
import { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import DateRangePicker from "@mui/lab/DateRangePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import Box from "@mui/material/Box";
import React from "react";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { UserContext } from "../../Context/ContextFile";
import moment from "moment";

const SearchFlights = () => {
  const [formValue, setFormValues] = useState({
    Way: "Round-Trip",
    Class: "Economy",
    City: "Hong Kong",
    Airport: "Tokyo",
  });

  const [value, setValue] = useState([null, null]);
  const { setSearchedDataFlights } = useContext(UserContext);

  const handleChange = (event) => {
    setFormValues({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  let dateToHours =
    Math.abs(moment(value[0]).diff(moment(value[1]), "days")) * 24;

  const handleSearchFlights = (event) => {
    setSearchedDataFlights([
      {
        ...formValue,
        dateToHours,
      },
    ]);
  };

  return (
    <div className="Search-bar">
      <div className="Search-bar-internal">
        <FormGroup style={{ flexDirection: "row" }}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateRangePicker
              startText="Check-in"
              endText="Check-out"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(startProps, endProps) => (
                <React.Fragment>
                  <TextField
                    style={{ marginRight: 4, width: 150 }}
                    {...startProps}
                  />
                  <Box style={{ color: "black" }}> to </Box>
                  <TextField
                    style={{ marginLeft: 4, width: 150 }}
                    {...endProps}
                  />
                </React.Fragment>
              )}
            />
          </LocalizationProvider>
          <FormControl>
            <Select
              style={{
                minWidth: 50,
                marginRight: 12,
                marginLeft: 12,
                height: 55,
              }}
              value={formValue.Way}
              onChange={handleChange}
              name="Way"
            >
              <MenuItem value={`One-Way`}>
                {" "}
                <FlightIcon style={{ color: "black" }} />
                One-Way
              </MenuItem>
              <MenuItem value={`Round-Trip`}>
                {" "}
                <FlightIcon style={{ color: "black" }} />
                Round-Trip
              </MenuItem>
              <MenuItem value={`Multi-City`}>
                {" "}
                <FlightIcon style={{ color: "black" }} />
                Multi-City
              </MenuItem>
            </Select>
          </FormControl>

          <FormControl>
            <Select
              style={{
                minWidth: 50,
                marginRight: 12,
                marginLeft: 12,
                height: 55,
              }}
              value={formValue.Class}
              onChange={handleChange}
              name="Class"
            >
              <MenuItem value={`Economy`}>
                <FlightClassIcon style={{ color: "black" }} />
                Economy
              </MenuItem>
              <MenuItem value={`Economy/ Premium Economy`}>
                <FlightClassIcon style={{ color: "black" }} />
                Economy/ Premium Economy
              </MenuItem>
              <MenuItem value={`Premium Economy`}>
                <FlightClassIcon style={{ color: "black" }} /> Premium Economy
              </MenuItem>
              <MenuItem value={`Business/ First`}>
                {" "}
                <FlightClassIcon style={{ color: "black" }} />
                Business/ First
              </MenuItem>
              <MenuItem value={`Business`}>
                {" "}
                <FlightClassIcon style={{ color: "black" }} />
                Business
              </MenuItem>
              <MenuItem value={`First`}>
                {" "}
                <FlightClassIcon style={{ color: "black" }} />
                First
              </MenuItem>
            </Select>
          </FormControl>

          <FormControl>
            <Select
              style={{
                minWidth: 50,
                marginRight: 12,
                marginLeft: 12,
                height: 55,
              }}
              value={formValue.City}
              onChange={handleChange}
              name="City"
            >
              <MenuItem value={`Hong Kong`}>Hong Kong</MenuItem>
              <MenuItem value={`Tokyo`}> Tokyo</MenuItem>
              <MenuItem value={`London`}>London</MenuItem>
              <MenuItem value={`Paris`}> Paris</MenuItem>
            </Select>
            <label style={{ marginTop: 20, marginLeft: 25 }}>From</label>
          </FormControl>

          <FormControl>
            <Select
              style={{
                minWidth: 50,
                marginRight: 12,
                marginLeft: 12,
                height: 55,
              }}
              value={formValue.Airport}
              onChange={handleChange}
              name="Airport"
            >
              <MenuItem value={`Hong Kong`}>Hong Kong</MenuItem>
              <MenuItem value={`Tokyo`}> Tokyo</MenuItem>
              <MenuItem value={`London`}>London</MenuItem>
              <MenuItem value={`Paris`}> Paris</MenuItem>
            </Select>
            <label style={{ marginTop: 20, marginLeft: 25 }}>To</label>
          </FormControl>
          <Button
            style={{
              border: "2px solid black",
              borderRadius: "12px",
              width: 90,
              height: 55,
            }}
            onClick={handleSearchFlights}
          >
            Search
          </Button>
        </FormGroup>
      </div>
    </div>
  );
};

export default SearchFlights;
