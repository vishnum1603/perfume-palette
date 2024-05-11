package com.brocode.vishnu.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class FlavourResponse {
    private Integer fid;
    private String fname;
    private float price;
    private int quantity ;
    private String description;
    private String image;
}


