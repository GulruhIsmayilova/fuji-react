import React from 'react';
import { Box, Typography, Button, Container, useTheme } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import backImage from '../images/lastback.png';

const HomePage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  const handleLearnMoreClick = () => {
    navigate('/aisatsu');
  };

  return (
    <Box sx={{ width: "100%", position: "relative", backgroundColor: theme.palette.background.default, color: theme.palette.text.primary }}>
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
          filter: isDarkMode ? 'brightness(0.9)' : 'none',
        }}
      >
        <Box sx={{ zIndex: 1 }}>
          <Typography variant="h2" sx={{
            fontWeight: 'bold',
            letterSpacing: '2px',
            color: '#ffffff',
            fontSize: { xs: '2rem', md: '3rem' }
          }}>
            {t("home.welcome", "Fuji Gatewayへようこそ")}
          </Typography>
          <Typography variant="h5" sx={{
            mt: 2,
            fontStyle: 'italic',
            color: '#ffffff',
            fontSize: { xs: '1.1rem', md: '1.5rem' }
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
          color: theme.palette.text.primary,
          fontSize: { xs: '1.8rem', md: '2.2rem' }
        }}>
          {t("home.aboutTitle", "私たちについて")}
        </Typography>
        <Typography variant="body1" sx={{
          fontSize: { xs: '1rem', md: '1.2rem' },
          lineHeight: 1.8,
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto',
          color: theme.palette.text.secondary
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
          color: theme.palette.text.primary,
          fontSize: { xs: '1.8rem', md: '2.2rem' }
        }}>
          {t("home.servicesTitle", "私たちのサービス")}
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 3, mt: 4 }}>
          {/* Card 1 */}
          <Box sx={serviceCardStyle(-20, isDarkMode)}>
            <Typography variant="h6" sx={{ fontWeight: 600, color: isDarkMode ? '#ffffff' : '#333333', mb: 2, fontSize: '1.2rem' }}>
              {t("home.service1Title", "採用支援")}
            </Typography>
            <Typography sx={serviceTextStyle(isDarkMode)}>
              {t("home.service1", "日本で適切な仕事を見つけるために支援します。")}
            </Typography>
          </Box>

          {/* Card 2 */}
          <Box sx={serviceCardStyle(0, isDarkMode)}>
            <Typography variant="h6" sx={{ fontWeight: 600, color: isDarkMode ? '#ffffff' : '#333333', mb: 2, fontSize: '1.2rem' }}>
              {t("home.service2Title", "学生紹介")}
            </Typography>
            <Typography sx={serviceTextStyle(isDarkMode)}>
              {t("home.service2", "学生が日本で価値ある教育経験を得られるよう支援します。")}
            </Typography>
          </Box>

          {/* Card 3 */}
          <Box sx={serviceCardStyle(20, isDarkMode)}>
            <Typography variant="h6" sx={{ fontWeight: 600, color: isDarkMode ? '#ffffff' : '#333333', mb: 2, fontSize: '1.2rem' }}>
              {t("home.service3Title", "旅行ガイド")}
            </Typography>
            <Typography sx={serviceTextStyle(isDarkMode)}>
              {t("home.service3", "日本を訪れる旅行者に専門的なガイドサービスを提供します。")}
            </Typography>
          </Box>
        </Box>
      </Container>

      <Box sx={{ height: '50px' }} />
    </Box>
  );
};

// Stil helper-lar
const serviceCardStyle = (y, isDarkMode) => ({
  width: { xs: '100%', sm: '48%', md: '30%' },
  padding: 7,
  backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : '#f5f5f5',
  borderRadius: 3,
  boxShadow: isDarkMode ? '0 4px 8px rgba(255, 255, 255, 0.05)' : '0 4px 8px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  transform: `translateY(${y}px)`,
  '&:hover': {
    transform: `translateY(${y - 5}px) scale(1.05)`,
    boxShadow: isDarkMode ? '0 6px 12px rgba(255, 255, 255, 0.1)' : '0 6px 12px rgba(0, 0, 0, 0.2)',
  },
});

const serviceTextStyle = (isDarkMode) => ({
  fontSize: '1rem',
  color: isDarkMode ? '#dddddd' : '#555555',
  lineHeight: 1.8,
});

export default HomePage;
