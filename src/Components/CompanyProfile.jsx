import React from 'react';
import { Typography, Box, Grid, Paper, List, ListItem, ListItemText } from '@mui/material';
import vadasiraj from '../images/ofis.jpg';

const CompanyProfile = () => {
  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: 'background.default',
        pt: 4,
        pb: 8,
        px: { xs: 2, md: 6 },
        maxWidth: '1200px',
        mx: 'auto',
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        sx={{
          fontWeight: 'bold',
          color: 'text.primary',
          mb: 5,
          pb: 1,
          borderBottom: 2,
          borderBottomColor: 'divider',
        }}
      >
        会社情報（Company Profile）
      </Typography>

      <Grid container spacing={4} alignItems="flex-start">
        {/* Left Image */}
        <Grid item xs={12} md={4}>
          <Box
            component="img"
            src={vadasiraj}
            alt="Aghayev Siraj"
            sx={{
              width: '100%',
              maxWidth: 300,
              borderRadius: 3,
              boxShadow: 4,
              display: 'block',
              mx: 'auto',
            }}
          />
        </Grid>

        {/* Right Text Content */}
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ p: { xs: 3, md: 4 }, bgcolor: 'background.paper' }}>
            <Box mb={3}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'text.primary' }}>商号</Typography>
              <Typography color="text.secondary">FUJI GATEWAY MMC</Typography>
            </Box>

            <Box mb={3}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'text.primary' }}>事業内容</Typography>
              <Typography color="text.secondary">人材紹介、教育機関への紹介、観光案内</Typography>
            </Box>

            <Box mb={3}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'text.primary' }}>設立</Typography>
              <Typography color="text.secondary">2024年12月</Typography>
            </Box>

            <Box mb={3}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'text.primary' }}>拠点</Typography>
              <Typography color="text.secondary">AZERBAIJAN、Baku city , Bina street , Sovxoz</Typography>
            </Box>

            <Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'text.primary' }}>役員</Typography>
              <List dense>
                <ListItem>
                  <ListItemText primary="代表者：AGHAYEV SIRAJ（アガエフ　シラジュ）" primaryTypographyProps={{ color: 'text.secondary' }} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="顧問：和田純一（前駐アゼルバイジャン日本国大使）" primaryTypographyProps={{ color: 'text.secondary' }} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="佐藤光行（元東電設計株式会社シマル火力発電所建設所長、アゼルバイジャン進歩勲章受章）" primaryTypographyProps={{ color: 'text.secondary' }} />
                </ListItem>
              </List>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CompanyProfile;
