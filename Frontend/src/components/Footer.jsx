import React from 'react';
import Typography from '@mui/material/Typography';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        textAlign: 'center',
        backgroundColor: 'rgb(49, 49, 48)',
        color: 'rgb(222, 95, 41)',
        marginBottom: 'auto',
        overflow: 'auto',
        p: 4,
        maxWidth:'100%' ,
        left: 0,
      }}
    >
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <Typography
          variant="h6"
          noWrap
          component={Link}
          sx={{
            fontFamily: 'serif',
            fontWeight: 1000,
            letterSpacing: '.3rem',
            color: 'rgb(234, 94, 34)',
            textDecoration: 'none',
          }}
          onClick={() => navigate('/')}
        >
          PerfumePalette
        </Typography>
        <Stack direction="row" spacing={2}>
          <InstagramIcon
            sx={{ color: 'rgb(213, 39, 100)', cursor: 'pointer' }}
            onClick={() => window.open('https://www.instagram.com/')}
          />
          <TwitterIcon
            sx={{ color: 'rgb(0, 208, 255)', cursor: 'pointer' }}
            onClick={() => window.open('https://twitter.com/')}
          />
          <GitHubIcon
            sx={{ color: 'white', cursor: 'pointer' }}
            onClick={() => window.open('https://github.com/')}
          />
        </Stack>
        <Stack spacing={1}>
          <Link
            variant="body1"
            color="white"
            underline="none"
            onClick={() => navigate('/privacyAndPolicy')}
            sx={{ cursor: 'pointer' }}
          >
            Privacy Policy
          </Link>
          <Link
            variant="body1"
            color="white"
            underline="none"
            onClick={() => navigate('/termsAndCondition')}
            sx={{ cursor: 'pointer' }}
          >
            Terms and Conditions
          </Link>
          <Link
            variant="body1"
            color="white"
            underline="none"
            onClick={() => navigate('/faq')}
            sx={{ cursor: 'pointer' }}
          >
            FAQ
          </Link>
        </Stack>
      </Stack>
      <Typography variant="body2" color="white" mt={2}>
        &copy; {currentYear} PerfumePalette. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
