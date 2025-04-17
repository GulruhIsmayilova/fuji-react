import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
// Əlavə et: səhifəni import et
import StudentIntroPage from './Components/StudentIntroPage';

import './i18n/i18n';
// Layout bileşenleri
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

// Sayfalar
import HomePage from './Components/HomePage';
import OurStrengths from './Components/OurStrengths';
import AisatsuPage from './Components/AisatsuPage';
import CompanyProfile from './Components/CompanyProfile';
import JinzaiPage from './Components/JinzaiPage';
import ContactPage from './Components/ContactPage';  // Import edilen ContactPage
import NotFound from './Components/NotFound';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          {/* Navbar */}
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

          {/* Sayfa içeriği */}
          <Box sx={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/strengths" element={<OurStrengths />} />
              <Route path="/aisatsu" element={<AisatsuPage />} />
              <Route path="/company-profile" element={<CompanyProfile />} />
              <Route path="/jinzai" element={<JinzaiPage />} />
              <Route path="/contact" element={<ContactPage />} />  {/* ContactPage sayfası eklendi */}
              <Route path="*" element={<NotFound />} />
              <Route path="/student-intro" element={<StudentIntroPage />} /> {/* ✅ Yeni route */}
            </Routes>
          </Box>

          {/* Footer */}
          <Footer darkMode={darkMode} />
        </Box>
      </ThemeProvider>
    </Router>
  );
};

export default App;
