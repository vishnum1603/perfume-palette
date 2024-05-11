package com.brocode.vishnu.repository;

import com.brocode.vishnu.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Integer> {

}

