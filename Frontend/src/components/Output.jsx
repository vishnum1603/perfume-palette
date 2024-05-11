import React from "react";
import { Table, Typography, Button } from "antd";
import { Card } from "antd";
import example from "../perfumes.jpeg";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;
const { Title, Text } = Typography;

const columns = [
  {
    title: "Item",
    dataIndex: "item",
    key: "item",
  },
  {
    title: "Quantity (ml)",
    dataIndex: "quantity",  
    key: "quantity",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    render: (text) => (text !== undefined ? `$${text.toFixed(2)}` : ""),
  },
  {
    title: "Total",
    dataIndex: "total",
    key: "total",
    render: (text) => (text !== undefined ? `$${text.toFixed(2)}` : ""),
  },
];

const Output = ({ flavors, mlValues }) => {
  const data = flavors.map((flavor, index) => ({
    key: index.toString(),
    item: flavor.name,
    quantity: mlValues[flavor.name],
    price: flavor.price,
    total: flavor.price * mlValues[flavor.name],
  }));

  const calculateTotal = () => {
    let total = 0;
    data.forEach(item => {
      total += item.total;
    });
    return total;
  }

  const total = calculateTotal();

  const navigate = useNavigate();

  return (
    <div>
      <Card
        hoverable
        style={{
          width: 240,
        }}
        cover={<img alt="example" src={example} />}
      >
        <Meta title="Customize Perfume" />
      </Card>
      <div>
        <Title level={2}>Bill Statement</Title>
        <Table columns={columns} dataSource={data} pagination={false} />
        <div style={{ marginTop: "16px" }}>
          <Text strong>Total:</Text>
          <Text strong style={{ marginLeft: "8px" }}>
            {total !== undefined ? `$${total.toFixed(2)}` : ""}
          </Text>
        </div>
      </div>
      <Button
        type="primary"
        style={{ marginTop: "16px" }}
        onClick={() => navigate("/checkout")}
      >
        BUY NOW
      </Button>
    </div>
  );
};

export default Output;
