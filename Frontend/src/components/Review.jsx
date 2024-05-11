// ReviewPage.js
import React from "react";
import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const ReviewPage = () => {
  const addressData = useSelector((state) => state.address.addressData);

  return (
    <Container maxWidth="sm">
      <div className="center-container">
        <div className="review-section">
          <Typography variant="h5" gutterBottom>
            Review Your Address
          </Typography>
          <Typography variant="body1" paragraph>
            Name: {addressData.firstName + " " + addressData.lastName}
          </Typography>
          <Typography variant="body1" paragraph>
            Address Line 1: {addressData.address1}
          </Typography>
          <Typography variant="body1" paragraph>
            Mobile Number: {addressData.phoneNo}
          </Typography>
          <Typography variant="body1" paragraph>
            City: {addressData.city}
          </Typography>
          <Typography variant="body1" paragraph>
            State/Province/Region: {addressData.state}
          </Typography>
          <Typography variant="body1" paragraph>
            Zip/Postal Code: {addressData.zip}
          </Typography>
          <Typography variant="body1" paragraph>
            Country: {addressData.country}
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default ReviewPage;
