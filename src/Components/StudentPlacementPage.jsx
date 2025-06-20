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

const universities = [
  {
    title: '東京大学',
    subtitle: '理工学・医学・人文科学',
    image: first1Img,
  },
  {
    title: '京都大学',
    subtitle: '伝統文化研究・先端技術',
    image: secondImg,
  },
  {
    title: '大阪大学',
    subtitle: '国際交流・ビジネススクール',
    image: thirdImg,
  },
  {
    title: '栄光日本語学校',
    subtitle: '日本語教育・文化体験・ビジネス日本語',
    image: fourthImg,
  },
];

const services = [
  {
    title: '出願書類作成',
    description: '専門チームによる書類チェック',
    icon: <AssignmentIcon />,
    tooltip: '出願書類の作成・添削を専門チームが支援します。',
  },
  {
    title: '奨学金申請',
    description: '300以上の奨学金制度に対応',
    icon: <SchoolIcon />,
    tooltip: '様々な奨学金制度の情報提供・申請サポートを行います。',
  },
  {
    title: 'ビザサポート',
    description: '取得率99%の安心サポート',
    icon: <FlightTakeoffIcon />,
    tooltip: 'ビザ取得の手続き全体を一貫して支援します。',
  },
  {
    title: '生活サポート',
    description: '寮・銀行口座開設など幅広く支援',
    icon: <HomeWorkIcon />,
    tooltip: '来日後の生活に必要なサポートを提供します。',
  },
  {
    title: '追加サポート',
    description: '24時間対応のカスタマーサポート',
    icon: <SupportAgentIcon />,
    tooltip: 'どんな質問にも対応するサポート体制をご用意しています。',
  },
];

const StudentPlacementPage = () => {
  const scrollRef = useRef();

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      {/* ヘッダー */}
      <Box textAlign="center" sx={{ mb: 8, pt: { xs: 4, md: 6 } }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          日本での進学を完全サポート
        </Typography>
        <Typography variant="h5" color="text.secondary">
          未来を切り開く大学選びをお手伝いします
        </Typography>
      </Box>

      {/* 大学カード 横スクロール */}
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
            {universities.map((uni, index) => (
              <Grid item xs={12} sm={6} md={3} key={index} sx={{ minWidth: 280 }}>
                <Card sx={{ height: '100%', textAlign: 'center' }}>
                  <CardMedia
                    component="img"
                    height="300"
                    image={uni.image}
                    alt={uni.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography variant="h5" fontWeight="bold" gutterBottom>
                      {uni.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {uni.subtitle}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* 下部のスクロール矢印 */}
        <Stack direction="row" justifyContent="center" spacing={2} sx={{ mt: 2 }}>
          <IconButton onClick={() => scroll('left')} sx={{ bgcolor: '#fff', boxShadow: 2 }}>
            <ArrowBackIosNewIcon />
          </IconButton>
          <IconButton onClick={() => scroll('right')} sx={{ bgcolor: '#fff', boxShadow: 2 }}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Stack>
      </Box>

      {/* サービスセクション */}
      <Box textAlign="center" sx={{ mb: 6, mt: 10 }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          フルサポートサービス
        </Typography>
      </Box>

      <Grid container spacing={6} justifyContent="center">
        {services.map((service, index) => (
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
                  transition: 'all 0.3s ease',
                  '&:hover svg': {
                    transform: 'scale(1.3)',
                    color: 'primary.main',
                  },
                  '& svg': {
                    transition: 'all 0.3s ease',
                    fontSize: 60,
                    color: 'text.secondary',
                  },
                }}
              >
                {service.icon}
              </Box>
              <CardContent>
                <Box display="flex" alignItems="center" justifyContent="center" gap={1} mb={1}>
                  <Typography variant="h6" fontWeight="bold">
                    {service.title}
                  </Typography>
                  <Tooltip title={service.tooltip}>
                    <InfoOutlinedIcon
                      fontSize="small"
                      sx={{ color: 'text.secondary', cursor: 'pointer' }}
                    />
                  </Tooltip>
                </Box>
                <Typography variant="body1" color="text.secondary">
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default StudentPlacementPage;
