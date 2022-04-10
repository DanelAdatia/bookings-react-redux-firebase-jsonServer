import React, { useContext, useState } from "react";
import "../../assets/css/Search.css";
import {
  FormControl,
  FormGroup,
  MenuItem,
  Select,
  Button,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import DateRangePicker from "@mui/lab/DateRangePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { UserContext } from "../../Context/ContextFile";
import moment from "moment";
import Box from "@mui/material/Box";

const SearchTrains = () => {
  const [formValue, setFormValues] = useState({
    From: "Hong Kong",
    To: "Tokyo",
  });
  const [value, setValue] = useState([null, null]);
  const { setSearchedTrains } = useContext(UserContext);

  let dateToHours =
    Math.abs(moment(value[0]).diff(moment(value[1]), "days")) * 24;

  const handleTrainsSearch = () => {
    setSearchedTrains([
      {
        ...formValue,
        dateToHours,
      },
    ]);
  };

  const handleChange = (event) => {
    setFormValues({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div>
      <div className="Search-bar">
        <div className="Search-bar-internal">
          <FormGroup style={{ flexDirection: "row" }}>
            <FormControl>
              <Select
                style={{
                  minWidth: 50,
                  marginRight: 12,
                  marginLeft: 12,
                  height: 55,
                }}
                value={formValue.From}
                onChange={handleChange}
                name="From"
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
                value={formValue.To}
                onChange={handleChange}
                name="To"
              >
                <MenuItem value={`Hong Kong`}>Hong Kong</MenuItem>
                <MenuItem value={`Tokyo`}> Tokyo</MenuItem>
                <MenuItem value={`London`}>London</MenuItem>
                <MenuItem value={`Paris`}> Paris</MenuItem>
              </Select>
              <label style={{ marginTop: 20, marginLeft: 25 }}>To</label>
            </FormControl>

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
                    <TextField style={{ marginRight: 4 }} {...startProps} />
                    <Box style={{ color: "black" }}> to </Box>
                    <TextField style={{ marginLeft: 4 }} {...endProps} />
                  </React.Fragment>
                )}
              />
            </LocalizationProvider>
            <Button
              style={{
                border: "2px solid black",
                borderRadius: "12px",
                width: 150,
                height: 55,
                marginLeft: 20,
              }}
              onClick={handleTrainsSearch}
            >
              Search
            </Button>
          </FormGroup>
        </div>
      </div>
    </div>
  );
};

export default SearchTrains;
