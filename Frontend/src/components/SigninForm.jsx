import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.min.css";
import { Login } from "./services/Api";


export default function SignInSide() {
  const navigate = useNavigate();

  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
  });
  const [formErrors, setFormErrors] = React.useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let isValid = true;
    const newErrors = { ...formErrors };

    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    }

    setFormErrors(newErrors);

    if (isValid) {
      try {
        console.log("Form is valid, submitting data:", formData);
        setFormData({
          username: "",
          password: "",
        });

        const userData = await Login(formData);

        if (userData && userData.token) {
          console.log(userData.role) ;
          console.log(userData.token) ;
          if (userData.role === "ADMIN") {
            toast.success("You have successfully signed in.", {
              position: "top-center",
              autoClose: 2000,
              onClose: () => {
                setTimeout(() => {
                  navigate("/dashboard");
                }, 1000);
              },
            });
          } else {
            toast.success("You have successfully signed in.", {
              position: "top-center",
              autoClose: 2000,
              onClose: () => {
                setTimeout(() => {
                  navigate("/home");
                }, 1000);
              },
            });
          }
        }
      } catch (error) {
        console.error("Error occurred while logging in:", error);
        toast.error("Invalid Email or Password!!!", {
          position: "top-center",
          autoClose: 2000,
        });
      }
    } else {
      console.log("Form has errors");
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="username"
        label="User Name"
        name="username"
        autoComplete="username"
        autoFocus
        value={formData.username}
        onChange={handleChange}
        error={!!formErrors.username}
        helperText={formErrors.username}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        value={formData.password}
        onChange={handleChange}
        error={!!formErrors.password}
        helperText={formErrors.password}
      />
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Sign In
      </Button>
    </Box>
  );
}
