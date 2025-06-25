import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography, Box, Paper, List, ListItem, ListItemText } from '@mui/material';
import vadasiraj from '../images/ofis.jpg';

const CompanyProfile = () => {
  const { t } = useTranslation();
  const executives = t('companyProfilePage.executives', { returnObjects: true });

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
        {t('companyProfilePage.title')}
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 4,
          alignItems: 'flex-start',
        }}
      >
        {/* Şəkil */}
        <Box
          component="img"
          src={vadasiraj}
          alt="Siraj Aghayev"
          sx={{
            width: '100%',
            maxWidth: 300,
            borderRadius: 3,
            boxShadow: 4,
            mx: { xs: 'auto', md: 0 },
          }}
        />

        {/* Mətn Bloku */}
        <Paper elevation={3} sx={{ p: { xs: 3, md: 4 }, flex: 1, bgcolor: 'background.paper' }}>
          {[
            { label: 'companyNameLabel', value: 'companyName' },
            { label: 'businessFieldsLabel', value: 'businessFields' },
            { label: 'foundedLabel', value: 'founded' },
            { label: 'locationLabel', value: 'location' },
          ].map((item, index) => (
            <Box mb={3} key={index}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                {t(`companyProfilePage.${item.label}`)}
              </Typography>
              <Typography color="text.secondary">
                {t(`companyProfilePage.${item.value}`)}
              </Typography>
            </Box>
          ))}

          <Box>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
              {t('companyProfilePage.executivesTitle')}
            </Typography>
            <List dense>
              {Array.isArray(executives) &&
                executives.map((person, index) => (
                  <ListItem key={index}>
                    <ListItemText
                      primary={person}
                      primaryTypographyProps={{ color: 'text.secondary' }}
                    />
                  </ListItem>
                ))}
            </List>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default CompanyProfile;
