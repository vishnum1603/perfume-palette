package com.brocode.vishnu.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "flavour")
public class Flavour {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer fid;
    private String fname ;
    private float price ;
    private int quantity ;
    @Lob
    private String description ;
    @Lob
    private String image ;
}