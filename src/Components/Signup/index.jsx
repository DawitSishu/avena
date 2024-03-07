import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Grid } from "@mui/material";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

//username, firstname, lastname, phone, password

/* user : {
  ..vakues
},
phone */

const index = () => {
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

  const [loading, setLoading] = useState(false);

  const [confirm, setConfirm] = useState({
    confirmEmail: "",
    confirmPassword: "",
  });

  const [values, setValues] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const [phone, setPhone] = useState("");

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = () => {
    setLoading(true);
    if (
      !values.username ||
      !values.first_name ||
      !values.last_name ||
      !values.email ||
      !values.password ||
      !phone
    ) {
      toastr.error("Error: Please include all fields!! ");
      setLoading(false);

      return;
    }
    if (values.password !== confirm.confirmPassword) {
      toastr.error("Error: The passwords Don't match!! ");
      setLoading(false);

      return;
    }
    const emailRegex = /[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]+/;
    if (!emailRegex.test(values.email)) {
      toastr.error("ERROR: Invalid Email type");
      return;
    }
    if (values.email !== confirm.confirmEmail) {
      toastr.error("Error: The Emails Don't match!! ");
      setLoading(false);

      return;
    }
    try {
      const payload = {
        user: { ...values },
        phone,
      };
      setLoading(false);
    } catch (error) {
      toastr.error("Error: Failed to Create Account Try Again!!");
      setLoading(false);
      return;
    }

    console.log("Form submitted:", values);
  };
  return (
    <div style={{ padding: "2px" }}>
      <Grid>
        <Grid container justifyContent="center">
          <Typography variant="h4" textAlign="center">
            Sign Up
          </Typography>
        </Grid>
        <Grid container justifyContent="center">
          {" "}
          <Grid item>
            {" "}
            <TextField
              style={{ margin: "8px", width: "300px" }}
              label="First Name"
              value={values.first_name}
              onChange={handleChange("first_name")}
            />
          </Grid>
          <Grid item>
            {" "}
            <TextField
              style={{ margin: "8px", width: "300px" }}
              label="Last Name"
              value={values.last_name}
              onChange={handleChange("last_name")}
            />
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Grid item>
            <TextField
              style={{ margin: "8px", width: "300px" }}
              label="Username"
              value={values.username}
              onChange={handleChange("username")}
            />
          </Grid>
          <Grid item>
            <TextField
              style={{ margin: "8px", width: "300px" }}
              label="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Grid item>
            <TextField
              style={{ margin: "8px", width: "300px" }}
              label="Email"
              value={values.email}
              onChange={handleChange("email")}
            />
          </Grid>
          <Grid item>
            <TextField
              style={{ margin: "8px", width: "300px" }}
              label="Confirm Email"
              value={confirm.confirmEmail}
              onChange={(e) =>
                setConfirm((prev) => ({
                  ...prev,
                  confirmEmail: e.target.value,
                }))
              }
            />
          </Grid>
        </Grid>

        <Grid container justifyContent="center">
          <Grid item>
            {" "}
            <TextField
              style={{ margin: "8px", width: "300px" }}
              label="Password"
              type="password"
              value={values.password}
              onChange={handleChange("password")}
            />
          </Grid>
          <Grid item>
            {" "}
            <TextField
              style={{ margin: "8px", width: "300px" }}
              label="Confirm Password"
              type="password"
              value={confirm.confirmPassword}
              onChange={(e) =>
                setConfirm((prev) => ({
                  ...prev,
                  confirmPassword: e.target.value,
                }))
              }
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Button
          style={{ margin: "16px" }}
          variant="contained"
          color="primary"
          fullwidth
          onClick={handleSubmit}
        >
          Sign Up
        </Button>
      </Grid>
    </div>
  );
};

export default index;
