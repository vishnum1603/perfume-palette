import React, { useState, useEffect } from 'react';
import { getOrders } from './services/Api';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from '@mui/material';

const OrderComponent = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await getOrders();
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h1>Order Details</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Order ID</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Order Date</TableCell>
              <TableCell>Order Address</TableCell>
              <TableCell>Payment Mode</TableCell>
              <TableCell>Phone No</TableCell>
              <TableCell>City</TableCell>
              <TableCell>State</TableCell>
              <TableCell>Zip</TableCell>
              <TableCell>User ID</TableCell>
              <TableCell>Flavour IDs</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.oid}>
                <TableCell>{order.oid}</TableCell>
                <TableCell>{order.firstname}</TableCell>
                <TableCell>{order.lastname}</TableCell>
                <TableCell>{order.orderDate ? new Date(order.orderDate).toLocaleDateString() : ''}</TableCell>
                <TableCell>{order.orderAddress}</TableCell>
                <TableCell>{order.paymentMode}</TableCell>
                <TableCell>{order.phoneNo}</TableCell>
                <TableCell>{order.city}</TableCell>
                <TableCell>{order.state}</TableCell>
                <TableCell>{order.zip}</TableCell>
                <TableCell>{order.userId}</TableCell>
                <TableCell>{order.flavourIds ? order.flavourIds.join(', ') : ''}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default OrderComponent;
