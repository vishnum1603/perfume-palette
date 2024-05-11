import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextareaAutosize,
} from "@mui/material";
import {
  getFlavour,
  deleteFlavourById,
  updateFlavourById,
  createFlavour,
} from "./services/Api";

function Fragrance() {
  const [fragrances, setFragrances] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedFragrance, setSelectedFragrance] = useState(null);

  const [formData, setFormData] = useState({
    fname: "",
    price: "",
    quantity: "",
    description: "",
    image: "",
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedFragrance(null);
    setFormData({
      fname: "",
      price: "",
      quantity: "",
      description: "",
      image: "",
    });
  };

  const handleDelete = async (id) => {
    try {
      await deleteFlavourById(id);
      setFragrances(fragrances.filter((fragrance) => fragrance.fid !== id));
    } catch (error) {
      console.error("Error deleting fragrance:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "quantity") {
      setFormData({
        ...formData,
        [name]: parseInt(value, 10) || "",
      });
    } else if (name === "price") {
      setFormData({
        ...formData,
        [name]: parseFloat(value) || "",
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isNaN(formData.price) || isNaN(formData.quantity)) {
      console.error("Invalid price or quantity");
      return;
    }

    try {
      if (selectedFragrance) {
        await updateFlavourById(selectedFragrance.fid, formData);
        setFragrances((fragrances) =>
          fragrances.map((fragrance) =>
            fragrance.fid === selectedFragrance.fid
              ? { ...fragrance, ...formData }
              : fragrance
          )
        );
      } else {
        await createFlavour(formData);
        setFragrances([...fragrances, formData]);
      }

      handleClose();
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };

  useEffect(() => {
    const fetchFragrances = async () => {
      try {
        const response = await getFlavour();
        setFragrances(response.data);
      } catch (error) {
        console.error("Error fetching fragrances:", error);
      }
    };
    fetchFragrances();
  }, []);

  const handleEdit = (fragrance) => {
    setFormData({
      fname: fragrance.fname,
      price: fragrance.price,
      quantity: fragrance.quantity,
      description: fragrance.description,
      image: fragrance.image,
    });
    setSelectedFragrance(fragrance);
    handleOpen();
  };

  return (
    <div style={{ padding: "20px" }}>
      <Button
        variant="contained"
        onClick={handleOpen}
        style={{ marginRight: "10px" }}
      >
        Add Fragrance
      </Button>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Flavour Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fragrances.map((fragrance, index) => (
              <TableRow key={index}>
                <TableCell>{fragrance.fname}</TableCell>
                <TableCell>{fragrance.price}</TableCell>
                <TableCell>{fragrance.quantity}</TableCell>
                <TableCell>{fragrance.description}</TableCell>
                <TableCell>
                  <img
                    src={fragrance.image}
                    alt={fragrance.fname}
                    style={{ maxWidth: "100px" }}
                  />
                </TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => handleEdit(fragrance)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => handleDelete(fragrance.fid)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          {selectedFragrance ? "Edit" : "Add"} Fragrance
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Flavour Name"
              variant="outlined"
              fullWidth
              name="fname"
              value={formData.fname}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              label="Flavour Price"
              variant="outlined"
              fullWidth
              name="price"
              value={formData.price}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              label="Flavour Quantity"
              variant="outlined"
              fullWidth
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              margin="normal"
            />
            <TextareaAutosize
              className="custom-textarea"
              aria-label="Description"
              placeholder="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              style={{ width: "100%", minHeight: "50px" }}
            />
            <TextField
              label="Image URL"
              variant="outlined"
              fullWidth
              name="image"
              value={formData.image}
              onChange={handleChange}
              margin="normal"
            />
            <div style={{ marginTop: "15px" }}>
              {formData.image && (
                <img
                  src={formData.image}
                  alt="Uploaded"
                  style={{ maxWidth: "100%" }}
                />
              )}
            </div>
            <DialogActions>
              <Button type="submit" variant="contained" color="primary">
                {selectedFragrance ? "Update" : "Add"}
              </Button>
              <Button onClick={handleClose} variant="contained">
                Cancel
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Fragrance;
