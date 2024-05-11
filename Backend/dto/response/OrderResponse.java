package com.brocode.vishnu.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.Date;
import java.util.List;


@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class OrderResponse {
    private Integer oid;
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
