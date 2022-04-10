import React, { Fragment } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Homepage from "../Dashboard/Homepage";
import Hotels from "../Components/Hotels/Hotels";
import Flights from "../Components/Flights/Flights";
import Trains from "../Components/Trains/Trains";
import SelectedHotelDisplay from "../Components/Hotels/SelectedHotelDisplay";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import NotFound from "../404/NotFound";
import AllBookedData from "../Components/BookedData/AllBookedData";

const Router = () => {
  const shouldRedirect = true;
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route
            index
            path="/"
            element={
              shouldRedirect ? (
                <Navigate replace to="/dashboard" />
              ) : (
                <ProtectedRoutes>
                  <Homepage />
                </ProtectedRoutes>
              )
            }
          />
          <Route
            index
            path="/dashboard"
            element={
              <ProtectedRoutes>
                <Homepage />
              </ProtectedRoutes>
            }
          />
          <Route
            index
            path="/hotels"
            element={
              <ProtectedRoutes>
                <Hotels />
              </ProtectedRoutes>
            }
          />
          <Route
            index
            path="/flights"
            element={
              <ProtectedRoutes>
                <Flights />
              </ProtectedRoutes>
            }
          />
          <Route
            index
            path="/trains"
            element={
              <ProtectedRoutes>
                <Trains />
              </ProtectedRoutes>
            }
          />
          <Route
            index
            path="/selectedhotel/:id"
            element={
              <ProtectedRoutes>
                <SelectedHotelDisplay />
              </ProtectedRoutes>
            }
          />
          <Route
            index
            path="/bookeddata"
            element={
              <ProtectedRoutes>
                <AllBookedData />
              </ProtectedRoutes>
            }
          />
          <Route index path="/signin" element={<Login />} />
          <Route index path="/signup" element={<SignUp />} />
          <Route index path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem("CurrentUserIs")) {
    return children;
  } else {
    return <Navigate to="/signup" />;
  }
};

export default Router;
