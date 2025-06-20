import React from "react";
import {
  Box,
  Typography,
  Container,
  useTheme,
  useMediaQuery,
  Grid,
  Fade,
  Button,
  Stack,
  IconButton,
} from "@mui/material";
import {
  Instagram,
  MailOutline,
} from "@mui/icons-material";
import { FaTiktok, FaFacebookF } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import sirajPhoto from "../images/WhatsApp Image 2025-04-12 at 17.42.40.jpeg";

const AisatsuPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        py: { xs: 6, md: 10 },
        fontFamily: "'Helvetica Neue', sans-serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={6}
          alignItems="center"
          justifyContent="center"
          direction={isMobile ? "column" : "row"}
        >
          {/* Yazı Hissəsi */}
          <Grid item xs={12} md={6}>
            <Fade in timeout={1500}>
              <Box>
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: "#f44336",
                    fontWeight: 700,
                    letterSpacing: 1,
                    mb: 1,
                    textTransform: "uppercase",
                  }}
                >
                  {t("greeting-obj.highlight", "Get to know me")}
                </Typography>

                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    textTransform: "uppercase",
                    letterSpacing: 1,
                    color: theme.palette.mode === "dark" ? "#fff" : "#111",
                  }}
                >
                  {t("greeting-obj.title", "挨拶")}
                </Typography>

                <Typography
                  variant="subtitle1"
                  sx={{
                    fontStyle: "italic",
                    color: "#999",
                    mb: 3,
                  }}
                >
                  {t("greeting-obj.subtitle", "日本とアゼルバイジャンの架け橋")}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    fontSize: 17,
                    lineHeight: 1.8,
                    whiteSpace: "pre-line",
                    textAlign: "justify",
                    color: theme.palette.text.primary,
                  }}
                >
                  {t("greeting-obj.text", `
こんにちは。
アゼルバイジャン出身のアガエフシラジュです。日本で過ごした6年間の経験を通じて、日本の文化やビジネス環境に深く触れ、その魅力に強く引き寄せられました。この経験を元に、アゼルバイジャンと日本を繋ぐ架け橋となるべく、今の事業を立ち上げました。

私たちのミッションはシンプルです。アゼルバイジャンにおける日本文化への興味を持つ人々と、日本の企業や教育機関を繋げ、またアゼルバイジャンから日本を訪れる旅行者に対して、最高のガイドとサポートを提供すること。

両国の間に新たな交流の流れを生み出し、双方が持つ価値や魅力を次世代に繋げていく。そのために私たちは、常に革新的で、柔軟なアプローチを大切にしています。

この会社はただのビジネスではなく、アゼルバイジャンと日本の未来を形作るための一歩です。両国の文化が交わり、新しい可能性が生まれる瞬間を共に作り上げていきましょう。

どうぞ、今後ともよろしくお願いいたします。
                  `)}
                </Typography>
              </Box>
            </Fade>
          </Grid>

          {/* Şəkil Hissəsi */}
          <Grid item xs={12} md={6}>
            <Fade in timeout={1000}>
              <Box sx={{ textAlign: "center" }}>
                <img
                  src={sirajPhoto}
                  alt="Siraj"
                  style={{
                    width: "100%",
                    maxWidth: 400,
                    borderRadius: "10px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  }}
                />
              </Box>
            </Fade>
          </Grid>
        </Grid>

        {/* Sosial Şəbəkələr və Əlaqə */}
        <Box sx={{ textAlign: "center", mt: 8 }}>
          <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 3 }}>
            <IconButton
              color="inherit"
              href="https://www.facebook.com/profile.php?id=61564094514582"
              target="_blank"
            >
              <FaFacebookF size={22} />
            </IconButton>

            <IconButton
              color="inherit"
              href="https://www.tiktok.com/@tokyobaku"
              target="_blank"
            >
              <FaTiktok size={22} />
            </IconButton>

            <IconButton
              color="inherit"
              href="https://www.instagram.com/tokyobaku/"
              target="_blank"
            >
              <Instagram />
            </IconButton>
          </Stack>

          <Button
            variant="contained"
            color="error"
            startIcon={<MailOutline />}
            href="/contact"
          >
            {t("contact", "Contact Me")}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default AisatsuPage;
