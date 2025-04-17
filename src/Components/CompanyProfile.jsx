import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box, List, ListItem, ListItemText, Grid } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import vadasiraj from '../images/vadasiraj.jpeg';

const CompanyProfile = () => {
  return (
    <Box sx={{ width: '100%', bgcolor: '#ffffff', py: 8, px: { xs: 2, md: 10 }, maxWidth: '1000px', mx: 'auto' }}>
      <Typography variant="h4" gutterBottom>
        会社情報（Company Profile）
      </Typography>

      <Grid container spacing={4} alignItems="flex-start">
        {/* Image Left Side */}
        <Grid item xs={12} md={4}>
          <Box
            component="img"
            src={vadasiraj}
            alt="Aghayev Siraj"
            sx={{
              width: '100%',
              maxWidth: 250,
              height: 'auto',
              borderRadius: 2,
              boxShadow: 3,
              objectFit: 'cover',
              mx: 'auto'
            }}
          />
        </Grid>

        {/* Accordion Content */}
        <Grid item xs={12} md={8}>
          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>商号</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>FUJI GATEWAY MMC</Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>事業内容</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                人材紹介、教育機関への紹介、観光案内
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>設立</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>2024年12月</Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>拠点</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                AZERBAIJAN、Baku city , Bina street , Sovxoz
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>役員</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                <ListItem><ListItemText primary="代表者：AGHAYEV SIRAJ（アガエフ　シラジュ）" /></ListItem>
                <ListItem><ListItemText primary="顧問：和田純一（前駐アゼルバイジャン日本国大使）" /></ListItem>
                <ListItem><ListItemText primary="佐藤光行（元東電設計株式会社シマル火力発電所建設所長、アゼルバイジャン進歩勲章受章）" /></ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CompanyProfile;