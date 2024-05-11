package com.brocode.vishnu.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.Date;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "_order")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer oid;

    private String firstname ;

    private String lastname ;

    @Column(name = "orderDate")
    private Date orderDate ;

    @Column(name = "orderAddress")
    private String orderAddress ;

    @Column(name = "phoneNo")
    private String phoneNo ;

    private String city ;

    private String state ;

    private String zip ;

    private List<String> flavours ;

    private int price ;
}
