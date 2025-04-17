import React from 'react';
import { Box, Grid, Typography, TextField, Button } from '@mui/material';
import emailjs from 'emailjs-com';
import bgImage from '../images/pngtree-a-graph-showing-graphing-statistics-image_13300948.jpg';

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_fujigateway_gmail',       // ✅ Sənin SERVICE ID
      'template_contactform',            // ✅ TEMPLATE ID
      e.target,
      'user_T8mPLFjD1ABCDxyz'            // ✅ USER ID (Public Key)
    ).then(
      (result) => {
        alert('Mesaj gönderildi!');
      },
      (error) => {
        alert('Göndərilmədi. Xəta baş verdi.');
        console.error(error.text);
      }
    );

    e.target.reset();
  };

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
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
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
              backgroundColor: 'rgba(245, 245, 245, 0.9)',
              p: 4,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h4" gutterBottom fontWeight="bold">
              会社情報
            </Typography>
            <Typography variant="body1" gutterBottom>
              商号：FUJI GATEWAY MMC
            </Typography>
            <Typography variant="body1" gutterBottom>
              事業内容：人材紹介、教育機関との連携
            </Typography>
            <Typography variant="body1" gutterBottom>
              設立：2024年12月
            </Typography>
            <Typography variant="body1" gutterBottom>
              拠点：アゼルバイジャン・バクー市
            </Typography>
            <Typography variant="body1" gutterBottom>
              代表者：アガエフ・シラジュ
            </Typography>
          </Box>

          {/* Contact Form */}
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
              お問い合わせ
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off">
              <TextField
                label="お名前"
                name="name"
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="メールアドレス"
                name="email"
                type="email"
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="メッセージ"
                name="message"
                multiline
                rows={4}
                fullWidth
                margin="normal"
                required
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
              >
                送信
              </Button>
            </Box>
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
