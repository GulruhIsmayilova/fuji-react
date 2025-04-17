import React from "react";
import {
  Box,
  Typography,
  Container,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import firstImage from "../images/pexels-photo-1647919.jpeg";
import secondImage from "../images/87d844b057a1028ebe0786f3c9e2d08f.jpg";
import thirdImage from "../images/312cfb2a242594caa677b3af4a45e24b.jpg";
import processImage from "../images/pngtree-a-graph-showing-graphing-statistics-image_13300949.jpg";

const strengths = [
  {
    title: "アゼルバイジャン人材採用の第一歩",
    subtitle:
      "アゼルバイジャンには、高度な技術力と豊かな経験を持つ優秀な人材が多くいます。私たちは、企業のニーズに最適なスキルを持つ人材を迅速かつ効率的に採用できるようサポートします。アゼルバイジャンでの採用活動を通じて、貴社の成長を加速させるための優れた人材確保を実現します。",
    image: firstImage,
  },
  {
    title: "アゼルバイジャン採用で効率的なコスト削減と優秀な人材を確保",
    subtitle:
      "アゼルバイジャンの人材は、世界レベルのスキルを持ちながら採用コストを抑えられます。当社は、コスト最適化と理想的な人材の確保をサポートし、面接や言語スキルのチェックも担当。企業様の負担を最小限に抑え、高いパフォーマンスを発揮できる人材を効率的に採用します。",
    image: secondImage,
  },
  {
    title: "アゼルバイジャン人材採用サポートでグローバル競争力を強化",
    subtitle:
      "グローバル化が進む現代において、多様なバックグラウンドを持つ人材の採用は競争力を高める重要な要素です。アゼルバイジャンから優れた人材を採用することにより、貴社のグローバルな競争力を強化し、国際市場での成功をサポートします。アゼルバイジャン人材の採用支援により、国際的なチーム作りをサポートします。",
    image: thirdImage,
  },
];

const processSteps = [
  {
    number: "1",
    title: "お問い合わせ",
    text: "メールまたは電話にて問い合わせください。",
  },
  {
    number: "2",
    title: "お打ち合わせ",
    text: "弊社担当者と打ち合わせの上、職種や募集条件を決定させていただきます。遠方のお客様には、お電話やオンラインでの打ち合わせも対応可能です。",
  },
  {
    number: "3",
    title: "求人募集のスタート",
    text: "様々な方法で人材募集を行い、御社にご負担をおかけすることはありません。",
  },
  {
    number: "4",
    title: "面接・その他手続き関係",
    text: "厳選された人材との面接調整や雇用契約のサポートを行います。",
  },
  {
    number: "5",
    title: "就業開始",
    text: "御社での勤務が開始されます。就業後に何かトラブルが発生した場合も、いつでも対応させていただきますのでご安心ください。",
  },
];

const JinzaiPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ py: 10, backgroundColor: "#ffffff" }}>
      <Container>
        {/* Başlıq */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            mb: 4,
            fontSize: isMobile ? "2rem" : "2.5rem",
            color: "#0d47a1",
            textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
          }}
        >
          アゼルバイジャン人採用をサポート
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            textAlign: "center",
            mb: 8,
            fontSize: isMobile ? "1rem" : "1.2rem",
          }}
        >
          Introducing skilled individuals to your organization.
        </Typography>

        {/* Kartlar */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 4, mb: 10 }}>
          {strengths.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                alignItems: "center",
                backgroundColor: "#ffffff",
                borderRadius: "12px",
                border: "1px solid #1976d2",
                overflow: "hidden",
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
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                  {item.title}
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                  {item.subtitle}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        {/* サービスの流れ Bölməsi */}
        <Box sx={{ mb: 10 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              fontSize: isMobile ? "1.5rem" : "1.8rem",
              textAlign: "left",
              mb: 4,
              ml: isMobile ? 0 : -2,
            }}
          >
            サービスの流れ
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: 4,
              alignItems: "flex-start",
              mx: isMobile ? 0 : -2,
            }}
          >
            {/* Sol tərəf: şəkil */}
            <Box
              sx={{
                flex: 1,
                minHeight: isMobile ? 220 : 450,
                borderRadius: 2,
                overflow: "hidden",
                pr: isMobile ? 0 : 1,
              }}
            >
              <img
                src={processImage}
                alt="サービスの流れ"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </Box>

            {/* Sağ tərəf: step-lər */}
            <Box sx={{ flex: 1, pl: isMobile ? 0 : 2 }}>
              {processSteps.map((step, index) => (
                <Box
                  key={index}
                  sx={{ display: "flex", alignItems: "flex-start", mb: 4 }}
                >
                  <Box
                    sx={{
                      minWidth: isMobile ? 45 : 60,
                      height: isMobile ? 45 : 60,
                      borderRadius: "50%",
                      backgroundColor: "#1976d2",
                      color: "#fff",
                      fontWeight: "bold",
                      fontSize: isMobile ? "1.2rem" : "1.5rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mr: 2,
                      flexShrink: 0,
                      boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                    }}
                  >
                    {step.number}
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        mb: 1,
                        fontSize: isMobile ? "1rem" : "1.2rem",
                      }}
                    >
                      {step.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        lineHeight: 1.8,
                        fontSize: isMobile ? "0.95rem" : "1rem",
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
