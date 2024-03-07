import React, { Suspense, useState } from "react";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./Components/Loader";

const SignUp = React.lazy(() => import("./Components/Signup"));
const LogIn = React.lazy(() => import("./Components/Login"));

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0000ff",
    },
    secondary: {
      main: "#800080",
    },
    background: {},
  },
  typography: {
    fontFamily: "Playfair Display",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: "linear-gradient(150deg,#ffffff 50%, #add5ff 80%)",
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Suspense fallback={<Loader />}>
                <SignUp />
              </Suspense>
            }
          />
          <Route
            exact
            path="/login"
            element={
              <Suspense fallback={<Loader />}>
                <LogIn />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
