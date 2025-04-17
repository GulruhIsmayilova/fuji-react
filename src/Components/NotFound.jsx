import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = ({ darkMode }) => {
  return (
    <Box
      sx={{
        textAlign: "center",
        py: 10,
        backgroundColor: darkMode ? "#121212" : "#fff", // Dark mode üçün fon rəngi
        color: darkMode ? "#fff" : "#000", // Dark mode üçün mətn rəngi
      }}
    >
      <Typography variant="h2" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" gutterBottom>
        このページは見つかりませんでした。
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Üzr istəyirik, belə bir səhifə mövcud deyil.
      </Typography>
      <Button
        variant="contained"
        component={Link}
        to="/"
        sx={{
          backgroundColor: darkMode ? "#667eea" : "#4e66cc", // Button rəngi dark mode ilə uyğun
          color: "#fff",
          "&:hover": {
            backgroundColor: darkMode ? "#4e66cc" : "#667eea", // Hover effekti dark mode ilə uyğun
          },
        }}
      >
        Ana səhifəyə qayıt
      </Button>
    </Box>
  );
};

export default NotFound;
