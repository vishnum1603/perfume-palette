package com.brocode.vishnu.dto.request;


import com.brocode.vishnu.model.enumerate.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {
    private String firstname;
    private String lastname;
    private String email;
    private String username;
    private String password;
    private Role role ;
}
