import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { Modal, Form } from "react-bootstrap";

const EventTable = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      eventName: "Birthday Party",
      capacity: 100,
      venue: "Grand Ballroom",
      date: "2024-03-20",
      price: "$10000",
    },
    {
      id: 2,
      eventName: "Weddings",
      capacity: 500,
      venue: "Lakeside Pavilion",
      date: "2024-04-15",
      price: "$150000",
    },
    {
      id: 3,
      eventName: "Bachelor Party",
      capacity: 25,
      venue: "Skyline Terrace",
      date: "2024-05-10",
      price: "$7000",
    },
    {
      id: 4,
      eventName: "Entertainments",
      capacity: 300,
      venue: "Garden Courtyard",
      date: "2024-06-25",
      price: "$9000",
    },
    {
      id: 5,
      eventName: "Decorations",
      capacity: 200,
      venue: "Sunset Lounge",
      date: "2024-07-05",
      price: "$3000",
    },
    {
      id: 6,
      eventName: "Caterings",
      capacity: 400,
      venue: "Crystal Hall",
      date: "2024-08-15",
      price: "$15000",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    eventName: "",
    capacity: "",
    venue: "",
    date: "",
    price: "",
  });

  const handleClose = () => setShowModal(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCreate = () => {
    setEvents([...events, { ...formData, id: events.length + 1 }]);
    setFormData({
      eventName: "",
      capacity: "",
      venue: "",
      date: "",
      price: "",
    });
    handleClose();
  };

  const handleDelete = (id) => {
    const updatedEvents = events.filter((event) => event.id !== id);
    setEvents(updatedEvents);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 80 },
    { field: "eventName", headerName: "Event Name", width: 200 },
    { field: "capacity", headerName: "Capacity", width: 150 },
    { field: "venue", headerName: "Venue", width: 200 },
    { field: "date", headerName: "Date", width: 150 },
    { field: "price", headerName: "Price", width: 150 },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      width: 200,
      renderCell: (params) => (
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={() => console.log("Update", params.row)}
          >
            Update
          </Button>{" "}
          <Button
            variant="contained"
            color="secondary"
            onClick={() => handleDelete(params.row.id)}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={events}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10, 20]}
        disableSelectionOnClick
      />

      <Button
        variant="contained"
        color="primary"
        onClick={() => setShowModal(true)}
      >
        Add Event
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="eventName">
              <TextField
                label="Event Name"
                type="text"
                name="eventName"
                value={formData.eventName}
                onChange={handleChange}
                fullWidth
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="capacity">
              <TextField
                label="Capacity"
                type="number"
                name="capacity"
                value={formData.capacity}
                onChange={handleChange}
                fullWidth
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="venue">
              <TextField
                label="Venue"
                type="text"
                name="venue"
                value={formData.venue}
                onChange={handleChange}
                fullWidth
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="date">
              <TextField
                label="Date"
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                fullWidth
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="price">
              <TextField
                label="Price"
                type="text"
                name="price"
                value={formData.price}
                onChange={handleChange}
                fullWidth
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="contained" color="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="contained" color="primary" onClick={handleCreate}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EventTable;
