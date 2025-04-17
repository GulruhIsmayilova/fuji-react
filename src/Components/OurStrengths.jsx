import React from "react";
import {
  Box,
  Typography,
  Container,
  Button,
  useTheme,
  useMediaQuery
} from "@mui/material";

// Importing images for each strength
import talentImage from "../images/76057eb2031a7f3522c180748c6f3f09.jpg";  // Update these paths with correct image paths
import languageImage from "../images/pro-gute-praxis-BQ_KI_Uebersetzung.jpg";  // Update these paths with correct image paths
import culturalImage from "../images/6e1ce4a4bc3c920ef9b7fa994e403220.jpg";  // Update these paths with correct image paths
import achievementBackground from "../images/statistic.png"; // Background image for Achievements section

const OurStrengths = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Card data with image sources
  const strengths = [
    {
      title: "豊富な人材ネットワーク",
      subtitle: "アゼルバイジャン国内での広範なネットワークを活かし、多様な業界に対応できる優秀な人材を提供します",
      image: talentImage,  // Image for Talent Network
    },
    {
      title: "語学能力に強み",
      subtitle: "アゼルバイジャン語、トルコ語、日本語、英語など、複数言語に対応できる人材を確保し、国際的なビジネスの橋渡しを行います。",
      image: languageImage,  // Image for Linguistic Abilities
    },
    {
      title: "文化的な橋渡し役",
      subtitle: "アゼルバイジャンと日本の文化やビジネスマナーの違いを理解しており、円滑なコミュニケーションをサポートします。",
      image: culturalImage,  // Image for Cultural Bridge
    },
  ];

  return (
    <Box>
      {/* Main Content */}
      <Box
        sx={{
          mt: 10,  // Adjusted margin-top to avoid hiding the navbar
          minHeight: "100vh",
          background: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          py: 4,
        }}
      >
        <Container maxWidth="xl">
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: theme.palette.text.primary,
              textAlign: "center",
              mb: 6,
              fontSize: isMobile ? "1.5rem" : "2rem",
            }}
          >
            Our Strengths
          </Typography>

          {/* Strengths Cards */}
          <Box
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 4,
            }}
          >
            {strengths.map((strength, index) => (
              <Box
                key={index}
                sx={{
                  width: isMobile ? "90%" : "30%",
                  minHeight: 350,  // Increased height for better balance with larger images
                  borderRadius: "16px",
                  border: "1px solid rgba(0, 0, 0, 0.05)",  // Thinner border for a sleeker look
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  p: 3,
                  backgroundColor: "#fff",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",
                  },
                }}
              >
                {/* Image */}
                <Box
  sx={{
    mb: 3,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: { xs: 180, sm: 200, md: 220 },  // Daha böyük və responsiv ölçü
    height: { xs: 180, sm: 200, md: 220 },
    overflow: "hidden",
  }}
>
  <img
    src={strength.image}
    alt={strength.title}
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: "0",
    }}
  />
</Box>


                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: theme.palette.text.primary,
                    mb: 1,
                    fontSize: isMobile ? "1.1rem" : "1.4rem",
                  }}
                >
                  {strength.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.text.secondary,
                    textAlign: "center",
                    fontSize: isMobile ? "0.9rem" : "1rem",
                    lineHeight: 1.6,
                  }}
                >
                  {strength.subtitle}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Achievements Section (Statistika) */}
          <Box
            sx={{
              mt: 10,
              background: `url(${achievementBackground}) no-repeat center center`,  // Full width image
              backgroundSize: "cover",  // Ensures the image fully covers the container
              backgroundPosition: "center",  // Ensures image is centered
              backgroundAttachment: "fixed",  // Keeps the image fixed while scrolling
              borderRadius: "16px",
              padding: "50px 0",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Container sx={{ textAlign: "center", color: "#fff" }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  marginBottom: 4,
                  fontSize: isMobile ? "1.5rem" : "2rem",
                }}
              >
                Our Achievements
              </Typography>

              <Box sx={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: 3 }}>
                {/* Statistika Kartı 1 */}
                <Box
                  sx={{
                    width: "30%",
                    p: 4,
                    backgroundColor: "rgba(0, 0, 0, 0.5)", // Transparent background
                    borderRadius: "16px",
                    textAlign: "center",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",
                    },
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: "bold", color: "#667eea" }}>
                    500+
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#fff" }}>
                    Successful Placements
                  </Typography>
                </Box>

                {/* Statistika Kartı 2 */}
                <Box
                  sx={{
                    width: "30%",
                    p: 4,
                    backgroundColor: "rgba(0, 0, 0, 0.5)", // Transparent background
                    borderRadius: "16px",
                    textAlign: "center",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",
                    },
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: "bold", color: "#667eea" }}>
                    10+
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#fff" }}>
                    Countries Served
                  </Typography>
                </Box>

                {/* Statistika Kartı 3 */}
                <Box
                  sx={{
                    width: "30%",
                    p: 4,
                    backgroundColor: "rgba(0, 0, 0, 0.5)", // Transparent background
                    borderRadius: "16px",
                    textAlign: "center",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",
                    },
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: "bold", color: "#667eea" }}>
                    200+
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#fff" }}>
                    Happy Clients
                  </Typography>
                </Box>
              </Box>
            </Container>
          </Box>

        </Container>
      </Box>
    </Box>
  );
};

export default OurStrengths;
