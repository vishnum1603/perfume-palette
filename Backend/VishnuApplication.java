package com.brocode.vishnu;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@EnableFeignClients
@SpringBootApplication
public class VishnuApplication {

	public static void main(String[] args) {
		SpringApplication.run(VishnuApplication.class, args);
	}

}
