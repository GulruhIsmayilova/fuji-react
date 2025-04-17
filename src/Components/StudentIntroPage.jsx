// src/Components/StudentIntroPage.js
import React from "react";
import { Box, Typography, Container, useTheme, useMediaQuery } from "@mui/material";
import introImage from "../images/pexels-photo-1647919.jpeg"; // Öz şəkil yolunu düzəlt

const StudentIntroPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ py: 10, backgroundColor: "#fdfdfd" }}>
      <Container>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            mb: 4,
            fontSize: isMobile ? "2rem" : "2.5rem",
            color: "#0d47a1",
            textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
          }}
        >
          教育機関への学生紹介
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{ textAlign: "center", mb: 6, fontSize: isMobile ? "1rem" : "1.2rem" }}
        >
          優秀な海外の学生を日本の教育機関にご紹介します。
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            gap: 4,
          }}
        >
          <Box sx={{ flex: 1 }}>
            <img
              src={introImage}
              alt="学生紹介"
              style={{ width: "100%", borderRadius: 12, boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}
            />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              海外からの優秀な学生を日本へ
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
              私たちは、アゼルバイジャンなどの国々から、日本の大学・専門学校への進学を希望する優秀な学生をご紹介しています。
              書類選考から面接、入学手続きまでをサポートし、日本での学習環境にスムーズに適応できるよう支援します。
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default StudentIntroPage;
