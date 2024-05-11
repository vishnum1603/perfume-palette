package com.brocode.vishnu.service;

import com.brocode.vishnu.dto.request.OrderRequest;
import com.brocode.vishnu.dto.response.OrderResponse;
import com.brocode.vishnu.model.Order;
import com.brocode.vishnu.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;

    public List<OrderResponse> getAllOrders() {
        List<Order> orders = orderRepository.findAll();
        return orders.stream()
                .map(this::convertToResponse)
                .collect(Collectors.toList());
    }

    public OrderResponse getOrderById(Integer oid) {
        Optional<Order> optionalOrder = orderRepository.findById(oid);
        return optionalOrder.map(this::convertToResponse).orElse(null);
    }

    public OrderResponse createOrder(OrderRequest orderRequest) {
        Order order = convertToEntity(orderRequest);
        order = orderRepository.save(order);
        return convertToResponse(order);
    }

    private OrderResponse convertToResponse(Order order) {
        return OrderResponse.builder()
                .oid(order.getOid())
                .firstname(order.getFirstname())
                .lastname(order.getLastname())
                .orderDate(order.getOrderDate())
                .orderAddress(order.getOrderAddress())
                .phoneNo(order.getPhoneNo())
                .city(order.getCity())
                .state(order.getState())
                .zip(order.getZip())
                .flavours(order.getFlavours())
                .price(order.getPrice())
                .build();
    }

    private Order convertToEntity(OrderRequest orderRequest) {
        return Order.builder()
                .firstname(orderRequest.getFirstname())
                .lastname(orderRequest.getLastname())
                .orderDate(orderRequest.getOrderDate())
                .orderAddress(orderRequest.getOrderAddress())
                .phoneNo(orderRequest.getPhoneNo())
                .city(orderRequest.getCity())
                .state(orderRequest.getState())
                .zip(orderRequest.getZip())
                .flavours(orderRequest.getFlavours())
                .price(orderRequest.getPrice())
                .build();
    }
}
