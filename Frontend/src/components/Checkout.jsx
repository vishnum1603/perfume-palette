import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import Header from './Header';
import Footer from './Footer';
import { motion } from 'framer-motion';

const steps = ['Shipping address', 'Review your order', 'Payment details'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <Review />;
    case 2:
      return <PaymentForm /> ;
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <>
      <div style={{marginBottom:'10px'}}>
        <Header/>
      </div>
      <React.Fragment>
        <CssBaseline />
        <Container component={motion.main} maxWidth="lg" sx={{ minHeight: '95vh', textAlign: 'center' }}>
          <Paper variant="outlined">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <Typography component="h1" variant="h4" align="center" sx={{ pt: 3 }}>
                Checkout
              </Typography>
            </motion.div>
            <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length ? (
              <React.Fragment>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
                    Thank you for your order.
                  </Typography>
                  <Typography variant="subtitle1" sx={{ mb: 3 }}>
                    Your order number is #2001539. We have emailed your order confirmation, and will send you an update when your order has shipped.
                  </Typography>
                </motion.div>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, mr: 1 }}>
                      Back
                    </Button>
                  )}

                  <motion.div initial={{ x: '-100vw' }} animate={{ x: 0 }} exit={{ x: '-100vw' }}>
                    <Button
                      className='button1'
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 3 }}
                    >
                      {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                    </Button>
                  </motion.div>
                </div>
              </React.Fragment>
            )}
          </Paper>
        </Container>
      </React.Fragment>
      <Footer />
    </>
  );
}
