import React from "react";
import {
  Box,
  Typography,
  Container,
  useTheme,
  useMediaQuery
} from "@mui/material";
import { useTranslation } from 'react-i18next'; // ✅ Tərcümə funksiyası

import talentImage from "../images/76057eb2031a7f3522c180748c6f3f09.jpg";
import languageImage from "../images/pro-gute-praxis-BQ_KI_Uebersetzung.jpg";
import culturalImage from "../images/6e1ce4a4bc3c920ef9b7fa994e403220.jpg";
import achievementBackground from "../images/statistic.png";

const OurStrengths = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { t } = useTranslation(); // ✅ i18n tərcümə

  const strengths = [
    {
      title: t("strengthsContent.card1Title", "豊富な人材ネットワーク"),
      subtitle: t("strengthsContent.card1Subtitle", "アゼルバイジャン国内での広範なネットワークを活かし、多様な業界に対応できる優秀な人材を提供します"),
      image: talentImage,
    },
    {
      title: t("strengthsContent.card2Title", "語学能力に強み"),
      subtitle: t("strengthsContent.card2Subtitle", "アゼルバイジャン語、トルコ語、日本語、英語など、複数言語に対応できる人材を確保し、国際的なビジネスの橋渡しを行います。"),
      image: languageImage,
    },
    {
      title: t("strengthsContent.card3Title", "文化的な橋渡し役"),
      subtitle: t("strengthsContent.card3Subtitle", "アゼルバイジャンと日本の文化やビジネスマナーの違いを理解しており、円滑なコミュニケーションをサポートします。"),
      image: culturalImage,
    },
  ];

  const achievements = [
    { number: "100+", label: t("strengthsContent.achievement1", "Successful Placements") },
    { number: "10+", label: t("strengthsContent.achievement2", "Countries Served") },
    { number: "150+", label: t("strengthsContent.achievement3", "Happy Clients") },
  ];

  return (
    <Box>
      <Box
        sx={{
          mt: 10,
          minHeight: "100vh",
          backgroundColor: theme.palette.background.default,
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
              fontSize: isMobile ? "1.7rem" : "2.2rem",
            }}
          >
            {t("strengthsContent.title", "Our Strengths")}
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
                  minHeight: 350,
                  borderRadius: "16px",
                  border: `1px solid ${theme.palette.divider}`,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  p: 3,
                  backgroundColor: theme.palette.background.paper,
                  boxShadow: theme.shadows[4],
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: theme.shadows[8],
                  },
                }}
              >
                <Box
                  sx={{
                    mb: 3,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: { xs: 180, sm: 200, md: 220 },
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
                    fontSize: isMobile ? "1.2rem" : "1.5rem",
                  }}
                >
                  {strength.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.text.secondary,
                    textAlign: "center",
                    fontSize: isMobile ? "1rem" : "1.1rem",
                    lineHeight: 1.6,
                  }}
                >
                  {strength.subtitle}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Achievements Section */}
          <Box
            sx={{
              mt: 10,
              background: `url(${achievementBackground}) no-repeat center center`,
              backgroundSize: "cover",
              backgroundAttachment: "fixed",
              borderRadius: "16px",
              padding: "50px 0",
              boxShadow: theme.shadows[4],
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Container sx={{ textAlign: "center" }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  mb: 4,
                  color: "#ffffff",
                  fontSize: isMobile ? "1.7rem" : "2.2rem",
                }}
              >
                {t("strengthsContent.achievementsTitle", "Our Achievements")}
              </Typography>

              <Box sx={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: 3 }}>
                {achievements.map((stat, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      width: "30%",
                      p: 4,
                      backgroundColor: "rgba(0, 0, 0, 0.6)",
                      borderRadius: "16px",
                      textAlign: "center",
                      boxShadow: theme.shadows[4],
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: theme.shadows[8],
                      },
                    }}
                  >
                    <Typography variant="h5" sx={{ fontWeight: "bold", color: "#667eea", fontSize: isMobile ? "1.5rem" : "1.8rem" }}>
                      {stat.number}
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#ffffff", fontSize: isMobile ? "1rem" : "1.1rem" }}>
                      {stat.label}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Container>
          </Box>

        </Container>
      </Box>
    </Box>
  );
};

export default OurStrengths;
