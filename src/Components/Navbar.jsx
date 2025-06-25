import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
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
  Popper,
  Paper,
  ClickAwayListener,
  Menu,
  MenuItem
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LanguageIcon from "@mui/icons-material/Language";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import logoLight from "../images/logo.jpeg";
import logoDark from "../images/darkmood.jpeg";

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
      label: t("companyInfo"),
      submenu: [
        { label: t("greeting"), to: "/aisatsu" },
        { label: t("companyProfile"), to: "/company-profile" },
      ],
    },
    {
      label: t("strengths"),
      to: "/strengths",
    },
    {
      label: t("services"),
      submenu: [
        { label: t("recruitment"), to: "/jinzai" },
        { label: t("studentPlacement"), to: "/student-placement" },
        { label: t("travelGuide"), to: "/travel-guide" },
      ],
    },
    { label: t("blog"), to: "/blog" },
    { label: t("contact"), to: "/contact" },
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
        <Box
          component={Link}
          to="/"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: { xs: 32, sm: 80 },
            width: { xs: 90, sm: 120 },
            overflow: "hidden",
          }}
        >
          <Box
            component="img"
            src={darkMode ? logoDark : logoLight}
            alt="Logo"
            sx={{
              height: "100%",
              width: "auto",
              objectFit: "contain",
              cursor: "pointer",
            }}
          />
        </Box>

        {!isMobile ? (
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            {navItems.map((item, index) => (
              <Box key={index}>
                {item.submenu ? (
                  <Box
                    onMouseEnter={(e) => {
                      setHoveredMenu(index);
                      setAnchorEl(e.currentTarget);
                    }}
                    onMouseLeave={() => {
                      setHoveredMenu(null);
                      setAnchorEl(null);
                    }}
                  >
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
                    <Popper
                      open={hoveredMenu === index}
                      anchorEl={anchorEl}
                      placement="bottom-start"
                      disablePortal
                    >
                      <ClickAwayListener
                        onClickAway={() => {
                          setHoveredMenu(null);
                          setAnchorEl(null);
                        }}
                      >
                        <Paper
                          sx={{
                            mt: 1,
                            backgroundColor: darkMode ? "#111" : "#fff",
                            color: darkMode ? "#fff" : "#000",
                          }}
                          onMouseEnter={() => setHoveredMenu(index)}
                          onMouseLeave={() => {
                            setHoveredMenu(null);
                            setAnchorEl(null);
                          }}
                        >
                          {item.submenu.map((sub, subIndex) => (
                            <Button
                              key={subIndex}
                              component={Link}
                              to={sub.to}
                              onClick={() => {
                                setHoveredMenu(null);
                                setAnchorEl(null);
                              }}
                              sx={{
                                display: "block",
                                textAlign: "left",
                                color: darkMode ? "#fff" : "#000",
                                width: "100%",
                                textTransform: "none",
                                px: 2,
                                py: 1,
                              }}
                            >
                              {sub.label}
                            </Button>
                          ))}
                        </Paper>
                      </ClickAwayListener>
                    </Popper>
                  </Box>
                ) : (
                  <Button
                    component={Link}
                    to={item.to}
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

            <IconButton onClick={(e) => setLanguageMenu(e.currentTarget)} color="inherit">
              <LanguageIcon />
            </IconButton>

            <Menu
              anchorEl={languageMenu}
              open={Boolean(languageMenu)}
              onClose={() => setLanguageMenu(null)}
            >
              <MenuItem onClick={() => handleLanguageChange("jp")}>
                <img src="https://flagcdn.com/w40/jp.png" alt="jp" style={{ width: 20, marginRight: 8 }} />
                日本語
              </MenuItem>
              <MenuItem onClick={() => handleLanguageChange("az")}>
                <img src="https://flagcdn.com/w40/az.png" alt="az" style={{ width: 20, marginRight: 8 }} />
                Azərbaycan
              </MenuItem>
            </Menu>

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
                      {item.to ? (
                        <ListItem
                          button
                          component={Link}
                          to={item.to}
                          onClick={() => setDrawerOpen(false)}
                        >
                          <ListItemText primary={item.label} />
                        </ListItem>
                      ) : (
                        <ListItem>
                          <ListItemText primary={item.label} />
                        </ListItem>
                      )}

                      {item.submenu &&
                        item.submenu.map((sub, subIndex) => (
                          <ListItem
                            button
                            key={subIndex}
                            component={Link}
                            to={sub.to}
                            onClick={() => setDrawerOpen(false)}
                            sx={{ pl: 4 }}
                          >
                            <ListItemText primary={`› ${sub.label}`} />
                          </ListItem>
                        ))}

                      <Divider />
                    </Box>
                  ))}

                  <ListItem button onClick={() => handleLanguageChange("jp")}>
                    <img src="https://flagcdn.com/w40/jp.png" alt="jp" style={{ width: 20, marginRight: 8 }} />
                    日本語
                  </ListItem>
                  <ListItem button onClick={() => handleLanguageChange("az")}>
                    <img src="https://flagcdn.com/w40/az.png" alt="az" style={{ width: 20, marginRight: 8 }} />
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
