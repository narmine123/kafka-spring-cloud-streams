package com.coderdot.controllers;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.coderdot.dto.HelloResponse;

import jakarta.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api")
public class HelloController {

    @GetMapping("/hello")
    public HelloResponse hello(HttpServletRequest request) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication != null ? authentication.getName() : "Unknown User";
        String email = (String) request.getAttribute("email");

        String message = "Hello from Authorized API request.";
        HelloResponse response = new HelloResponse(message +
                "User: " + username +
                "Email: " + email);

        return response;
    }
}
