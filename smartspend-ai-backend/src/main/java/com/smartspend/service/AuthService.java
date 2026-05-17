package com.smartspend.service;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.smartspend.dto.RegisterRequest;
import com.smartspend.entity.User;
import com.smartspend.repository.UserRepository;
import com.smartspend.dto.LoginRequest;
import com.smartspend.util.JwtUtil;

@Service
public class AuthService {

    private UserRepository userRepository;
    private PasswordEncoder passwordEncoder;
    private JwtUtil jwtUtil;

    public AuthService(UserRepository userRepository,
            PasswordEncoder passwordEncoder,
            JwtUtil jwtUtil) {

this.userRepository = userRepository;
this.passwordEncoder = passwordEncoder;
this.jwtUtil = jwtUtil;
}

    public String register(RegisterRequest request) {

        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            return "Email already exists";
        }

        User user = new User();

        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));

        userRepository.save(user);

        return "User registered successfully";
    }
    
    public String login(LoginRequest request) {

        User user = userRepository.findByEmail(request.getEmail())
                .orElse(null);

        if (user == null) {
            return "User not found";
        }

        boolean matches = passwordEncoder.matches(
                request.getPassword(),
                user.getPassword()
        );

        if (!matches) {
            return "Invalid password";
        }

        return jwtUtil.generateToken(user.getEmail());
    }
}