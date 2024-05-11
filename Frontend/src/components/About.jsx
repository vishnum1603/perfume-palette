import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Link, Slide, Zoom } from '@mui/material';
import Header from './Header';
import Footer from './Footer';

const About = () => {
  return (
    <>
      <Header />
      <Container sx={{ minHeight: '80vh' , backgroundColor:'whitesmoke' , marginBottom:'20px'}}>
        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" gutterBottom>
            About Our Custom Fragrance Creation Studio
          </Typography>
          <Typography variant="body1">
            Welcome to PerfumePalette – your destination for personalized fragrances that tell your unique story. We're passionate about helping you craft scents that evoke memories, emotions, and individuality.
          </Typography>
          <Typography variant="body1">
            At PerfumePalette, we believe that fragrance is an art form, and every bottle we create is a masterpiece. Our experienced perfumers blend science, creativity, and your inspiration to craft custom scents that are as one-of-a-kind as you are.
          </Typography>
          <Typography variant="body1">
            What sets us apart:
          </Typography>
          <ul>
            <li>
              <Typography variant="body1">
                <strong>Personalized Fragrances:</strong> Our process begins with a personal consultation where we get to know you, your preferences, and your memories. We then create a fragrance that captures your essence.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                <strong>Quality Ingredients:</strong> We source the finest ingredients from around the world to ensure that your fragrance is of the highest quality.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                <strong>Environmental Responsibility:</strong> We're committed to sustainability and strive to minimize our environmental impact through responsible sourcing and packaging.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                <strong>Our Team:</strong> Meet our team of skilled perfumers and artisans who pour their expertise and passion into every fragrance.
              </Typography>
            </li>
          </ul>
          <Typography variant="body1">
            Thank you for choosing PerfumePalette for your fragrance journey. We look forward to creating a scent that will accompany you on your life's adventures.
          </Typography>
          <Typography variant="body1">
            If you have any questions or would like to schedule a consultation, please don't hesitate to <Link href="/contact">contact us</Link>.
          </Typography>
        </Box>
        <Box mt={6}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Slide direction="up" in timeout={1000}>
                <Paper elevation={3} sx={{ p: 2, textAlign: 'center', height: '100%', backgroundColor: 'rgb(184, 209, 214)' }}>
                  <Typography variant="h5" gutterBottom>
                    Our Mission
                  </Typography>
                  <Typography variant="body2">
                    At PerfumePalette, our mission is to create personalized fragrances that not only smell exquisite but also tell the unique stories of our clients. We're dedicated to enhancing your individuality through the art of scent.
                  </Typography>
                </Paper>
              </Slide>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Zoom in timeout={1000}>
                <Paper elevation={3} sx={{ p: 2, textAlign: 'center', height: '100%', backgroundColor: 'rgb(184, 209, 214)' }}>
                  <Typography variant="h5" gutterBottom>
                    Our Team
                  </Typography>
                  <Typography variant="body2">
                    Meet our team of passionate perfumers and artisans who bring creativity and expertise to every fragrance they create. We're here to ensure that your scent is a masterpiece.
                  </Typography>
                </Paper>
              </Zoom>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Box mt="auto">
        <Footer />
      </Box>
    </>
  );
};

export default About;
