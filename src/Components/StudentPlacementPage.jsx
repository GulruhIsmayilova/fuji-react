import React, { useRef } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Container,
  IconButton,
  Stack,
  Tooltip,
  useTheme,
} from '@mui/material';

import SchoolIcon from '@mui/icons-material/School';
import AssignmentIcon from '@mui/icons-material/Assignment';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import first1Img from '../images/first1.jpg';
import secondImg from '../images/second.jpg';
import thirdImg from '../images/3univer.jfif';
import fourthImg from '../images/4univer.jpg';

import { useTranslation } from 'react-i18next';

const StudentPlacementPage = () => {
  const { t } = useTranslation();
  const scrollRef = useRef();
  const theme = useTheme();

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };

  const universities = t('studentPlacementPage.universities', { returnObjects: true }) || [];
  const services = t('studentPlacementPage.services', { returnObjects: true }) || [];

  const getTextColor = (primary = true) =>
    theme.palette.mode === 'dark' ? (primary ? '#ffffff' : '#cccccc') : primary ? 'text.primary' : 'text.secondary';

  const getBgColor = () =>
    theme.palette.mode === 'dark' ? '#000000' : '#ffffff';

  return (
    <Box sx={{ bgcolor: getBgColor(), minHeight: '100vh', pt: { xs: 16, md: 20 } }}>
      <Container maxWidth="lg" sx={{ color: getTextColor(true) }}>
        <Box textAlign="center" sx={{ mb: 8 }}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            {t('studentPlacementPage.mainTitle')}
          </Typography>
          <Typography variant="h5" sx={{ color: getTextColor(false) }}>
            {t('studentPlacementPage.mainSubtitle')}
          </Typography>
        </Box>

        <Box sx={{ position: 'relative', mb: 2 }}>
          <Box
            ref={scrollRef}
            sx={{
              overflowX: 'auto',
              scrollbarWidth: 'none',
              '&::-webkit-scrollbar': { display: 'none' },
            }}
          >
            <Grid
              container
              spacing={4}
              sx={{
                flexWrap: 'nowrap',
                width: 'max-content',
                minWidth: '100%',
                pb: 1,
              }}
            >
              {[first1Img, secondImg, thirdImg, fourthImg].map((img, index) => {
                const uni = universities[index];
                if (!uni?.title) return null;

                return (
                  <Grid item xs={12} sm={6} md={3} key={index} sx={{ minWidth: 280 }}>
                    <Card sx={{ height: '100%', textAlign: 'center', bgcolor: getBgColor(), color: getTextColor(true) }}>
                      <CardMedia
                        component="img"
                        height="300"
                        image={img}
                        alt={uni.title}
                        sx={{ objectFit: 'cover' }}
                      />
                      <CardContent>
                        <Typography variant="h5" fontWeight="bold" gutterBottom>
                          {uni.title}
                        </Typography>
                        {uni.subtitle && (
                          <Typography variant="body1" sx={{ color: getTextColor(false) }}>
                            {uni.subtitle}
                          </Typography>
                        )}
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Box>

          <Stack direction="row" justifyContent="center" spacing={2} sx={{ mt: 2 }}>
            <IconButton onClick={() => scroll('left')} sx={{ bgcolor: getBgColor(), boxShadow: 2 }}>
              <ArrowBackIosNewIcon sx={{ color: getTextColor(true) }} />
            </IconButton>
            <IconButton onClick={() => scroll('right')} sx={{ bgcolor: getBgColor(), boxShadow: 2 }}>
              <ArrowForwardIosIcon sx={{ color: getTextColor(true) }} />
            </IconButton>
          </Stack>
        </Box>

        <Box textAlign="center" sx={{ mb: 6, mt: 10 }}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            {t('studentPlacementPage.supportTitle')}
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {services.map((service, index) => {
            if (!service?.title) return null;

            const icons = [
              <AssignmentIcon key={0} sx={{ color: getTextColor(true) }} />,
              <SchoolIcon key={1} sx={{ color: getTextColor(true) }} />,
              <FlightTakeoffIcon key={2} sx={{ color: getTextColor(true) }} />,
              <HomeWorkIcon key={3} sx={{ color: getTextColor(true) }} />,
              <SupportAgentIcon key={4} sx={{ color: getTextColor(true) }} />,
            ];
            return (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    textAlign: 'center',
                    py: 5,
                    px: 3,
                    height: '100%',
                    bgcolor: getBgColor(),
                    color: getTextColor(true),
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 6,
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      mb: 2,
                      '& svg': {
                        transition: 'all 0.3s ease',
                        fontSize: 60,
                      },
                      '&:hover svg': {
                        transform: 'scale(1.3)',
                        color: 'primary.main',
                      },
                    }}
                  >
                    {icons[index]}
                  </Box>
                  <CardContent>
                    <Box display="flex" alignItems="center" justifyContent="center" gap={1} mb={1}>
                      <Typography variant="h6" fontWeight="bold">
                        {service.title}
                      </Typography>
                      {service.tooltip && (
                        <Tooltip title={service.tooltip}>
                          <InfoOutlinedIcon fontSize="small" sx={{ color: getTextColor(false), cursor: 'pointer' }} />
                        </Tooltip>
                      )}
                    </Box>
                    {service.description && (
                      <Typography variant="body1" sx={{ color: getTextColor(false) }}>
                        {service.description}
                      </Typography>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>

        {/* Space between cards and footer */}
        <Box sx={{ height: { xs: 60, md: 100 } }} />
      </Container>
    </Box>
  );
};

export default StudentPlacementPage;