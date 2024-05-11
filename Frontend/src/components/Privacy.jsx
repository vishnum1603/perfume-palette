import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Header from './Header';
import Footer from './Footer';
import Fade from '@mui/material/Fade';
import Slide from '@mui/material/Slide';
import Grow from '@mui/material/Grow';

const Privacy = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <Container maxWidth="md" >
        <Box mt={4}>
          <Paper elevation={4} sx={{ padding: 5, backgroundColor: 'rgb(184, 209, 214)' }}>
            <Fade in={true} timeout={1000}>
              <Typography variant="h4" component="h1" gutterBottom>
                Privacy and Policy
              </Typography>
            </Fade>

            <Slide direction="up" in={true} timeout={1000}>
              <section>
                <Typography variant="h5" gutterBottom>
                  Privacy Policy
                </Typography>
                <Typography variant="body1" paragraph>
                  Your privacy is important to us. This Privacy Policy explains how we collect, use, and disclose your personal information when you use our fragrance creation studio application.
                </Typography>
              </section>
            </Slide>

            <Grow in={true} timeout={1000}>
              <section>
                <Typography variant="h5" gutterBottom>
                  Information We Collect
                </Typography>
                <Typography variant="body1" paragraph>
                  When you use our fragrance creation studio application, we may collect the following types of information:
                </Typography>
                <ul>
                  <li>
                    <strong>Personal Information:</strong> We may collect personal information such as your name, email address, and contact information when you create an account or contact us for support.
                  </li>
                  <li>
                    <strong>Fragrance Preferences:</strong> We may collect data about your fragrance preferences, such as the ingredients you choose and the fragrances you create within the application.
                  </li>
                  <li>
                    <strong>Device Information:</strong> We may automatically collect information about the device and software you use to access our application, including your device's unique identifiers, IP address, browser type, and operating system.
                  </li>
                  <li>
                    <strong>Usage Information:</strong> We may collect information about how you interact with our application, including the pages you visit, the features you use, and the actions you take.
                  </li>
                </ul>
                <Typography variant="body1" paragraph>
                  We may use this information to provide and improve our services, personalize your experience, and communicate with you about updates, promotions, and offers.
                </Typography>
              </section>
            </Grow>

            <Slide direction="up" in={true} timeout={1000}>
              <section>
                <Typography variant="h5" gutterBottom>
                  How We Use Your Information
                </Typography>
                <Typography variant="body1" paragraph>
                  We may use your information for the following purposes:
                </Typography>
                <ul>
                  <li>
                    <strong>Service Provision:</strong> To provide, maintain, and improve our fragrance creation studio application, including personalized fragrance recommendations.
                  </li>
                  <li>
                    <strong>Communication:</strong> To communicate with you, respond to your inquiries, and send important updates and notifications.
                  </li>
                  <li>
                    <strong>Analytics:</strong> To analyze usage patterns, track user interactions, and make data-driven decisions to enhance our application.
                  </li>
                  <li>
                    <strong>Legal Compliance:</strong> To comply with legal obligations and respond to lawful requests from authorities.
                  </li>
                </ul>
              </section>
            </Slide>

            <Grow in={true} timeout={1000}>
              <section>
                <Typography variant="h5" gutterBottom>
                  Data Security
                </Typography>
                <Typography variant="body1" paragraph>
                  We take data security seriously and employ industry-standard measures to protect your information from unauthorized access, disclosure, alteration, or destruction. However, please note that no method of transmission over the internet or electronic storage is entirely secure, and we cannot guarantee absolute security.
                </Typography>
              </section>
            </Grow>

            <Slide direction="up" in={true} timeout={1000}>
              <section>
                <Typography variant="h5" gutterBottom>
                  Your Choices and Rights
                </Typography>
                <Typography variant="body1" paragraph>
                  You have the following rights concerning your personal information:
                </Typography>
                <ul>
                  <li>
                    <strong>Access:</strong> You can request access to the personal information we hold about you.
                  </li>
                  <li>
                    <strong>Correction:</strong> You can request corrections to inaccurate or incomplete data.
                  </li>
                  <li>
                    <strong>Deletion:</strong> You can request the deletion of your personal information, subject to legal requirements.
                  </li>
                  <li>
                    <strong>Opt-Out:</strong> You can opt-out of receiving promotional communications from us by following the instructions provided in those communications.
                  </li>
                </ul>
                <Typography variant="body1" paragraph>
                  To exercise these rights or for any privacy-related inquiries, please contact us through the contact information provided in this policy.
                </Typography>
              </section>
            </Slide>

            <Grow in={true} timeout={1000}>
              <section>
                <Typography variant="h5" gutterBottom>
                  Changes to this Privacy Policy
                </Typography>
                <Typography variant="body1" paragraph>
                  We may update this Privacy Policy to reflect changes in our data practices or legal requirements. We will notify you of any significant changes through the application or by other means. Please review this policy periodically to stay informed about how we handle your data.
                </Typography>
              </section>
            </Grow>

            <Slide direction="up" in={true} timeout={1000}>
              <section>
                <Typography variant="h5" gutterBottom>
                  Contact Us
                </Typography>
                <Typography variant="body1" paragraph>
                  If you have any questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact us at [Insert Contact Information].
                </Typography>
              </section>
            </Slide>

            <Grow in={true} timeout={1000}>
              <section>
                <Typography variant="h5" gutterBottom>
                  Terms and Conditions
                </Typography>
                <Typography variant="body1" paragraph>
                  By using our application, you agree to abide by our Terms and Conditions. Please read them carefully before using the service.
                </Typography>
              </section>
            </Grow>
          </Paper>
        </Box>
      </Container>
      <div style={{ marginTop: '20px' }}>
        <Footer />
      </div>
    </div>
  );
};

export default Privacy;
