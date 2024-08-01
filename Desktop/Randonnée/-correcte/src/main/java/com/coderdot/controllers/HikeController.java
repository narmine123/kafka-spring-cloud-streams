package com.coderdot.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/hikes")
public class HikeController {

    @GetMapping("/photos")

    public ResponseEntity<List<String>> getHikePhotos() {
        List<String> photos = Arrays.asList("photo1.jpg", "photo2.jpg", "photo3.jpg", "photo4.jpg", "photo5.jpg",
                "photo6.jpg");
        return ResponseEntity.ok(photos);
    }
}
