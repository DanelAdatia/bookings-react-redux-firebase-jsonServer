import { Paper, Stack } from "@mui/material";
import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Logout from "../LogOut/Logout";
import "../App.css";
import logo from "../assets/images/logo.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Dashboard = () => {
  const navigate = useNavigate();

  let typeSelected = localStorage.getItem("SearchingFor");

  const HandleHotels = () => {
    localStorage.setItem("SearchingFor", "Hotel");
    navigate("/hotels");
  };

  const HandleFlights = () => {
    localStorage.setItem("SearchingFor", "Flights");
    navigate("/flights");
  };

  const HandleTrains = () => {
    localStorage.setItem("SearchingFor", "Train");
    navigate("/trains");
  };

  const handleHomePage = () => {
    localStorage.setItem("SearchingFor", "dashboard");
    navigate("/");
  };
  return (
    <Fragment>
      <Stack
        style={{
          padding: 20,
        }}
        direction="row"
        spacing={10}
      >
        <img
          onClick={handleHomePage}
          style={{
            width: 200,
            height: 80,
            marginRight: 100,
            cursor: "pointer",
          }}
          src={logo}
          alt="Bookings"
        />

        <Item>
          <div
            className={
              typeSelected === "Hotel" ? "typeSelected" : "typeNotSelected"
            }
            onClick={HandleHotels}
          >
            <label className="dashboard-navbar">Hotels</label>
          </div>
        </Item>
        <Item>
          <div
            className={
              typeSelected === "Flights" ? "typeSelected" : "typeNotSelected"
            }
            onClick={HandleFlights}
          >
            <label className="dashboard-navbar">Flights</label>
          </div>
        </Item>
        <Item>
          <div
            className={
              typeSelected === "Train" ? "typeSelected" : "typeNotSelected"
            }
            onClick={HandleTrains}
          >
            <label className="dashboard-navbar">Train</label>
          </div>
        </Item>
        <Logout />
      </Stack>
    </Fragment>
  );
};

export default Dashboard;
