package com.brocode.vishnu.dto.response;

import java.util.List;
import com.brocode.vishnu.model.User;
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
public class UserResponse {
    private User user;
    private List<User> users ;
}
