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

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };

  const universities = t('studentPlacementPage.universities', { returnObjects: true });
  const services = t('studentPlacementPage.services', { returnObjects: true });

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      {/* Başlıq */}
      <Box textAlign="center" sx={{ mb: 8, pt: { xs: 4, md: 6 } }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ color: 'text.primary' }}>
          {t('studentPlacementPage.mainTitle')}
        </Typography>
        <Typography variant="h5" sx={{ color: 'text.secondary' }}>
          {t('studentPlacementPage.mainSubtitle')}
        </Typography>
      </Box>

      {/* Universitetlər karuseli */}
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
            {[first1Img, secondImg, thirdImg, fourthImg].map((img, index) => (
              <Grid item xs={12} sm={6} md={3} key={index} sx={{ minWidth: 280 }}>
                <Card sx={{ height: '100%', textAlign: 'center' }}>
                  <CardMedia
                    component="img"
                    height="300"
                    image={img}
                    alt={universities[index]?.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ color: 'text.primary' }}>
                      {universities[index]?.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                      {universities[index]?.subtitle}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Stack direction="row" justifyContent="center" spacing={2} sx={{ mt: 2 }}>
          <IconButton onClick={() => scroll('left')} sx={{ bgcolor: '#fff', boxShadow: 2 }}>
            <ArrowBackIosNewIcon />
          </IconButton>
          <IconButton onClick={() => scroll('right')} sx={{ bgcolor: '#fff', boxShadow: 2 }}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Stack>
      </Box>

      {/* Xidmətlər bölməsi */}
      <Box textAlign="center" sx={{ mb: 6, mt: 10 }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ color: 'text.primary' }}>
          {t('studentPlacementPage.supportTitle')}
        </Typography>
      </Box>

      <Grid container spacing={6} justifyContent="center">
        {services.map((service, index) => {
          const icons = [
            <AssignmentIcon />,
            <SchoolIcon />,
            <FlightTakeoffIcon />,
            <HomeWorkIcon />,
            <SupportAgentIcon />,
          ];
          return (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  textAlign: 'center',
                  py: 5,
                  px: 3,
                  height: '100%',
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
                      color: 'text.primary',
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
                    <Typography variant="h6" fontWeight="bold" sx={{ color: 'text.primary' }}>
                      {service.title}
                    </Typography>
                    <Tooltip title={service.tooltip}>
                      <InfoOutlinedIcon
                        fontSize="small"
                        sx={{ color: 'text.secondary', cursor: 'pointer' }}
                      />
                    </Tooltip>
                  </Box>
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default StudentPlacementPage;
