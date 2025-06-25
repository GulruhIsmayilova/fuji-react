import React from "react";
import {
  Box,
  Typography,
  Container,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useTranslation } from "react-i18next"; // ✅ Tərcümə

import firstImage from "../images/pexels-photo-1647919.jpeg";
import secondImage from "../images/87d844b057a1028ebe0786f3c9e2d08f.jpg";
import thirdImage from "../images/312cfb2a242594caa677b3af4a45e24b.jpg";
import processImage from "../images/pngtree-a-graph-showing-graphing-statistics-image_13300949.jpg";

const JinzaiPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { t } = useTranslation(); // ✅

  const strengths = [
    {
      title: t("recruitment-obj.card1Title", "外国人の人材採用の第一歩"),
      subtitle: t("recruitment-obj.card1Subtitle", "アゼルバイジャンには、高度な技術力と豊かな経験を持つ優秀な人材が多くいます。企業のニーズに最適なスキルを持つ人材を迅速かつ効率的に採用できるようサポートします。"),
      image: firstImage,
    },
    {
      title: t("recruitment-obj.card2Title", "コスト削減と優秀な人材の確保"),
      subtitle: t("recruitment-obj.card2Subtitle", "アゼルバイジャンの人材は、世界レベルのスキルを持ちながら採用コストを抑えられます。最適な人材の確保をサポートします。"),
      image: secondImage,
    },
    {
      title: t("recruitment-obj.card3Title", "グローバル競争力の強化"),
      subtitle: t("recruitment-obj.card3Subtitle", "アゼルバイジャンから優れた人材を採用し、国際市場での競争力を高めるお手伝いをします。"),
      image: thirdImage,
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: t("recruitment-obj.step1Title", "お問い合わせ"),
      text: t("recruitment-obj.step1Text", "メールまたは電話にてお問い合わせください。"),
    },
    {
      number: "2",
      title: t("recruitment-obj.step2Title", "お打ち合わせ"),
      text: t("recruitment-obj.step2Text", "募集内容について打ち合わせします。オンラインも可能。"),
    },
    {
      number: "3",
      title: t("recruitment-obj.step3Title", "求人募集スタート"),
      text: t("recruitment-obj.step3Text", "多様な方法で募集し、負担を軽減します。"),
    },
    {
      number: "4",
      title: t("recruitment-obj.step4Title", "面接・契約手続き"),
      text: t("recruitment-obj.step4Text", "面接と雇用サポートを行います。"),
    },
    {
      number: "5",
      title: t("recruitment-obj.step5Title", "就業開始"),
      text: t("recruitment-obj.step5Text", "勤務開始後もサポートいたします。"),
    },
  ];

  return (
    <Box sx={{ py: 10, backgroundColor: theme.palette.background.default }}>
      <Container>
        {/* Başlıq */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            mt: { xs: 10, md: 14 },
            mb: 4,
            fontSize: isMobile ? "2rem" : "2.7rem",
            color: theme.palette.text.primary,
            whiteSpace: "normal",
            wordBreak: "break-word",
            lineHeight: 1.4,
            maxWidth: "95%",
            mx: "auto",
          }}
        >
          {t("recruitment-obj.title", "外国人の人材採用をサポート")}
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{
            textAlign: "center",
            mb: 8,
            fontSize: isMobile ? "1.1rem" : "1.3rem",
            color: theme.palette.text.secondary,
          }}
        >
          {t("recruitment-obj.subtitle", "Introducing skilled individuals to your organization.")}
        </Typography>

        {/* Kartlar */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 6, mb: 10 }}>
          {strengths.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                alignItems: "center",
                backgroundColor: theme.palette.background.paper,
                borderRadius: "12px",
                border: `1px solid ${theme.palette.divider}`,
                overflow: "hidden",
                boxShadow: theme.shadows[3],
              }}
            >
              <Box
                sx={{
                  width: isMobile ? "100%" : "40%",
                  height: isMobile ? 200 : 250,
                  flexShrink: 0,
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
              <Box sx={{ p: 4, flex: 1 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    mb: 2,
                    fontSize: isMobile ? "1.2rem" : "1.5rem",
                    color: theme.palette.text.primary,
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    lineHeight: 1.8,
                    fontSize: isMobile ? "1rem" : "1.1rem",
                    color: theme.palette.text.secondary,
                  }}
                >
                  {item.subtitle}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        {/* サービスの流れ */}
        <Box sx={{ mb: 10 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              fontSize: isMobile ? "1.7rem" : "2rem",
              textAlign: "left",
              mb: 4,
              color: theme.palette.text.primary,
            }}
          >
            {t("recruitment-obj.processTitle", "サービスの流れ")}
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: 4,
              alignItems: "flex-start",
            }}
          >
            {/* Şəkil */}
            <Box
              sx={{
                flex: 1,
                minHeight: isMobile ? 220 : 450,
                borderRadius: 2,
                overflow: "hidden",
              }}
            >
              <img
                src={processImage}
                alt="Process"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>

            {/* Step-lər */}
            <Box sx={{ flex: 1 }}>
              {processSteps.map((step, index) => (
                <Box
                  key={index}
                  sx={{ display: "flex", alignItems: "flex-start", mb: 4 }}
                >
                  <Box
                    sx={{
                      minWidth: 50,
                      height: 50,
                      borderRadius: "50%",
                      backgroundColor: "#1976d2",
                      color: "#fff",
                      fontWeight: "bold",
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mr: 2,
                      flexShrink: 0,
                    }}
                  >
                    {step.number}
                  </Box>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        mb: 1,
                        fontSize: isMobile ? "1.1rem" : "1.3rem",
                        color: theme.palette.text.primary,
                      }}
                    >
                      {step.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        lineHeight: 1.8,
                        fontSize: isMobile ? "0.95rem" : "1rem",
                        color: theme.palette.text.secondary,
                      }}
                    >
                      {step.text}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default JinzaiPage;
