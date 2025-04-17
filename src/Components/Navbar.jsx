import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Menu,
  MenuItem,
  IconButton,
  useMediaQuery,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Typography,
  Switch,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import TranslateIcon from "@mui/icons-material/Translate";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Link } from "react-router-dom"; // Link kullanarak yönlendirme yapıyoruz
import { useTranslation } from "react-i18next";

// Logo-lar
import logoLight from "../images/logo.jpeg";
import logoDark from "../images/darkmood.jpeg";
import LanguageIcon from "@mui/icons-material/Language";

const Navbar = ({ darkMode, setDarkMode }) => {
  const { t, i18n } = useTranslation();
  const [languageMenu, setLanguageMenu] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setLanguageMenu(null);
  };

  const navItems = [
    {
      label: t('companyInfo'),
      submenu: [
        { label: "挨拶", to: "/aisatsu" },
        { label: "会社概要", to: "/company-profile" },
      ],
    },
    {
      label: "当社の強み",
      to: "/strengths",
    },
    {
      label: "サービス内容", // Hizmetler ana menüsü
      submenu: [
        { label: "人材紹介", to: "/jinzai" }, // İnsan Kaynakları Tanıtımı (JinzaiPage)
        { label: "教育機関への学生紹介", to: "/student-placement" },
        { label: "旅行者の日本国内案内", to: "/travel-guide" },
      ],
    },
    { label: "ブログ", to: "/blog" },
    { label: "問い合わせ", to: "/contact" },
  ];

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: darkMode ? "#000" : "#fff",
        color: darkMode ? "#fff" : "#000",
        borderBottom: "1px solid #d4af37",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>
        {/* Logo */}
        <Box
          component={Link}
          to="/"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: { xs: 32, sm: 80 },
            width: { xs: 90, sm: 120 },
            overflow: "hidden", // make sure nothing overflows
          }}
        >
          <Box
            component="img"
            src={darkMode ? logoDark : logoLight}
            alt="Logo"
            sx={{
              height: "100%", // this ensures it fits inside the height limit
              width: "auto", // keep aspect ratio
              objectFit: "contain",
              cursor: "pointer",
            }}
          />
        </Box>
        {/* Menü Items */}
        {!isMobile ? (
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            {navItems.map((item, index) => (
              <Box
                key={index}
                onMouseEnter={(e) => {
                  setHoveredMenu(index);
                  setAnchorEl(e.currentTarget);
                }}
                onMouseLeave={() => {
                  setHoveredMenu(null);
                  setAnchorEl(null);
                }}
              >
                {item.submenu ? (
                  <>
                    <Button
                      sx={{
                        color: darkMode ? "#fff" : "#000",
                        fontWeight: 400,
                        textTransform: "none",
                        fontSize: 16,
                      }}
                    >
                      {item.label}
                    </Button>
                    <Menu
                      anchorEl={hoveredMenu === index ? anchorEl : null}
                      open={hoveredMenu === index}
                      onClose={() => {
                        setHoveredMenu(null);
                        setAnchorEl(null);
                      }}
                      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                      transformOrigin={{ vertical: "top", horizontal: "left" }}
                      MenuListProps={{
                        onMouseEnter: () => setHoveredMenu(index),
                        onMouseLeave: () => {
                          setHoveredMenu(null);
                          setAnchorEl(null);
                        },
                      }}
                      PaperProps={{
                        sx: {
                          backgroundColor: darkMode ? "#111" : "#fff",
                          color: darkMode ? "#fff" : "#000",
                        },
                      }}
                    >
                      {item.submenu.map((sub, subIndex) => (
                        <MenuItem
                          key={subIndex}
                          component={Link}
                          to={sub.to}
                          onClick={() => {
                            setHoveredMenu(null);
                            setAnchorEl(null);
                          }}
                        >
                          {sub.label}
                        </MenuItem>
                      ))}
                    </Menu>
                  </>
                ) : (
                  <Button
                    component={Link}
                    to={item.to} // Burada linki ekledik
                    sx={{
                      color: darkMode ? "#fff" : "#000",
                      fontWeight: 400,
                      textTransform: "none",
                      fontSize: 16,
                    }}
                  >
                    {item.label}
                  </Button>
                )}
              </Box>
            ))}

            {/* Dil değişim menüsü */}
            <IconButton
              onClick={(e) => setLanguageMenu(e.currentTarget)}
              color="inherit"
            >
              <LanguageIcon />
            </IconButton>

            <Menu
              anchorEl={languageMenu}
              open={Boolean(languageMenu)}
              onClose={() => setLanguageMenu(null)}
            >
              <MenuItem onClick={() => handleLanguageChange("jp")}>
                <img
                  src="https://flagcdn.com/w40/jp.png"
                  alt="jp"
                  style={{ width: 20, marginRight: 8 }}
                />
                日本語
              </MenuItem>
              <MenuItem onClick={() => handleLanguageChange("az")}>
                <img
                  src="https://flagcdn.com/w40/az.png"
                  alt="az"
                  style={{ width: 20, marginRight: 8 }}
                />
                Azərbaycan
              </MenuItem>
            </Menu>

            {/* Dark Mode */}
            <IconButton onClick={() => setDarkMode(!darkMode)} color="inherit">
              {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Box>
        ) : (
          <>
            <IconButton onClick={() => setDrawerOpen(true)} color="inherit">
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
            >
              <Box sx={{ width: 250, p: 2 }}>
                <List>
                  {navItems.map((item, index) => (
                    <Box key={index}>
                      <ListItem>
                        <ListItemText primary={item.label} />
                      </ListItem>
                      {item.submenu &&
                        item.submenu.map((sub, subIndex) => (
                          <ListItem
                            button
                            key={subIndex}
                            component={Link}
                            to={sub.to}
                            onClick={() => setDrawerOpen(false)}
                          >
                            <ListItemText primary={`› ${sub.label}`} />
                          </ListItem>
                        ))}
                      <Divider />
                    </Box>
                  ))}
                  <Divider />
                  <ListItem button onClick={() => handleLanguageChange("jp")}>
                    <img
                      src="https://flagcdn.com/w40/jp.png"
                      alt="jp"
                      style={{ width: 20, marginRight: 8 }}
                    />
                    日本語
                  </ListItem>
                  <ListItem button onClick={() => handleLanguageChange("az")}>
                    <img
                      src="https://flagcdn.com/w40/az.png"
                      alt="az"
                      style={{ width: 20, marginRight: 8 }}
                    />
                    Azərbaycan
                  </ListItem>
                  <ListItem>
                    <Typography>Dark Mode</Typography>
                    <Switch
                      checked={darkMode}
                      onChange={() => setDarkMode(!darkMode)}
                    />
                  </ListItem>
                </List>
              </Box>
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
