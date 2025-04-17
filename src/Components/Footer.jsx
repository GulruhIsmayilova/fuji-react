import React from "react";
import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import PeopleIcon from '@mui/icons-material/People';
import InfoIcon from '@mui/icons-material/Info';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import InstagramIcon from '@mui/icons-material/Instagram';
import logo from "../images/logo.jpeg"

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        px: 2,
        backgroundColor: "#ffffff",
        color: "#000000",
        marginTop: 'auto',
        borderTop: '1px solid #ccc'
      }}
    >
      <Grid container spacing={4} justifyContent="space-between">

        {/* Left Section - Address and Map */}
        <Grid item xs={12} md={4} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Typography variant="h6" gutterBottom>
            住所
          </Typography>
          <List dense>
            <ListItem>
              <ListItemIcon>
                <LocationOnIcon sx={{ color: "#000000" }} />
              </ListItemIcon>
              <ListItemText primary="AZERBAIJAN、Baku city , Bina street , Sovxoz" />
            </ListItem>
          </List>
          <Box
            component="img"
            src="../images/bg_worldmap.png"
            alt="Xəritə"
            sx={{
              width: "80%",
              maxWidth: "250px",
              height: "120px",
              borderRadius: 1,
              mt: 2,
              objectFit: "contain",
              transition: "filter 0.3s ease-in-out",
              '&:hover': {
                filter: "drop-shadow(0 0 15px #555)",
              }
            }}
          />
        </Grid>

        {/* Center - Logo */}
        <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
          <Box
            sx={{
              mb: 2,
              display: "inline-block",
              padding: "0px",
              background: "transparent",
              borderRadius: "0px",
              transition: "transform 0.3s ease-in-out",
              '&:hover': {
                transform: "scale(1.1)",
              }
            }}
          >
            <img
              src={logo}
              alt="Logo"
              style={{ maxWidth: "150px", height: 'auto', width: '100%' }}
            />
          </Box>
          <Typography variant="body2">
            © {new Date().getFullYear()} 富士国際株式会社
          </Typography>
        </Grid>

        {/* Right Section - About and Contact */}
        <Grid item xs={12} md={4}>
          <Grid container spacing={4}>
            {/* About Us */}
            <Grid item xs={6}>
              <Typography variant="h6" gutterBottom>
                会社情報
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemIcon><InfoIcon sx={{ color: "#000000" }} /></ListItemIcon>
                  <ListItemText primary="会社概要" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><BusinessCenterIcon sx={{ color: "#000000" }} /></ListItemIcon>
                  <ListItemText primary="サービス" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><PeopleIcon sx={{ color: "#000000" }} /></ListItemIcon>
                  <ListItemText primary="チーム" />
                </ListItem>
              </List>
            </Grid>

            {/* Contact */}
            <Grid item xs={6}>
              <Typography variant="h6" gutterBottom>
                お問い合わせ
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemIcon><PhoneIcon sx={{ color: "#000000" }} /></ListItemIcon>
                  <ListItemText primary="+8190-9344-3541" /> {/* Güncellenmiş telefon numarası */}
                </ListItem>
                <ListItem>
                  <ListItemIcon><EmailIcon sx={{ color: "#000000" }} /></ListItemIcon>
                  <ListItemText primary="fujigateway.jp@gmail.com" /> {/* Güncellenmiş e-posta */}
                </ListItem>
                <ListItem>
                  <ListItemIcon><InstagramIcon sx={{ color: "#000000" }} /></ListItemIcon>
                  <ListItemText primary="@company" />
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
