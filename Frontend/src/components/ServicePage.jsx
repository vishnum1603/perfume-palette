import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';
import Header from './Header';
import Footer from './Footer';

const ServicePage = () => {
    return (
        <>
            <Header />
            <Container>
                <Typography variant="h3" align="center" gutterBottom>
                    Our Services
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} >
                        <Card>
                            <CardContent  sx={{backgroundColor:'rgb(184, 209, 214)'}}>
                                <Typography variant="h5" component="div" gutterBottom>
                                    Custom Fragrance Creation
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Our custom fragrance creation service is a journey of self-expression through scent. We begin with an in-depth consultation where we explore your preferences, memories, and aspirations. Our expert perfumers then use a blend of artistry and science to craft a scent that is uniquely yours. You'll have the opportunity to experience and refine the fragrance until it perfectly embodies your essence.
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Benefits:
                                    - Personalized fragrance that captures your individuality
                                    - High-quality ingredients for a long-lasting and unique scent
                                    - Ongoing consultations for refinement and adjustments
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card>
                            <CardContent  sx={{backgroundColor:'rgb(184, 209, 214)'}}>
                                <Typography variant="h5" component="div" gutterBottom>
                                    Scent Profiling
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Our perfumers are dedicated to understanding your olfactory preferences on a deep level. We employ a comprehensive profiling process that involves exploring your reactions to a curated selection of fragrance notes. This detailed assessment allows us to identify the fragrance families, base notes, and accords that resonate with you, forming the foundation of your personalized fragrance.
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Benefits:
                                    - Precise understanding of your unique scent preferences
                                    - Creation of a scent profile tailored to your individual taste
                                    - Guidance in choosing the perfect notes for your custom fragrance
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card>
                            <CardContent  sx={{backgroundColor:'rgb(184, 209, 214)'}}>
                                <Typography variant="h5" component="div" gutterBottom>
                                    Ingredient Selection
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    We believe in the artistry of fragrance creation and insist on using only the finest, ethically sourced ingredients. During the process, you'll have the opportunity to choose from a curated selection of premium essential oils, absolutes, and extracts. This ensures that your fragrance not only exudes luxury but also aligns with your values.
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Benefits:
                                    - Access to a selection of the highest quality fragrance ingredients
                                    - Assurance that your fragrance is crafted with integrity and ethics
                                    - Option to customize the composition to meet your preferences
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card>
                            <CardContent  sx={{backgroundColor:'rgb(184, 209, 214)'}}>
                                <Typography variant="h5" component="div" gutterBottom>
                                    Bottle Customization
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Every exceptional fragrance deserves an equally exceptional vessel. You'll have the opportunity to select from a range of elegant bottles, each designed to complement the character of your bespoke scent. Our collection offers various sizes, shapes, and materials to suit your taste, ensuring that your fragrance presentation is as unique as the scent itself.
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Benefits:
                                    - Choice of premium bottles designed to enhance your fragrance experience
                                    - Personalization options to match the aesthetics of your fragrance
                                    - Assurance that your fragrance is presented in a vessel worthy of its quality
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
            <div style={{marginTop:'10px'}}><Footer /></div>
        </>
    );
};

export default ServicePage;
