package com.brocode.vishnu.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class FlavourRequest {
    private String fname;
    private float price;
    private int quantity ;
    private String description;
    private String image;
}

