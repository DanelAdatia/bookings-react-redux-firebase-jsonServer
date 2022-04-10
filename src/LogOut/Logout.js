import { Button } from "@mui/material";
import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const HandleLogout = () => {
    window.localStorage.removeItem("CurrentUserIs");
    navigate("/signin");
  };
  return (
    <Fragment>
      <Button style={{ zIndex: 9999 }} variant="primary" onClick={HandleLogout}>
        Logout
      </Button>
    </Fragment>
  );
};

export default Logout;
