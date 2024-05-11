package com.brocode.vishnu.controller;

import com.brocode.vishnu.dto.request.FlavourRequest;
import com.brocode.vishnu.dto.response.FlavourResponse;
import com.brocode.vishnu.service.FlavourService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/flavour")
public class FlavourController {

    @Autowired
    private FlavourService flavourService;

    @GetMapping("/get")
    public List<FlavourResponse> getAllFlavours() {
        return flavourService.getAllFlavours();
    }

    @GetMapping("/get{id}")
    public FlavourResponse getFlavourById(@PathVariable Integer id) {
        return flavourService.getFlavourById(id);
    }

    @PostMapping("/post")
    public void addFlavour(@RequestBody FlavourRequest flavourRequest) {
        flavourService.addFlavour(flavourRequest);
    }

    @PutMapping("/put/{id}")
    public void updateFlavour(@PathVariable Integer id, @RequestBody FlavourRequest flavourRequest) {
        flavourService.updateFlavour(id, flavourRequest);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteFlavour(@PathVariable Integer id) {
        flavourService.deleteFlavour(id);
    }
}

