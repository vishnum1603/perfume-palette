import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { setAddressData } from "./redux/AddressSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function AddressForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address1: "",
    phoneNo: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = () => {
    console.log(formData) ;
    dispatch(setAddressData(formData)); 
  };

  return (
    <div className="app-container">
      <Container maxWidth="sm">
        <div className="center-container">
          <div className="address-form">
            <Typography variant="h5" gutterBottom>
              Shipping address
            </Typography>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First name"
              fullWidth
              autoComplete="given-name"
              variant="standard"
              value={formData.firstName}
              onChange={handleChange}
            />
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last name"
              fullWidth
              autoComplete="family-name"
              variant="standard"
              value={formData.lastName}
              onChange={handleChange}
            />
            <TextField
              required
              id="address1"
              name="address1"
              label="Address line 1"
              fullWidth
              autoComplete="shipping address-line1"
              variant="standard"
              value={formData.address1}
              onChange={handleChange}
            />
            <TextField
              required
              id="phoneNo"
              name="phoneNo"
              label="Mobile Number"
              fullWidth
              autoComplete="phoneNo"
              variant="standard"
              value={formData.phoneNo}
              onChange={handleChange}
            />
            <TextField
              required
              id="city"
              name="city"
              label="City"
              fullWidth
              autoComplete="shipping "
              variant="standard"
              value={formData.city}
              onChange={handleChange}
            />
            <TextField
              id="state"
              name="state"
              label="State/Province/Region"
              fullWidth
              variant="standard"
              value={formData.state}
              onChange={handleChange}
            />
            <TextField
              required
              id="zip"
              name="zip"
              label="Zip / Postal code"
              fullWidth
              autoComplete="shipping postal-code"
              variant="standard"
              value={formData.zip}
              onChange={handleChange}
            />
            <TextField
              required
              id="country"
              name="country"
              label="Country"
              fullWidth
              autoComplete="shipping country"
              variant="standard"
              value={formData.country}  
              onChange={handleChange}
            />
            <FormControlLabel
              control={
                <Checkbox color="secondary" name="saveAddress" value="yes" />
              }
              label="Use this address for payment details"
            />
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit Order
            </Button>
          </div>
        </div>
      </Container>  
    </div>
  );
}
