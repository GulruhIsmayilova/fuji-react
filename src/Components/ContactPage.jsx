import React from 'react';
import { Box, Grid, Typography, useTheme, IconButton, Stack } from '@mui/material';
import { Email, Phone, LocationOn, Facebook, Instagram, LinkedIn } from '@mui/icons-material';
import bgImage from '../images/pngtree-a-graph-showing-graphing-statistics-image_13300948.jpg';

const ContactPage = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        px: 2,
        py: 6,
        mt: { xs: 8, md: 10 },
      }}
    >
      <Box
        sx={{
          maxWidth: '1100px',
          width: '100%',
          backgroundColor: theme.palette.mode === 'dark' ? 'rgba(18, 18, 18, 0.95)' : 'rgba(255, 255, 255, 0.95)',
          borderRadius: 3,
          boxShadow: 6,
          overflow: 'hidden',
        }}
      >
        <Grid container sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
          {/* Company Info */}
          <Box
            sx={{
              flex: 1,
              backgroundColor: theme.palette.mode === 'dark' ? 'rgba(30, 30, 30, 0.9)' : 'rgba(245, 245, 245, 0.9)',
              p: 4,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h4" gutterBottom fontWeight="bold">
              会社情報
            </Typography>
            <Typography variant="body1" gutterBottom>商号：FUJI GATEWAY MMC</Typography>
            <Typography variant="body1" gutterBottom>事業内容：人材紹介、教育機関との連携</Typography>
            <Typography variant="body1" gutterBottom>設立：2024年12月</Typography>
            <Typography variant="body1" gutterBottom>拠点：アゼルバイジャン・バクー市</Typography>
            <Typography variant="body1" gutterBottom>代表者：アガエフ・シラジュ</Typography>
          </Box>

          {/* Contact Info (instead of form) */}
          <Box
            sx={{
              flex: 1,
              p: 4,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h5" gutterBottom fontWeight="bold">
              Bizimlə əlaqə
            </Typography>

            <Stack spacing={2} mt={2}>
              <Box display="flex" alignItems="center">
                <Phone sx={{ mr: 1 }} />
                <Typography>+994 50 123 45 67</Typography>
              </Box>

              <Box display="flex" alignItems="center">
                <Email sx={{ mr: 1 }} />
                <Typography>info@fujigateway.az</Typography>
              </Box>

              <Box display="flex" alignItems="center">
                <LocationOn sx={{ mr: 1 }} />
                <Typography>Bakı, Sovxoz, Bina qəsəbəsi</Typography>
              </Box>
            </Stack>

            <Typography mt={4} mb={1} color="text.secondary">
              Bizi sosial şəbəkələrdə izləyin:
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton color="primary" href="https://facebook.com" target="_blank">
                <Facebook />
              </IconButton>
              <IconButton color="secondary" href="https://instagram.com" target="_blank">
                <Instagram />
              </IconButton>
              <IconButton href="https://linkedin.com" target="_blank">
                <LinkedIn />
              </IconButton>
            </Stack>
          </Box>
        </Grid>

        {/* Google Map */}
        <Box sx={{ mt: 2, width: '100%', height: { xs: 350, md: 450 } }}>
          <iframe
            title="Baku Map"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: '0 0 12px 12px' }}
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.3449028200904!2d49.832705415264166!3d40.40926197936401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d7c5f20b84f%3A0x9e902e2b2e0f6a5b!2sBaku%2C%20Azerbaijan!5e0!3m2!1sen!2s!4v1712919000000"
          ></iframe>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactPage;
