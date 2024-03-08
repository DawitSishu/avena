import React from "react";
import {
  Paper,
  Typography,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

const billingData = [
  { id: 1, description: "Call Rate", rate: "ETB 0.5/min", minutes: 0 }, // Include 'minutes' property
  { id: 2, description: "Minutes Used", minutes: 120 },
];

const totalAmount = billingData.reduce(
  (sum, item) =>
    sum + (item.rate ? item.minutes * parseFloat(item.rate.slice(1)) : 0),
  0
);
const billedAmount = totalAmount.toFixed(2);

const VoIPBillingDetails = () => {
  return (
    <Paper style={{ padding: "16px", margin: "16px" }}>
      <Typography variant="h5" gutterBottom>
        VoIP Billing Details
      </Typography>

      <TableContainer component={Paper} style={{ marginTop: "16px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Description</TableCell>
              <TableCell align="right">Rate</TableCell>
              <TableCell align="right">Minutes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {billingData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.description}</TableCell>
                <TableCell align="right">{row.rate}</TableCell>
                <TableCell align="right">{row.minutes}</TableCell>
              </TableRow>
            ))}

            <TableRow>
              <TableCell colSpan={2} align="right">
                <strong>Billed Amount</strong>
              </TableCell>
              <TableCell align="right">ETB 60</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default VoIPBillingDetails;
