import React from "react";
import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PeopleIcon from "@mui/icons-material/People";
import InfoIcon from "@mui/icons-material/Info";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import InstagramIcon from "@mui/icons-material/Instagram";
import "../styles/NeonGlow.css";
import { Link } from "react-router-dom";

// Şəkillər
import logoLight from "../images/logo.jpeg";
import logoDark from "../images/darkmood.jpeg";
import mapLight from "../images/bg_worldmap.png";
import mapDark from "../images/dark_worldmap.jpg";

const Footer = ({ darkMode }) => {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        px: 2,
        backgroundColor: darkMode ? "#121212" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
        marginTop: "auto",
        borderTop: `1px solid ${darkMode ? "#333" : "#ccc"}`,
      }}
    >
      <Grid container spacing={4} justifyContent="space-between">
        {/* Address & Map */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        >
          <Typography variant="h6" gutterBottom>
            住所
          </Typography>
          <List dense>
            <ListItem>
              <ListItemIcon>
                <LocationOnIcon sx={{ color: darkMode ? "#ffffff" : "#000000" }} />
              </ListItemIcon>
              <ListItemText primary="4 Hasanoglu Street, Narimanov District, Baku, Azerbaijan " />
            </ListItem>
          </List>

          {/* MAP with Neon Inner Glow */}
          <Box
            sx={{
              position: "relative",
              width: "80%",
              maxWidth: "250px",
              height: "120px",
              mt: 2,
              borderRadius: 1,
              overflow: "hidden",
              "&:hover .neon-overlay": {
                opacity: 1,
                filter: "blur(12px)",
              },
            }}
          >
            <Box
              component="img"
              src={darkMode ? mapDark : mapLight}
              alt="Map"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: 1,
                display: "block",
              }}
            />
            <Box
              className="neon-overlay"
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
                transition: "all 0.3s ease-in-out",
                opacity: 0.8,
                mixBlendMode: "screen",
                background: darkMode
                  ? "radial-gradient(circle at 50% 50%, rgba(0,255,255,0.2), transparent 65%)"
                  : "radial-gradient(circle at 50% 50%, rgba(255, 200, 0, 0.45), transparent 65%)",
                filter: "blur(10px)",
              }}
            />
          </Box>
        </Grid>

        {/* Logo with Link to Home */}
        <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Box
              sx={{
                mb: 2,
                display: "inline-block",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <img
                src={darkMode ? logoDark : logoLight}
                alt="Logo"
                style={{ maxWidth: "150px", height: "auto", width: "100%" }}
              />
            </Box>
          </Link>
          <Typography variant="body2">
            © {new Date().getFullYear()} 富士国際株式会社
          </Typography>
        </Grid>

        {/* About & Contact */}
        <Grid item xs={12} md={4}>
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <Typography variant="h6" gutterBottom>
                会社情報
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <InfoIcon sx={{ color: darkMode ? "#ffffff" : "#000000" }} />
                  </ListItemIcon>
                  <ListItemText primary="会社概要" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <BusinessCenterIcon sx={{ color: darkMode ? "#ffffff" : "#000000" }} />
                  </ListItemIcon>
                  <ListItemText primary="サービス" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PeopleIcon sx={{ color: darkMode ? "#ffffff" : "#000000" }} />
                  </ListItemIcon>
                  <ListItemText primary="チーム" />
                </ListItem>
              </List>
            </Grid>

            <Grid item xs={6}>
              <Typography variant="h6" gutterBottom>
                お問い合わせ
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <PhoneIcon sx={{ color: darkMode ? "#ffffff" : "#000000" }} />
                  </ListItemIcon>
                  <ListItemText primary="+8190-9344-3541" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <EmailIcon sx={{ color: darkMode ? "#ffffff" : "#000000" }} />
                  </ListItemIcon>
                  <ListItemText primary="fujigateway.jp@gmail.com" />
                </ListItem>
                <ListItem
                  component="a"
                  href="https://www.instagram.com/fujigate.way?igsh=MWVoYmRreGNzc2hubQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ textDecoration: "none", color: "inherit" }}
                >
                  <ListItemIcon>
                    <InstagramIcon sx={{ color: darkMode ? "#ffffff" : "#000000" }} />
                  </ListItemIcon>
                  <ListItemText primary="@fujigate.way" />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
