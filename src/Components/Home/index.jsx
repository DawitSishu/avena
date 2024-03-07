import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import { Grid } from "@mui/material";
import { AirportShuttle, LocalShipping, Storefront } from "@mui/icons-material";
import ban from "../../assets/ban.jpg";
import del from "../../assets/del.jpg";
import ride from "../../assets/ride.jpg";
import { useNavigate } from "react-router-dom";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const Index = () => {
  const [selectedEnterprise, setSelectedEnterprise] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const navigate = useNavigate();

  const handleEnterpriseSelect = (type) => {
    setSelectedEnterprise(type);
    // Simulate fetching data for the selected enterprise
    // Replace this with actual data fetching logic
    // For demonstration, we'll use sample data
    const enterpriseData = getEnterpriseData(type);
    setSelectedItems(enterpriseData);
  };

  const getEnterpriseData = (type) => {
    // Simulated data for demonstration purposes
    // Replace this with actual data fetching logic
    switch (type) {
      case "Bank":
        return [
          { id: 1, name: "COOP", url: "url_to_bank_1_image" },
          { id: 2, name: "CBE", url: "url_to_bank_2_image" },
          { id: 3, name: "Dahen", url: "url_to_bank_3_image" },
        ];
      case "Delivery":
        return [
          { id: 1, name: "Beu", url: "url_to_delivery_1_image" },
          { id: 2, name: "Tikus", url: "url_to_delivery_2_image" },
          { id: 3, name: "Zelela", url: "url_to_delivery_3_image" },
        ];
      case "Transport":
        return [
          { id: 1, name: "Ride", url: "url_to_transport_1_image" },
          { id: 2, name: "Feres", url: "url_to_transport_2_image" },
          { id: 3, name: "Seregela", url: "url_to_transport_3_image" },
        ];
      default:
        return [];
    }
  };

  const handleItemClick = (item) => {
    if (item.name === "COOP") {
      navigate(`/coop`);
    } else {
      toastr.warning("Not Available,Information Not Complete");
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

  const renderItems = () => {
    return selectedItems.map((item) => (
      <Card
        key={item.id}
        sx={{
          maxWidth: 300,
          marginBottom: 3,
          cursor: "pointer",
          marginRight: 2,
        }}
        onClick={() => handleItemClick(item)}
      >
        <CardMedia
          component="img"
          alt={item.name}
          height="140"
          width="140"
          image={item.url}
        />
        <CardContent>
          <Typography variant="h6">{item.name}</Typography>
        </CardContent>
      </Card>
    ));
  };

  const enterpriseTypes = [
    { type: "Bank", icon: <Storefront />, image: ban },
    {
      type: "Delivery",
      icon: <LocalShipping />,
      image: del,
    },
    {
      type: "Transport",
      icon: <AirportShuttle />,
      image: ride,
    },
  ];

  return !selectedEnterprise ? (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "20px",
        }}
      >
        {enterpriseTypes.map((enterprise) => (
          <Card key={enterprise.type} sx={{ maxWidth: 300, marginBottom: 3 }}>
            <CardMedia
              component="img"
              alt={enterprise.type}
              height="140"
              image={enterprise.image}
            />
            <CardContent>
              <Typography variant="h6">{enterprise.type}</Typography>
              {enterprise.icon}
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleEnterpriseSelect(enterprise.type)}
                style={{ marginTop: "10px" }}
              >
                Select
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  ) : (
    <>
      <Button variant="outlined" onClick={() => setSelectedEnterprise(null)}>
        Back
      </Button>
      <Grid container sx={{ marginTop: 2, p: 2 }}>
        {renderItems()}
      </Grid>
    </>
  );
};

export default Index;
