import React from 'react';
import { useState } from 'react';
import { Card, CardContent, Typography, Container, CardActionArea, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import video from '../Step_1.mp4';
import video1 from '../Step_2.mp4';
import video2 from '../Step_3.mp4';
import Header from './Header';

const Custom = () => {
    const [backgroundColor] = useState('#ffffff');
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/custompage');
    };

    return (
        <div style={{ backgroundColor, minHeight: '100vh' }}>
            <Header />
            <Container>
                <Typography variant="h2">Welcome to our perfume website!</Typography>
                <Typography variant="body1">Customize your experience:</Typography>
                <br />
                <br />
                <br />
                <div style={{ display: 'flex' }}>
                    <Card sx={{ maxWidth: 345, marginRight: '100px' }}>
                        <CardActionArea>
                            <video width="320" height="240" loop muted playsInline autoPlay className="step1">
                                <source src={video} type="video/mp4" />
                            </video>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Step 1
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Choose the flavors
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card sx={{ maxWidth: 345, marginRight: '100px' }}>
                        <CardActionArea>
                            <video width="320" height="240" loop muted playsInline autoPlay className="step1">
                                <source src={video1} type="video/mp4" />
                            </video>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Step 2
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Mix the selected flavors
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card sx={{ maxWidth: 345, marginRight: '100px' }}>
                        <CardActionArea>
                            <video width="320" height="240" loop muted playsInline autoPlay className="step1">
                                <source src={video2} type="video/mp4" />
                            </video>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Step 3
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    See the Output and buy it
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                <br />
                <br />
                <br />
                <div style={{ textAlign: 'center' }}>
                    <Button variant="contained" color="success" onClick={handleNext}>
                        Get Started
                    </Button>
                </div>
            </Container>
        </div>
    );
};

export default Custom;
