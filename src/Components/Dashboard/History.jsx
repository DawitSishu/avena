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
  Container,
} from "@mui/material";

const CallHistoryPage = () => {
  const callHistory = [
    { id: 1, caller: "Abebe", duration: 10 },
    { id: 2, caller: "Kebede", duration: 15 },
    { id: 3, caller: "Chala", duration: 8 },
    { id: 4, caller: "Kebedech", duration: 7 },
    { id: 5, caller: "Mintesinot", duration: 12 },
    { id: 6, caller: "Tewodros", duration: 6 },
    { id: 7, caller: "Alemu", duration: 9 },
    { id: 8, caller: "Balcha", duration: 14 },
    { id: 9, caller: "Dawit", duration: 5 },
    { id: 10, caller: "Dagim", duration: 11 },
    { id: 11, caller: "Estifanos", duration: 13 },
    { id: 12, caller: "Faris", duration: 4 },
    { id: 13, caller: "Efrata", duration: 5 },
    { id: 14, caller: "Kirubel", duration: 1 },
  ];

  const totalDuration = callHistory.reduce(
    (sum, call) => sum + call.duration,
    0
  );

  return (
    <Container component="main" maxWidth="md">
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
          Call History
        </Typography>

        <TableContainer style={{ marginTop: "20px" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Caller</TableCell>
                <TableCell align="right">Duration (min)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {callHistory.map((call) => (
                <TableRow key={call.id}>
                  <TableCell>{call.id}</TableCell>
                  <TableCell>{call.caller}</TableCell>
                  <TableCell align="right">{call.duration}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant="h6" style={{ marginTop: "20px" }}>
          Total Duration: {totalDuration} minutes
        </Typography>
      </Paper>
    </Container>
  );
};

export default CallHistoryPage;
