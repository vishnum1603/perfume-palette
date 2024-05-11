package com.brocode.vishnu.dto.request;

import com.brocode.vishnu.model.enumerate.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserRequest {
    private String firstName;
    private String lastname ;
    private String email ;
    private String username ;
    private String password ;
    private Role role ;
}
