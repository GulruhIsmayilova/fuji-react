import React from "react";
import { useTranslation } from "react-i18next";
import {
  Container, Typography, Grid, Card, CardContent, CardMedia, Box, useTheme, useMediaQuery
} from "@mui/material";
import {
  FlightTakeoff, TempleBuddhist, Restaurant, Spa, LocalFlorist
} from "@mui/icons-material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { styled } from "@mui/material/styles";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import naraImage from "../images/nara.jpg";
import izuImage from "../images/izu.jpg";
import nagasakiImage from "../images/nagasaki.jpeg";
import kamakuraImage from "../images/kamaura.jpg";
import furanoImage from "../images/furano.jfif";
import nisekoImage from "../images/niseko.jpg";
import nagoyaImage from "../images/nagoya.jpg";
import chubuImage from "../images/park.jfif";

const heroSlides = ["walpaper1.jpg", "imrt2.jpg", "osaka.jpg", "cherry.jpg"];

const HeroSectionWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: "500px",
  position: "relative",
  overflow: "hidden",
  color: "#fff",
  textAlign: "center",
  backgroundColor: theme.palette.mode === 'dark' ? '#000' : '#fff'
}));

const Overlay = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  zIndex: 1,
});

const Content = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 2,
});

const InfoItem = styled(Box)(({ theme }) => ({
  textAlign: "center",
  padding: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  transition: "transform 0.3s, color 0.3s",
  color: theme.palette.text.primary,
  "&:hover svg": {
    color: theme.palette.mode === 'dark' ? 'red' : 'red',
    transform: "scale(1.2)",
  },
}));

const GalleryCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  borderRadius: 16,
  overflow: "hidden",
  transition: "transform 0.3s ease",
  backgroundColor: theme.palette.mode === 'dark' ? '#1a1a1a' : '#fff',
  color: theme.palette.text.primary,
  "&:hover": {
    transform: "scale(1.03)",
  },
  "&:hover .heart-icon": {
    opacity: 1,
    transform: "scale(1.2)",
  },
}));

const HeartIcon = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 8,
  right: 8,
  zIndex: 2,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.mode === 'dark' ? '#ff4d4d' : 'red',
  fontSize: 28,
  opacity: 0,
  transition: "opacity 0.3s, transform 0.3s",
  pointerEvents: "none",
}));

const iconMap = (theme) => ([
  <FlightTakeoff sx={{ fontSize: 46, color: theme.palette.info.main, mb: 1 }} />,
  <TempleBuddhist sx={{ fontSize: 46, color: theme.palette.success.main, mb: 1 }} />,
  <Restaurant sx={{ fontSize: 46, color: theme.palette.warning.main, mb: 1 }} />,
  <Spa sx={{ fontSize: 46, color: theme.palette.secondary.main, mb: 1 }} />,
  <LocalFlorist sx={{ fontSize: 46, color: theme.palette.error.main, mb: 1 }} />,
]);

const imageList = [
  naraImage,
  izuImage,
  nagasakiImage,
  kamakuraImage,
  furanoImage,
  nisekoImage,
  nagoyaImage,
  chubuImage,
];

export default function TravelGuidePage() {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const rawHeroInfo = t("travelGuidePage.iconItems", { returnObjects: true });
  const heroInfo = Array.isArray(rawHeroInfo) ? rawHeroInfo : [];

  const rawGalleryItems = t("travelGuidePage.gallery", { returnObjects: true });
  const galleryItems = Array.isArray(rawGalleryItems) ? rawGalleryItems : [];

  return (
    <Box sx={{ bgcolor: theme.palette.mode === 'dark' ? '#000' : '#fff', color: theme.palette.text.primary }}>
      <HeroSectionWrapper>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          style={{ width: "100%", height: "500px" }}
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  backgroundImage: `url(/src/images/${slide})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                  height: "500px",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Overlay />
        <Content>
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontSize: isMobile ? "2rem" : "3.2rem" }}>
            {t("travelGuidePage.heroHeadline")}
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, fontSize: isMobile ? "1rem" : "1.2rem" }}>
            {t("travelGuidePage.subtitle")}
          </Typography>
        </Content>
      </HeroSectionWrapper>

      <Box sx={{ backgroundColor: theme.palette.background.default, py: 5 }}>
        <Container maxWidth="lg">
          <Grid container spacing={2} justifyContent="center">
            {heroInfo.map((item, index) => (
              <Grid item xs={6} sm={4} md={2} key={index}>
                <InfoItem>
                  {iconMap(theme)[index]}
                  <Typography variant="subtitle1" fontWeight="bold" sx={{ mt: 1, fontSize: isMobile ? "0.9rem" : "1.05rem" }}>
                    {item.title}
                  </Typography>
                </InfoItem>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ backgroundColor: theme.palette.mode === 'dark' ? '#111' : '#fafafa', py: 8 }}>
        <Container maxWidth="xl">
          <Typography variant="h4" align="center" gutterBottom sx={{ fontSize: isMobile ? "1.8rem" : "2.2rem" }}>
            {t("travelGuidePage.title")}
          </Typography>
          <Grid container spacing={4} justifyContent="center" sx={{ mt: 3 }}>
            {galleryItems.map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <GalleryCard>
                  <HeartIcon className="heart-icon">
                    <FavoriteBorderIcon sx={{ fontSize: 28 }} />
                  </HeartIcon>
                  <CardMedia
                    component="img"
                    height="160"
                    image={imageList[index]}
                    alt={item.title}
                    sx={{ objectFit: "cover" }}
                  />
                  <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
                    <Typography variant="h6" gutterBottom sx={{ fontSize: isMobile ? "1rem" : "1.2rem" }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary, fontSize: isMobile ? "0.9rem" : "1rem" }}>
                      {item.description}
                    </Typography>
                  </CardContent>
                </GalleryCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
