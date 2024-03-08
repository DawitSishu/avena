import React from "react";
import { useState, useEffect } from "react";
import {
  Toolbar,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  ListItem,
  List,
  IconButton,
  Drawer,
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Typography,
  Button,
} from "@mui/material";
import { LocationCity, Settings } from "@mui/icons-material";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import StarIcon from "@mui/icons-material/Star";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PaymentIcon from "@mui/icons-material/Payment";
import CallIcon from "@mui/icons-material/Call";
import History from "./History";
import Data from "./Data";
import Pay from "./Pay";
import Billings from "./Billings";

const drawerWidth = 240;

const iconMap = {
  Billings: <AccountBalanceIcon />,
  Pay: <PaymentIcon />,
  "Fine Tune Data": <Settings />,
  "Call History": <CallIcon />,
};

const index = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Billings");
  const [waiting, setWaiting] = useState(false);
  const navigate = useNavigate();

  let token = localStorage.getItem("token");
  let role = localStorage.getItem("role");
  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleItemClick = (text) => {
    setSelectedItem(text);
    setMobileOpen(false);
  };

  const handleLogOut = () => {
    localStorage.clear();
    navigate("/");
  };

  const drawer = (
    <div>
      <Toolbar>COOP</Toolbar>
      <Divider />
      <List>
        {["Billings", "Pay", "Fine Tune Data", "Call History"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={() => handleItemClick(text)}>
                <ListItemIcon>{iconMap[text]}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </div>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return waiting ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Spinner />
    </div>
  ) : (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Admin Panel
          </Typography>
          <Button
            variant="contained"
            sx={{ backgroundColor: "black" }}
            onClick={handleLogOut}
          >
            Log out
          </Button>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {selectedItem == "Billings" ? (
          <Billings />
        ) : selectedItem == "Pay" ? (
          <Pay />
        ) : selectedItem == "Fine Tune Data" ? (
          <Data />
        ) : selectedItem == "Call History" ? (
          <History />
        ) : null}
      </Box>
    </Box>
  );
};

export default index;
