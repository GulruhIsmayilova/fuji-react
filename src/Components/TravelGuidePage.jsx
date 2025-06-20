import React from "react";
import { Container, Typography, Grid, Card, CardContent, CardMedia, Box } from "@mui/material";
import { FlightTakeoff, TempleBuddhist, Restaurant, Spa, LocalFlorist } from "@mui/icons-material";
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

// Slayd şəkil adları
const heroSlides = [
  "walpaper1.jpg",
  "imrt2.jpg",
  "osaka.jpg",
  "cherry.jpg",
  // buraya öz şəkillərini əlavə et
];

const HeroSectionWrapper = styled(Box)({
  width: "100%",
  minHeight: "500px",
  position: "relative",
  overflow: "hidden",
  color: "#fff",
  textAlign: "center",
});

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
  "&:hover svg": {
    color: "red",
    transform: "scale(1.2)",
  },
}));

const GalleryCard = styled(Card)({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  borderRadius: 16,
  overflow: "hidden",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.03)",
  },
  "&:hover .heart-icon": {
    opacity: 1,
    transform: "scale(1.2)",
  },
});

const HeartIcon = styled(Box)({
  position: "absolute",
  top: 8,
  right: 8,
  zIndex: 2,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "red",
  fontSize: 28,
  opacity: 0,
  transition: "opacity 0.3s, transform 0.3s",
  pointerEvents: "none",
});

const heroInfo = [
  { icon: <FlightTakeoff sx={{ fontSize: 40, color: "dodgerblue", mb: 1 }} />, title: "シティツアー" },
  { icon: <TempleBuddhist sx={{ fontSize: 40, color: "mediumseagreen", mb: 1 }} />, title: "文化体験" },
  { icon: <Restaurant sx={{ fontSize: 40, color: "orange", mb: 1 }} />, title: "伝統料理" },
  { icon: <Spa sx={{ fontSize: 40, color: "orchid", mb: 1 }} />, title: "温泉＆スパ" },
  { icon: <LocalFlorist sx={{ fontSize: 40, color: "crimson", mb: 1 }} />, title: "花祭り" },
];

const galleryItems = [
  { title: "Nara", description: "自由に歩く鹿と歴史ある寺院で有名な場所。", image: naraImage },
  { title: "Izu Peninsula", description: "美しい海岸と温泉で知られています。", image: izuImage },
  { title: "Nagasaki", description: "歴史的な出来事と文化交流の街。", image: nagasakiImage },
  { title: "Kamakura", description: "大仏と静かなビーチで有名な場所。", image: kamakuraImage },
  { title: "Furano", description: "ラベンダー畑で有名な美しい田園地帯。", image: furanoImage },
  { title: "Niseko", description: "雪山と世界クラスのスキーリゾート。", image: nisekoImage },
  { title: "Nagoya", description: "テクノロジーと文化の融合した都市。", image: nagoyaImage },
  { title: "Chubu Sangaku National Park", description: "自然の美しさと家族向けアクティビティが楽しめる公園。", image: chubuImage },
];

export default function TravelGuidePage() {
  return (
    <Box>
      {/* Hero Bölməsi */}
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
          <Typography variant="h2" component="h1" gutterBottom>
            日本を探検しよう
          </Typography>
          <Typography variant="h6" sx={{ mb: 4 }}>
            神秘的な都市と自然の美しさがあなたを待っています。
          </Typography>
        </Content>
      </HeroSectionWrapper>

      {/* Iconlu məlumatlar */}
      <Box sx={{ backgroundColor: "#fff", py: 5 }}>
        <Container maxWidth="lg">
          <Grid container spacing={2} justifyContent="center">
            {heroInfo.map((item, index) => (
              <Grid item xs={6} sm={4} md={2} key={index}>
                <InfoItem>
                  {item.icon}
                  <Typography variant="subtitle1" fontWeight="bold" sx={{ mt: 1 }}>
                    {item.title}
                  </Typography>
                </InfoItem>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Gallery Bölməsi */}
      <Box sx={{ backgroundColor: "#fafafa", py: 8 }}>
        <Container maxWidth="xl">
          <Typography variant="h4" align="center" gutterBottom>
            日本の見どころ
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
                    image={item.image}
                    alt={item.title}
                    sx={{ objectFit: "cover" }}
                  />
                  <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
                    <Typography variant="h6" gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
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
