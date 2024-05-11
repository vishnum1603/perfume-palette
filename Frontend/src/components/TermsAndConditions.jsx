import React from 'react';
import { animated } from 'react-spring';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Header from './Header';
import Footer from './Footer';

const TermsAndConditions = () => {

  return (
    <>
      <div style={{ backgroundColor: 'rgb(184, 209, 214)' }}>
        <Header />
        <Container sx={{ minHeight: '80vh', marginBottom: '20px' }}>
          <Box sx={{ mt: 4 }}>
            <h1 style={{textAlign:'center'}}>Terms and Conditions</h1>
            <p style={{textAlign:'center'}}>
              Welcome to PerfumePalette! Please read these terms and conditions carefully before using our services.
            </p>

            <animated.div >
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing or using our application, you agree to comply with and be bound by these terms and conditions. If you do not agree with any part of these terms, please do not use our services.
              </p>
              <h2>2. User Responsibilities</h2>
              <p>
                - You must be at least 18 years old to use our application.
                <br />
                - You agree to provide accurate and up-to-date information.
                <br />
                - You are responsible for maintaining the confidentiality of your account and password.
              </p>
              <h2>3. Intellectual Property</h2>
              <p>
                All content and materials on this application, including but not limited to text, graphics, logos, and images, are the intellectual property of PerfumePalette and are protected by copyright and other intellectual property laws.
              </p>
              <h2>4. Disclaimer</h2>
              <p>
                PerfumePalette makes no warranties or representations about the accuracy or completeness of the content on this application. We are not responsible for any errors or omissions, or for any loss or damage incurred as a result of using our services.
              </p>
              <h2>5. Changes to Terms</h2>
              <p>
                PerfumePalette reserves the right to update or modify these terms and conditions at any time. It is your responsibility to check this page periodically for changes.
              </p>
              <h2>6. Contact Us</h2>
              <p>
                If you have any questions or concerns about these terms and conditions, please contact us at PerfumePalette.
              </p>
            </animated.div>
          </Box>
        </Container>
        <div><Footer /></div>
      </div>
    </>
  );
}

export default TermsAndConditions;
