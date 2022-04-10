import { FormControl, FormGroup, MenuItem, Select } from "@mui/material";
import React, { useContext, useState } from "react";
import "../../assets/css/Search.css";
import TextField from "@mui/material/TextField";
import DateRangePicker from "@mui/lab/DateRangePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { UserContext } from "../../Context/ContextFile";

const Search = () => {
  const [citySelected, setCitySelected] = useState("");
  const [value, setValue] = useState([null, null]);
  const [AdultSelected, setAdultSelected] = useState("");
  const [ChildrenSelected, setChildrenSelected] = useState("");
  const { setSearchedData } = useContext(UserContext);
  const [StarsSelected, setStarsSelected] = useState("");

  const cityNames = useSelector((state) => state.details.cities);

  const handleChange = (event) => {
    setCitySelected(event.target.value);
  };
  const handleAdultSelectedChange = (event) => {
    setAdultSelected(event.target.value);
  };

  const handleChildrenSelected = (event) => {
    setChildrenSelected(event.target.value);
  };
  const handleStarselected = (event) => {
    setStarsSelected(event.target.value);
  };

  const handleSubmit = () => {
    setSearchedData([
      {
        city: citySelected,
        date: value,
        adult: AdultSelected,
        child: ChildrenSelected,
        stars: StarsSelected,
      },
    ]);
  };

  return (
    <div className="Search-bar">
      <div className="Search-bar-internal">
        <FormGroup style={{ flexDirection: "row" }}>
          <FormControl>
            <Select
              style={{ minWidth: 100, marginRight: 12, height: 55 }}
              value={citySelected}
              label="City"
              onChange={handleChange}
            >
              {cityNames.map((city) => (
                <MenuItem value={city}>{city}</MenuItem>
              ))}
            </Select>
            <label style={{ marginTop: 20 }}>City</label>
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
              value={AdultSelected}
              label="Adult"
              onChange={handleAdultSelectedChange}
            >
              <MenuItem value={`1`}>1</MenuItem>
              <MenuItem value={`2`}>2</MenuItem>
              <MenuItem value={`3`}>3</MenuItem>
              <MenuItem value={`4`}>4</MenuItem>
            </Select>
            <label style={{ marginTop: 20 }}>Adult</label>
          </FormControl>

          <FormControl>
            <Select
              style={{
                minWidth: 50,
                marginRight: 12,
                marginLeft: 12,
                height: 55,
              }}
              value={ChildrenSelected}
              label="Children"
              onChange={handleChildrenSelected}
            >
              <MenuItem value={`1`}>1</MenuItem>
              <MenuItem value={`2`}>2</MenuItem>
              <MenuItem value={`3`}>3</MenuItem>
              <MenuItem value={`4`}>4</MenuItem>
            </Select>
            <label style={{ marginTop: 20, marginLeft: 25 }}>Children</label>
          </FormControl>

          <FormControl>
            <Select
              style={{
                minWidth: 50,
                marginRight: 12,
                marginLeft: 12,
                height: 55,
              }}
              value={StarsSelected}
              label="Stars"
              onChange={handleStarselected}
            >
              <MenuItem value={`1`}>
                1 <html>&#9733;</html>
              </MenuItem>
              <MenuItem value={`2`}>
                2 <html>&#9733;</html>
              </MenuItem>
              <MenuItem value={`3`}>
                3 <html>&#9733;</html>
              </MenuItem>
              <MenuItem value={`4`}>
                4 <html>&#9733;</html>
              </MenuItem>
              <MenuItem value={`5`}>
                5 <html>&#9733;</html>
              </MenuItem>
            </Select>
            <label style={{ marginTop: 20, marginLeft: 50 }}>Stars</label>
          </FormControl>

          <Button
            style={{
              border: "2px solid black",
              borderRadius: "12px",
              width: "130px",
              height: 55,
            }}
            onClick={handleSubmit}
          >
            Search
          </Button>
        </FormGroup>
      </div>
    </div>
  );
};

export default Search;
