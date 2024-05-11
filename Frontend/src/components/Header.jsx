import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AdbIcon from '@mui/icons-material/Adb';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'rgb(49, 49, 48)' }}>
        <Toolbar>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'serif',
              fontWeight: 1000,
              letterSpacing: '.3rem',
              color: 'rgb(234, 94, 34)',
              textDecoration: 'none',
            }}
          >
            PerfumePalette
          </Typography>
          <Button 
            sx={{ 
              marginLeft: 'auto', 
              color: 'white' 
            }} 
            onClick={() => navigate("/")}
          >
            <ExitToAppIcon sx={{ ml: 1 }} />
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header;
