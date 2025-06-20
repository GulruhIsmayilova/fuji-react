import React from "react";
import { Box, Typography, Container, useTheme, useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";

const BlogPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        textAlign: "center",
        py: 10,
      }}
    >
      <Container>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            fontSize: isMobile ? "2rem" : "3rem",
            mb: 4,
          }}
        >
          Blog
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontSize: isMobile ? "1rem" : "1.3rem",
            color: theme.palette.text.secondary,
            mb: 2
          }}
        >
          {t("blog-obj.comingSoonTitle", "近日公開予定...")}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: isMobile ? "0.9rem" : "1.1rem",
            color: theme.palette.text.secondary,
          }}
        >
          {t("blog-obj.comingSoonText", "まもなく新しいコンテンツをお届けします。どうぞお楽しみに！")}
        </Typography>
      </Container>
    </Box>
  );
};

export default BlogPage;
