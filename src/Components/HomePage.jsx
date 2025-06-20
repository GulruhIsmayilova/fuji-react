import React from 'react';
import { Box, Typography, Button, Container } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import backImage from '../images/new back.png';

const HomePage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation(); // 💡 i18n tərcümə funksiyası

  const handleLearnMoreClick = () => {
    navigate('/aisatsu');
  };

  return (
    <Box sx={{ width: "100%", position: "relative" }}>
      {/* Hero Section */}
      <Box
        sx={{
          height: '70vh',
          backgroundImage: `url(${backImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          filter: 'brightness(0.6)',
        }}
      >
        <Box sx={{ zIndex: 1 }}>
          <Typography variant="h2" sx={{
            fontWeight: 'bold',
            textShadow: '2px 2px 6px rgba(0, 0, 0, 0.7)',
            letterSpacing: '2px',
            color: '#fff'
          }}>
            {t("home.welcome", "Fuji Gatewayへようこそ")}
          </Typography>
          <Typography variant="h5" sx={{
            mt: 2,
            fontStyle: 'italic',
            textShadow: '1px 1px 5px rgba(0, 0, 0, 0.5)',
            color: '#fff'
          }}>
            {t("home.subtitle", "日本とアゼルバイジャンの間で、熟練した労働者と学生をつなぐ架け橋。")}
          </Typography>
          <Button
            variant="contained"
            onClick={handleLearnMoreClick}
            sx={{
              mt: 4,
              background: "linear-gradient(135deg, #667eea, #4e66cc)",
              color: '#fff',
              padding: '12px 30px',
              fontSize: '1.2rem',
              "&:hover": {
                background: "linear-gradient(135deg, #4e66cc, #667eea)",
                boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)",
                transform: "scale(1.05)",
              },
            }}
          >
            {t("home.learnMore", "詳細はこちら")}
          </Button>
        </Box>
      </Box>

      {/* About Section */}
      <Container sx={{ mt: 6, pb: 6 }}>
        <Typography variant="h4" sx={{
          fontWeight: 700,
          textAlign: 'center',
          mb: 3,
          color: '#333'
        }}>
          {t("home.aboutTitle", "私たちについて")}
        </Typography>
        <Typography variant="body1" sx={{
          fontSize: '1.2rem',
          lineHeight: 1.8,
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto',
          color: '#555'
        }}>
          {t(
            "home.aboutText",
            "私たちは、外国の才能ある人々と日本のさまざまな機会を結びつけることを専門としています。私たちの使命は、両国のギャップを埋め、熟練した労働者や学生を日本の企業や教育機関に提供することです。私たちは文化交流を促進し、専門的な成長を支援し、外国と日本の間で持続的な関係を築くことを目指しています。"
          )}
        </Typography>
      </Container>

      {/* Services Section */}
      <Container sx={{ mt: 6, textAlign: 'center' }}>
        <Typography variant="h4" sx={{
          fontWeight: 700,
          mb: 3,
          color: '#333'
        }}>
          {t("home.servicesTitle", "私たちのサービス")}
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 3, mt: 4 }}>
          {/* Card 1 */}
          <Box sx={serviceCardStyle(-20)}>
            <Typography variant="h6" sx={{ fontWeight: 600, color: '#667eea', mb: 2 }}>
              {t("home.service1Title", "採用")}
            </Typography>
            <Typography sx={serviceTextStyle}>
              {t("home.service1", "日本で適切な機会を見つけるために熟練した労働者をサポートします。")}
            </Typography>
          </Box>

          {/* Card 2 */}
          <Box sx={serviceCardStyle(0)}>
            <Typography variant="h6" sx={{ fontWeight: 600, color: '#667eea', mb: 2 }}>
              {t("home.service2Title", "学生の紹介")}
            </Typography>
            <Typography sx={serviceTextStyle}>
              {t("home.service2", "日本で貴重な教育経験を得るために学生をサポートします。")}
            </Typography>
          </Box>

          {/* Card 3 */}
          <Box sx={serviceCardStyle(20)}>
            <Typography variant="h6" sx={{ fontWeight: 600, color: '#667eea', mb: 2 }}>
              {t("home.service3Title", "旅行ガイド")}
            </Typography>
            <Typography sx={serviceTextStyle}>
              {t("home.service3", "日本を訪れる旅行者へのガイダンスを提供します。")}
            </Typography>
          </Box>
        </Box>
      </Container>

      <Box sx={{ height: '50px' }} />
    </Box>
  );
};

// Stil helper-lar
const serviceCardStyle = (y) => ({
  width: { xs: '100%', sm: '48%', md: '30%' },
  padding: 7,
  backgroundColor: 'rgba(245, 245, 245, 0.9)',
  borderRadius: 3,
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  transform: `translateY(${y}px)`,
  '&:hover': {
    transform: `translateY(${y - 5}px) scale(1.05)`,
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
  },
});

const serviceTextStyle = {
  fontSize: '0.95rem',
  color: '#555',
  lineHeight: 1.8,
};

export default HomePage;
