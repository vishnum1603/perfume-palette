package com.brocode.vishnu.dto.request;

import java.util.Date;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class OrderRequest {
    private String firstname ;
    private String lastname ;
    private Date orderDate;
    private String orderAddress;
    private String phoneNo;
    private String city;
    private String state;
    private String zip;
    private List<String> flavours ;
    private int price ;
}
