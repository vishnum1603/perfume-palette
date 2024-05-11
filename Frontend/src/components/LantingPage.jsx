import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SignUpForm from './SignupForm';
import SigninForm from './SigninForm';


const defaultTheme = createTheme();

export default function LantingPage() {
  const [showSignup, setShowSignup] = useState(false);

  const handleSignupClick = () => {
    setShowSignup(true);
  };

  const handleSignInClick = () => {
    setShowSignup(false);
  };

  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <Grid container component="main" sx={{ height: '95vh', width: '98%', margin: '2.5vh auto', borderRadius: '10px', overflow: 'hidden' }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                {showSignup ? 'Sign Up' : 'Sign In'}
              </Typography>

              {showSignup ? (
                <SignUpForm />
              ) : (
                <>
                  <SigninForm />
                  <Grid container>
                    <Grid item>
                      {showSignup ? (
                        <>
                          Already have an account?{' '}
                          <Link href="#" variant="body2" onClick={handleSignInClick}>
                            Sign In
                          </Link>
                        </>
                      ) : (
                        <>
                          Don't have an account?{' '}
                          <Link href="#" variant="body2" onClick={handleSignupClick}>
                            Sign Up
                          </Link>
                        </>
                      )}
                    </Grid>
                  </Grid>
                </>
              )}
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}
