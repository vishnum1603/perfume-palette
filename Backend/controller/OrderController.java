package com.brocode.vishnu.controller;

import com.brocode.vishnu.dto.request.OrderRequest;
import com.brocode.vishnu.dto.response.OrderResponse;
import com.brocode.vishnu.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
public class OrderController {
    @Autowired
    private OrderService orderService;

    @GetMapping("/get")
    public List<OrderResponse> getAllOrders() {
        return orderService.getAllOrders();
    }

    @GetMapping("/get/{oid}")
    public ResponseEntity<OrderResponse> getOrderById(@PathVariable Integer oid) {
        OrderResponse orderResponse = orderService.getOrderById(oid);
        if (orderResponse != null) {
            return ResponseEntity.ok(orderResponse);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @PostMapping("/post")
    public ResponseEntity<OrderResponse> createOrder(@RequestBody OrderRequest orderRequest) {
        OrderResponse orderResponse = orderService.createOrder(orderRequest);
        return ResponseEntity.status(HttpStatus.CREATED).body(orderResponse);
    }
}
