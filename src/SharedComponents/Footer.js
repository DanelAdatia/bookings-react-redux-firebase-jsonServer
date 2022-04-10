import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleBookedData = () => {
    localStorage.setItem("SearchingFor", "BookedData");
    navigate("/bookeddata");
  };
  return (
    <div>
      <footer style={{ color: "gray", position: "fixed", bottom: 0 }}>
        <Button onClick={() => window.scrollTo(0, 0)}>Back to Top</Button>
      </footer>
      <footer
        style={{
          color: "black",
          position: "fixed",
          bottom: 0,
          right: 0,
          background: "linear-gradient(135deg, #f34079 40%, #fc894d)",
        }}
      >
        <Button onClick={handleBookedData}>Booked Data</Button>
      </footer>
    </div>
  );
};

export default Footer;
