package com.brocode.vishnu.service;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.brocode.vishnu.dto.request.AuthenticationRequest;
import com.brocode.vishnu.dto.request.RegisterRequest;
import com.brocode.vishnu.dto.response.AuthenticationResponse;
import com.brocode.vishnu.model.User;
import com.brocode.vishnu.model.enumerate.Role;
import com.brocode.vishnu.repository.UserRepository;
import com.brocode.vishnu.util.JwtService;

import lombok.RequiredArgsConstructor;
import lombok.var;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
        private final PasswordEncoder passwordEncoder;
        private final JwtService jwtService;
        private final AuthenticationManager authenticationManager;
        private final UserRepository repo;

        public AuthenticationResponse register(RegisterRequest request) {

                if (repo.existsByUsername(request.getUsername())) {
                        throw new RuntimeException("Username already exists");
                }

                Role role = request.getRole() != null ? request.getRole() : Role.USER;

                var user = User.builder()
                                .firstname(request.getFirstname())
                                .lastname(request.getLastname())
                                .email(request.getEmail())
                                .username(request.getUsername())
                                .password(passwordEncoder.encode(request.getPassword()))
                                .role(role)
                                .build();
                repo.save(user);
                var jwtToken = jwtService.generateToken(user);
                return AuthenticationResponse.builder()
                                .token(jwtToken)
                                .build();
        }

        public AuthenticationResponse authenticate(AuthenticationRequest request) {
                System.out.println(request.getPassword()+" "+request.getUsername());
                authenticationManager.authenticate(
                                new UsernamePasswordAuthenticationToken(
                                                request.getUsername(), request.getPassword()));
                var user = repo.findByUsername(request.getUsername())
                                .orElseThrow();
                var jwtToken = jwtService.generateToken(user);
                return AuthenticationResponse.builder()
                                .token(jwtToken)
                                .role(user.getRole())
                                .build();

        }

}
