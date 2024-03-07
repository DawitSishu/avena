import React, { useState, useEffect } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import axios from "axios";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import Loader from "../Loader";
import { Link } from "react-router-dom";

const styles = {
  paper: {
    marginTop: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: 1,
    backgroundColor: "secondary.main",
  },
  form: {
    width: "100%",
    marginTop: 1,
  },
  submit: {
    margin: 3,
  },
};

const BASE_URI = "https://house-lister.onrender.com/api/user/login";

function Login({ login }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      //   const result = await axios.post(BASE_URI, { email, password });
      let token = result.data.token;
      localStorage.setItem("token", token);
      toastr.success("Successfully Logged In!!");
      login();
    } catch (error) {
      toastr.error("ERROR: Incorrect Login Credentials");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    toastr.options = {
      closeButton: true,
      newestOnTop: true,
      progressBar: true,
      showDuration: 300,
      hideDuration: 1000,
      timeOut: 5000,
    };
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div style={styles.paper}>
        <Avatar style={styles.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form style={styles.form} onSubmit={handleSubmit} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Username"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={styles.submit}
            >
              Log In
            </Button>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                style={styles.submit}
              >
                Sign Up
              </Button>
            </Link>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default Login;
