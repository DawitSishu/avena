import React, { useState } from "react";
import {
  Paper,
  Typography,
  TextField,
  Button,
  Container,
  Grid,
  InputLabel,
  Input,
} from "@mui/material";

const FineTunePage = () => {
  const [data, setData] = useState({
    feature1: "",
    feature2: "",
    label: "",
  });

  const [file, setFile] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle data submission for model training
    console.log("Data submitted:", data);
    console.log("File:", file);
    // You can send the data and file to your backend or process them as needed for model training
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper
        style={{
          padding: "20px",
          margin: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Fine-Tune Model Data
        </Typography>

        <form
          style={{ width: "100%", marginTop: "20px" }}
          onSubmit={handleSubmit}
          noValidate
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="feature1"
                label="Feature 1"
                name="feature1"
                value={data.feature1}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="feature2"
                label="Feature 2"
                name="feature2"
                value={data.feature2}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="label"
                label="Label"
                name="label"
                value={data.label}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel htmlFor="file">Select Data File</InputLabel>
              <Input
                type="file"
                id="file"
                name="file"
                fullWidth
                onChange={handleFileChange}
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ margin: "20px 0 20px" }}
          >
            Submit Data for Training
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default FineTunePage;
