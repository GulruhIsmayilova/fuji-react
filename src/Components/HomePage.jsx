import React from 'react';
import { Box, Typography, Button, Container } from "@mui/material";
import { useNavigate } from 'react-router-dom'; // react-router-dom-dan useNavigate hook-u istifadə edirik
import backImage from '../images/new back.png'; // Görseli import ettik

const HomePage = () => {
  const navigate = useNavigate(); // useNavigate hook-u istifadə edirik

  const handleLearnMoreClick = () => {
    navigate('/aisatsu'); // "Learn More" düyməsi basıldığında AisatsuPage-ə yönləndiririk
  };

  return (
    <Box sx={{ width: "100%", position: "relative" }}>
      {/* Hero Bölməsi - Tam genişlikdə şəkil */}
      <Box
        sx={{
          height: '70vh', // Şəkilin hündürlüyünü saxlayırıq
          backgroundImage: `url(${backImage})`, // Şəkili buradan istifadə edirik
          backgroundSize: 'cover', // Şəkili tam genişlikdə göstərəcək
          backgroundPosition: 'center center', // Şəkilin mərkəzə yerləşməsi
          backgroundRepeat: 'no-repeat', // Şəkilin təkrarlanmaması
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          filter: 'brightness(0.6)', // Görseli biraz daha karartarak metinlerin öne çıkmasını sağlıyoruz
        }}
      >
        {/* Hero Text */}
        <Box sx={{ zIndex: 1 }}>
          <Typography variant="h2" sx={{
            fontWeight: 'bold',
            textShadow: '2px 2px 6px rgba(0, 0, 0, 0.7)', 
            letterSpacing: '2px', 
            color: '#fff' 
          }}>
            富士ゲートウェイへようこそ
          </Typography>
          <Typography variant="h5" sx={{
            marginTop: 2, 
            fontStyle: 'italic', 
            textShadow: '1px 1px 5px rgba(0, 0, 0, 0.5)', 
            color: '#fff' 
          }}>
            日本とアゼルバイジャンの間で、熟練した労働者と学生をつなぐ架け橋。
          </Typography>

          {/* Action Button */}
          <Button
            variant="contained"
            sx={{
              marginTop: 4,
              background: "linear-gradient(135deg, #667eea, #4e66cc)", // İki rəngli gradient
              color: '#fff',
              padding: '12px 30px',
              fontSize: '1.2rem',
              "&:hover": {
                background: "linear-gradient(135deg, #4e66cc, #667eea)", // Hover zamanı gradient tərs olur
                boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)",
                transform: "scale(1.05)", // Hover zamanı düymə böyüyür
              },
            }}
            onClick={handleLearnMoreClick} // Learn More düyməsinə basıldığında yönləndirmə
          >
            詳細はこちら
          </Button>
        </Box>
      </Box>

      {/* Information Section */}
      <Container sx={{ marginTop: 6, paddingBottom: 6 }}>
        <Typography variant="h4" sx={{
          fontWeight: 700, 
          textAlign: 'center', 
          marginBottom: 3, 
          color: '#333'
        }}>
          私たちについて
        </Typography>
        <Typography variant="body1" sx={{
          fontSize: '1.2rem', 
          lineHeight: 1.8, 
          textAlign: 'center', 
          maxWidth: '800px', 
          margin: '0 auto', 
          color: '#555'
        }}>
          私たちは、アゼルバイジャンの才能ある人々と日本のさまざまな機会を結びつけることを専門としています。
          私たちの使命は、両国のギャップを埋め、熟練した労働者や学生を日本の企業や教育機関に提供することです。私たちは文化交流を促進し、専門的な成長を支援し、アゼルバイジャンと日本の間で持続的な関係を築くことを目指しています。
        </Typography>
      </Container>

      {/* Additional Sections */}
      <Container sx={{ marginTop: 6, textAlign: 'center' }}>
        <Typography variant="h4" sx={{
          fontWeight: 700, 
          marginBottom: 3, 
          color: '#333'
        }}>
          私たちのサービス
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 3, marginTop: 4 }}>
  {/* Kart 1 */}
  <Box sx={{
    width: { xs: '100%', sm: '48%', md: '30%' }, // Tam balanslı
    padding: 7, // Azca böyük
    backgroundColor: 'rgba(245, 245, 245, 0.9)',
    borderRadius: 3,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    transform: 'translateY(-20px)',
    '&:hover': {
      transform: 'translateY(-25px) scale(1.05)',
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
    },
  }}>
    <Typography variant="h6" sx={{ fontWeight: 600, color: '#667eea', mb: 2 }}>
      採用
    </Typography>
    <Typography sx={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.8 }}>
      日本で適切な機会を見つけるために熟練した労働者をサポートします。
    </Typography>
  </Box>

  {/* Kart 2 */}
  <Box sx={{
    width: { xs: '100%', sm: '48%', md: '30%' },
    padding: 7,
    backgroundColor: 'rgba(245, 245, 245, 0.9)',
    borderRadius: 3,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    transform: 'translateY(0px)',
    '&:hover': {
      transform: 'translateY(-5px) scale(1.05)',
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
    },
  }}>
    <Typography variant="h6" sx={{ fontWeight: 600, color: '#667eea', mb: 2 }}>
      学生の紹介
    </Typography>
    <Typography sx={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.8 }}>
      日本で貴重な教育経験を得るために学生をサポートします。
    </Typography>
  </Box>

  {/* Kart 3 */}
  <Box sx={{
    width: { xs: '100%', sm: '48%', md: '30%' },
    padding: 7,
    backgroundColor: 'rgba(245, 245, 245, 0.9)',
    borderRadius: 3,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    transform: 'translateY(20px)',
    '&:hover': {
      transform: 'translateY(15px) scale(1.05)',
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
    },
  }}>
    <Typography variant="h6" sx={{ fontWeight: 600, color: '#667eea', mb: 2 }}>
      旅行ガイド
    </Typography>
    <Typography sx={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.8 }}>
      日本を訪れる旅行者へのガイダンスを提供します。
    </Typography>
  </Box>
</Box>


      </Container>

      {/* Add margin between "Our Services" section items */}
      <Box sx={{ height: '50px' }} /> {/* boşluq əlavə etdim */}
    </Box>
  );
};

export default HomePage;
