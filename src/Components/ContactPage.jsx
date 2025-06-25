import React from 'react';
import { Box, Grid, Typography, useTheme, IconButton, Stack } from '@mui/material';
import { Email, Phone, LocationOn, Facebook, Instagram } from '@mui/icons-material';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import bgImage from '../images/pngtree-a-graph-showing-graphing-statistics-image_13300948.jpg';
import tokyoBakuIcon from '../images/tokyobaku.jpg';
import { useTranslation } from 'react-i18next';

const ContactPage = () => {
  const theme = useTheme();
  const { t } = useTranslation();

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
              {t('contactPage.companyInfo')}
            </Typography>
            <Typography variant="body1" gutterBottom>{t('contactPage.name')}</Typography>
            <Typography variant="body1" gutterBottom>{t('contactPage.activity')}</Typography>
            <Typography variant="body1" gutterBottom>{t('contactPage.established')}</Typography>
            <Typography variant="body1" gutterBottom>{t('contactPage.location')}</Typography>
            <Typography variant="body1" gutterBottom>{t('contactPage.ceo')}</Typography>
          </Box>

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
              {t('contactPage.title')}
            </Typography>

            <Stack spacing={2} mt={2}>
              <Box display="flex" alignItems="center">
                <Phone sx={{ mr: 1 }} />
                <Typography>{t('contactPage.phone')}</Typography>
              </Box>

              <Box display="flex" alignItems="center">
                <Email sx={{ mr: 1 }} />
                <Typography>{t('contactPage.email')}</Typography>
              </Box>

              <Box display="flex" alignItems="center">
                <LocationOn sx={{ mr: 1 }} />
                <Typography>{t('contactPage.address')}</Typography>
              </Box>

              <Box display="flex" alignItems="center">
                <LocationOn sx={{ mr: 1 }} />
                <Typography>{t('contactPage.tokyoBakuOffice')}</Typography>
              </Box>
            </Stack>

            <Box mt={4} p={2} borderRadius={2} bgcolor="background.paper" boxShadow={2}>
              <Box display="flex" justifyContent="flex-start" alignItems="center" mb={2}>
                <img
                  src={tokyoBakuIcon}
                  alt="Tokyo-Baku icon"
                  style={{ width: 64, height: 64, borderRadius: '12px', objectFit: 'cover' }}
                />
              </Box>

              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                {t('contactPage.tokyoBakuTitle')}
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                {t('contactPage.tokyoBakuDescription1')}
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                {t('contactPage.tokyoBakuDescription2')}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>{t('contactPage.tokyoBakuSlogan')}</strong>
              </Typography>
            </Box>

            <Typography mt={4} mb={1} color="text.secondary">
              {t('contactPage.socialFollow')}
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton color="primary" href="https://www.facebook.com/profile.php?id=61564094514582" target="_blank">
                <Facebook />
              </IconButton>
              <IconButton color="secondary" href="https://www.instagram.com/tokyobaku/" target="_blank">
                <Instagram />
              </IconButton>
              <IconButton href="https://www.tiktok.com/@tokyobaku" target="_blank">
                <MusicNoteIcon />
              </IconButton>
            </Stack>
          </Box>
        </Grid>

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
