package com.brocode.vishnu.controller;

import com.brocode.vishnu.model.User;
import com.brocode.vishnu.service.UserService;
import com.brocode.vishnu.dto.response.UserResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.List;

@RestController
@RequestMapping("/api/users")   
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/get")
    public UserResponse getAllUsers() {
        List<User> users = userService.getAllUsers();
        System.out.println(users) ;
        return UserResponse.builder()
                .users(users)   
                .build();
    }

    @GetMapping("/get/{id}")
    public UserResponse getUserById(@PathVariable Integer id) {
        Optional<User> user = userService.getUserById(id);
        return UserResponse.builder()
                .user(user.orElse(null))
                .build();
    }

    @GetMapping("/username/{username}")
    public UserResponse getUserByUsername(@PathVariable String username) {
        Optional<User> user = userService.getUserByUsername(username);
        return UserResponse.builder()
                .user(user.orElse(null))
                .build();
    }

    @PostMapping("/post")
    public void createUser(@RequestBody User user) {
        userService.saveUser(user);
    }

    @PutMapping("put/{id}")
    public void updateUser(@PathVariable Integer id, @RequestBody User user) {
        Optional<User> existingUser = userService.getUserById(id);
        if (existingUser.isPresent()) {
            User updatedUser = existingUser.get();
            updatedUser.setFirstname(user.getFirstname());
            updatedUser.setLastname(user.getLastname());
            updatedUser.setEmail(user.getEmail());
            updatedUser.setUsername(user.getUsername());
            updatedUser.setPassword(user.getPassword());
            userService.saveUser(updatedUser);
        }
    } 

    @DeleteMapping("delete/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Integer id) {
        userService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }
}
