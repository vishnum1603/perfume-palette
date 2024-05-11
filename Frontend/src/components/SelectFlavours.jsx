// SelectFlavours.js
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Proportion from "./Proportion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.min.css";
import image1 from "../images/vanilla.jpg";
import image2 from "../images/chocolate.jpg";
import image3 from "../images/strawberry.jpg";
import image4 from "../images/mint.jpg";
import image5 from "../images/citrus.jpg";
import image6 from "../images/floral.jpg";
import image7 from "../images/sandal.jpg";
import image8 from "../images/fougere.jpg";
import image9 from "../images/caramel.jpg";
import image10 from "../images/aromatic.jpg";
import image11 from "../images/musk.jpg";
import image12 from "../images/safron.jpg";
import image13 from "../images/cherry.jpg";
import image14 from "../images/Galbanum.jpg";
import image15 from "../images/rasberry.jpg";
import image16 from "../images/cypress.jpg";
import image17 from "../images/lavender.jpg";
import image18 from "../images/jasmine.jpg";

const SelectFlavours = () => {
  const [selectedFlavors, setSelectedFlavors] = useState([]);
  const [showProportion, setShowProportion] = useState(false);

  const handleFlavorClick = (flavor) => {
    if (selectedFlavors.includes(flavor)) {
      setSelectedFlavors(selectedFlavors.filter((item) => item !== flavor));
    } else {
      setSelectedFlavors([...selectedFlavors, flavor]);
      showNotification(flavor);
    }
  };

  const showNotification = (flavor) => {
    toast.success(`${flavor} selected`, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
    });
  };

  const flavors = [
    {
      id: "1",
      name: "Vanilla",
      description: "Sweet and creamy vanilla flavor.",
      price: 5.99,
      image: image1,
    },
    {
      id: "2",
      name: "Chocolate",
      description: "Rich and indulgent chocolate flavor.",
      price: 6.99,
      image: image2,
    },
    {
      id: "3",
      name: "Strawberry",
      description: "Fresh and fruity strawberry flavor.",
      price: 4.99,
      image: image3,
    },
    {
      id: "4",
      name: "Mint",
      description: "Cool and refreshing mint flavor.",
      price: 5.49,
      image: image4,
    },
    {
      id: "5",
      name: "Citrus",
      description: "Zesty and tangy citrus flavor.",
      price: 4.79,
      image: image5,
    },
    {
      id: "6",
      name: "Floral",
      description: "Elegant and fragrant floral flavor.",
      price: 7.99,
      image: image6,
    },
    {
      id: "7",
      name: "sandal Wood",
      description: "Warm and woody flavor with earthy notes.",
      price: 6.29,
      image: image7,
    },
    {
      id: "8",
      name: "Fougère",
      description: "Classic and fern-like fougère flavor.",
      price: 6.99,
      image: image8,
    },
    {
      id: "9",
      name: "Caramel",
      description: "Sweet and caramelized caramel flavor.",
      price: 5.49,
      image: image9,
    },
    {
      id: "10",
      name: "Aromatic",
      description: "Aromatic and herbal flavor profile.",
      price: 6.49,
      image: image10,
    },
    {
      id: "11",
      name: "Musk",
      description: "Soft and musky musk flavor.",
      price: 5.79,
      image: image11,
    },
    {
      id: "12",
      name: "Saffron",
      description: "Luxurious and saffron-spiced flavor.",
      price: 9.99,
      image: image12,
    },
    {
      id: "13",
      name: "Cherry Blossom",
      description: "Delicate and cherry blossom-inspired flavor.",
      price: 6.49,
      image: image13,
    },
    {
      id: "14",
      name: "Galbanum",
      description: "Green and galbanum-tinged flavor.",
      price: 6.79,
      image: image14,
    },
    {
      id: "15",
      name: "Raspberry",
      description: "Sweet and raspberry-flavored fragrance.",
      price: 7.29,
      image: image15,
    },
    {
      id: "16",
      name: "Cypress",
      description: "Fresh and cypress-inspired flavor.",
      price: 5.49,
      image: image16,
    },
    {
      id: "17",
      name: "Lavender",
      description: "Calming and lavender-scented flavor.",
      price: 5.79,
      image: image17,
    },
    {
      id: "18",
      name: "Jasmine",
      description: "Exotic and floral jasmine aroma.",
      price: 6.99,
      image: image18,
    },
  ];

  const handleNextButtonClick = () => {
    setShowProportion(true);
  };

  return (
    <div>
      {!showProportion && (
        <div>
          <Typography variant="h6">Select Flavors:</Typography>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {flavors.map((flavor) => (
              <Card
                key={flavor.id}
                sx={{
                  width: 200,
                  margin: "10px",
                  cursor: "pointer",
                  backgroundColor: selectedFlavors.includes(flavor.name)
                    ? "rgb(98, 226, 66)"
                    : "white",
                }}
                className={
                  selectedFlavors.includes(flavor.id) ? "selected-card" : ""
                }
                onClick={() => handleFlavorClick(flavor.name)}
              >
                <CardContent>
                  <img
                    src={flavor.image}
                    alt={flavor.name}
                    style={{ width: "172px", height: "120px" }}
                  />
                  <Typography variant="h6">{flavor.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Description: {flavor.description}
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: "20px" }}>
                    Price: {flavor.price}$
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </div>
          {selectedFlavors.length > 0 && (
            <div>
              <Typography variant="body1">You selected:</Typography>
              <ul>
                {selectedFlavors.map((flavor) => (
                  <Typography variant="body2" key={flavor}>
                    {flavor}
                  </Typography>
                ))}
              </ul>
            </div>
          )}
          <Button
            variant="contained"
            color="primary"
            onClick={handleNextButtonClick}
          >
            Next
          </Button>
        </div>
      )}
      {showProportion && (
        <Proportion selectedFlavors={selectedFlavors} flavors={flavors} />
      )}
      <ToastContainer />
    </div>
  );
};

export default SelectFlavours;
