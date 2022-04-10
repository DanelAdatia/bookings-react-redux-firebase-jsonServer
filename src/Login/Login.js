import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";
import { TextField, Typography, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { LoginWithEmailAndPassword } from "../firebase/Firebase";
import { toast } from "react-toastify";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const handleLogin = async () => {
    setEmail("");
    setPassword("");
    try {
      const result = await LoginWithEmailAndPassword(email, password);
      localStorage.setItem("CurrentUserIs", JSON.stringify(result));
      toast.success("Login success");
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Login failed", {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    }
  };

  return (
    <Box
      sx={{ flexGrow: 1 }}
      style={{ height: "100vh" }}
      className="signup-background"
    >
      <Grid container spacing={2} columns={16}>
        <Grid
          display="flex"
          justifyContent="center"
          alignItems="center"
          item
          xs={8}
        >
          <Box
            style={{
              width: "500px",
            }}
            component="form"
            className="signupbox mt-5 pt-5 pl-4"
          >
            <Typography className="titleSignIn" component="h1" variant="h5">
              Sign In
            </Typography>
            <TextField
              name="email"
              focus
              fullWidth
              autoComplete="off"
              label="Email"
              type="email"
              margin="normal"
              className="pr-4"
              color="secondary"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              name="password"
              fullWidth
              label="Password"
              type="password"
              margin="normal"
              className="pr-4"
              focus
              color="success"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              style={{
                padding: "10px",
                marginTop: "2px",
                marginLeft: "10px",
                marginBottom: "5px",
                width: "80px",
                height: "40px",
                fontSize: "12px",
              }}
              variant="contained"
              color="secondary"
              onClick={handleLogin}
            >
              Sign In
            </Button>
            <div style={{ marginLeft: "10px" }}>
              <Link to="/signup">
                Don't have an account? Click here to Sign Up
              </Link>
            </div>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <div
            style={{ width: "500px", height: "500px" }}
            className="mt-5 pt-5"
          >
            <lottie-player
              src="https://assets5.lottiefiles.com/packages/lf20_JXUInT.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
