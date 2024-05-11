import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import AdbIcon from '@mui/icons-material/Adb';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import { CarousalActive } from './CarousalActive';
import image1 from '../custom1.jpg';
import image2 from '../custom2.jpg';
import image3 from '../custom3.jpg';
import image4 from '../custom4.jpg';
import image5 from '../custom5.jpg';
import image6 from '../custom6.jpg';
import image7 from '../custom7.jpg';
import image8 from '../custom8.jpg';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const cardData = [
  {
    id: 1,
    title: 'Floral Aldehyde',
    description: 'Floral Aldehyde is an Iconic fragrance known for its sophisticated blend of floral and aldehyde. It exudes timeless elegance and luxury and femininity.',
    image: image1,
  },
  {
    id: 2,
    title: "Dior J'adore",
    description: "J'adore is a modern and opulent floral fragrance with a radiant and sensuous character. This perfume embodies feminine grace, tuberose, orchid and allure.",
    image: image2,
  },
  {
    id: 3,
    title: "Creed Aventus",
    description: "Aventus is a contemporary and masculine fragrance known for its fresh and fruity opening combined with a rich woody base oakmoss, jasmine and ambergris.",
    image: image3,
  },
  {
    id: 4,
    title: "Colonia",
    description: "Colonia is a classic Italian fragrance known for its timeless blend of citrus refreshing burst of lemon, Bulgarian rose, sweet orange, bergamot and aromatic.",
    image: image4,
  },
  {
    id: 5,
    title: "Byredo Gypsy Water",
    description: "Gypsy Water is a bohemian and woody fragrance known for its blend of earthy, citrus, bergamot, lemon, pepper, amber and woody notes.",
    image: image5,
  },
  {
    id: 6,
    title: "Gucci Bloom",
    description: "Gucci Bloom is a modern and rich white floral fragrance. It features dominant notes of tuberose, jasmine, creating vitality and intoxicating scent.",
    image: image6,
  },
  {
    id: 7,
    title: "Tom Ford Black Orchid",
    description: "Black Orchid is a luxurious and mysterious fragrance known for its opulent blend of dark florals and rich, black truffle, bergamot and earthy notes.",
    image: image7,
  },
  {
    id: 8,
    title: "Guerlain Shalimar",
    description: "Shalimar is a legendary oriental fragrance known for its timeless elegance, sensuality species, ranging across all continents except Antarctica.",
    image: image8,
  },

];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <div style={{ minHeight: '100vh' }}>
        <AppBar position="static" sx={{ backgroundColor: 'rgb(49, 49, 48)' }}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
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
              <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
              <Box sx={{ display: 'flex', flexGrow: 1 }}>
                <Button
                  onClick={() => navigate("/home")}
                  sx={{ my: 2, color: 'pink', textTransform: 'capitalize' }}
                >
                  Home
                </Button>
                <Button
                  onClick={() => navigate("/custom")}
                  sx={{ my: 2, color: 'pink', textTransform: 'capitalize' }}
                >
                  Create Custom Perfume
                </Button>
                <Button
                  onClick={() => navigate('/about')}
                  sx={{ my: 2, color: 'pink', textTransform: 'capitalize' }}
                >
                  About us
                </Button>
                <Button
                  onClick={() => navigate('/service')}
                  sx={{ my: 2, color: 'pink', textTransform: 'capitalize' }}
                >
                  Services
                </Button>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <div className="searchIcon">
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                  value={searchValue}
                  onChange={handleSearchInputChange}
                  sx={{ color: 'white', marginLeft: '5px', borderRadius: '5px' }}
                />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, marginLeft: 'auto' }}>
                    <Avatar alt="Vishnu" src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        <CarousalActive />
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
          <h3 style={{ margin: 'auto', color: 'rgb(234, 94, 34)' }}>Welcome to PerfumePalette - Craft Your Signature Scent</h3>
          <h4>Unlock the art of fragrance creation with PerfumePalette, your custom fragrance studio application.<br />
            Experience the joy of designing a scent that truly embodies you. Whether it's a personal statement or a unique gift,<br />
            our platform empowers you to curate scents that leave a lasting impression.</h4>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
          <h3 style={{ margin: 'auto', color: 'rgb(234, 94, 34)' }}>Featured Fragrance Collections</h3>
          <h4>Explore our curated collections, each designed to evoke distinct moods and experiences. <br />
            From vibrant florals to sultry orientals, find the perfect inspiration for your bespoke creation.<br /></h4>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
          <h3 style={{ margin: 'auto' }}>Start Crafting Your Signature Scent</h3>
          <Button onClick={() => navigate("/custom")} sx={{
            my: 2, color: 'black', textTransform: 'capitalize', background: 'pink',
            '&:hover': {
              background: 'lightpink',
            },
          }}>
            Create Custom Perfume
          </Button>
        </div>
        <div className='card' style={{
          display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2%', marginTop: '3%', marginBottom: '3%',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        }}>
          {cardData.map(card => (
            <Card key={card.id} sx={{ maxWidth: 305, flex: '0 1 23%', marginBottom: '2em' , marginLeft:'10px'}}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  src={card.image}
                  alt={card.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </div>
      </div>
      <Box mt="auto">
        <Footer />
      </Box>
    </>
  );
}

export default ResponsiveAppBar;
