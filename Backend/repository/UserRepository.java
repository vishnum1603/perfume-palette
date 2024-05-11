package com.brocode.vishnu.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.brocode.vishnu.model.User;

public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findByUsername(String username);
    boolean existsByUsername(String username);
}
