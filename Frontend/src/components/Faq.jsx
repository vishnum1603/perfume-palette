import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const FAQ = () => {
  const faqData = [
    {
      question: 'What is the custom fragrance creation studio?',
      answer: 'The custom fragrance creation studio is a platform that allows users to create their own unique fragrances by selecting from a wide range of scents and combining them in customizable blends.'
    },
    {
      question: 'How do I get started with creating a custom fragrance?',
      answer: 'To get started, simply navigate to the "Create Your Fragrance" section on our platform. From there, you can browse through our selection of scents and start creating your unique blend.'
    },
    {
      question: 'Can I save my fragrance blends for later?',
      answer: 'Yes, you can save your fragrance blends for later. Simply create an account and you will have the option to save your custom blends to your profile for future use.'
    },
    {
      question: 'Is there a limit to how many blends I can create?',
      answer: 'No, there is no limit to the number of blends you can create. Feel free to experiment and create as many unique fragrances as you like.'
    },
    {
      question: 'How long does it take to receive my custom fragrance?',
      answer: 'The delivery time for your custom fragrance will depend on your location and chosen shipping method. We aim to process and ship orders as quickly as possible.'
    },
    {
      question: 'What if I am not satisfied with my custom fragrance?',
      answer: 'If you are not satisfied with your custom fragrance, please contact our customer support team. We will do our best to address any concerns and ensure your satisfaction.'
    },
    {
      question: 'What are the available payment methods?',
      answer: 'We accept various payment methods including credit cards, PayPal, and bank transfers for your convenience.'
    },
    {
      question: 'Can I request a refund if I change my mind after placing an order?',
      answer: 'Yes, you can request a refund within 30 days of placing your order as long as the product has not been used or opened.'
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Yes, we offer international shipping to most countries. Please check our shipping policies for more information on specific regions.'
    },
    {
      question: 'Are your fragrances tested on animals?',
      answer: 'No, we are proud to say that our products are cruelty-free and not tested on animals.'
    },
    {
      question: 'Can I customize the packaging of my fragrance?',
      answer: 'Yes, we offer options for customizing the packaging of your fragrance for a more personalized experience.'
    },
    {
      question: 'How can I track the status of my order?',
      answer: 'Once your order is processed and shipped, you will receive a tracking number via email to monitor the status of your delivery.'
    },
  ];

  const [expanded, setExpanded] = useState(null);

  const toggleExpand = index => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <>
      <div style={{ backgroundColor: 'rgb(184, 209, 214)' }}>
        <Header />
        <Container sx={{ minHeight: '80vh', backgroundColor: 'rgb(184, 209, 214)', marginBottom: '20px' }}>
          <Box sx={{ mt: 4 }}>
            <h2 style={{ textAlign: 'center' }}>Frequently Asked Questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              {faqData.map((item, index) => (
                <div key={index} style={{ marginBottom: '10px' }}>
                  <div onClick={() => toggleExpand(index)} style={{ cursor: 'pointer' }}>
                    <h3>{item.question}</h3>
                  </div>
                  {expanded === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <p>{item.answer}</p>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </Box>
        </Container>
        <Footer />
      </div>
    </>
  );
}

export default FAQ;
