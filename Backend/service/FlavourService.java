package com.brocode.vishnu.service;

import java.util.List;
import java.util.stream.Collectors;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;
import com.brocode.vishnu.dto.request.FlavourRequest;
import com.brocode.vishnu.dto.response.FlavourResponse;
import com.brocode.vishnu.model.Flavour;
import com.brocode.vishnu.repository.FlavourRepository;

@Service
public class FlavourService {
     @Autowired
    private FlavourRepository flavourRepository;

    public List<FlavourResponse> getAllFlavours() {
        List<Flavour> flavours = flavourRepository.findAll();
        return flavours.stream()
                .map(this::convertToResponse)
                .collect(Collectors.toList());
    }

    public FlavourResponse getFlavourById(Integer id) {
        Optional<Flavour> flavourOptional = flavourRepository.findById(id);
        if (flavourOptional.isPresent()) {
            return convertToResponse(flavourOptional.get());
        }
        return null;
    }

    public void addFlavour(FlavourRequest flavourRequest) {
        Flavour flavour = new Flavour();
        BeanUtils.copyProperties(flavourRequest, flavour);
        flavourRepository.save(flavour);
    }

    public void updateFlavour(Integer id, FlavourRequest flavourRequest) {
        Optional<Flavour> flavourOptional = flavourRepository.findById(id);
        if (flavourOptional.isPresent()) {
            Flavour flavour = flavourOptional.get();
            BeanUtils.copyProperties(flavourRequest, flavour);
            flavourRepository.save(flavour);
        } else {
            throw new FlavourNotFoundException(id);
        }
    }

    public void deleteFlavour(Integer id) {
        flavourRepository.deleteById(id);
    }

    private FlavourResponse convertToResponse(Flavour flavour) {
        FlavourResponse response = new FlavourResponse();
        BeanUtils.copyProperties(flavour, response);
        return response;
    }

    public class FlavourNotFoundException extends RuntimeException {
        public FlavourNotFoundException(Integer id) {
            super("Flavour not found with id : " + id);
        }
    }
}
