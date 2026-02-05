package com.example.admin.config;

import com.example.admin.model.User;
import com.example.admin.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class DataInitializer {

    @Bean
    CommandLineRunner initDefaultAdmin(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        return args -> {
            String defaultUsername = "admin@rideshare.com";
            if (userRepository.findByUsername(defaultUsername).isEmpty()) {
                User admin = new User(
                        defaultUsername,
                        passwordEncoder.encode("admin@123"),
                        "ADMIN"
                );
                userRepository.save(admin);
                System.out.println("✅ Default admin created: " + defaultUsername);
            } else {
                System.out.println("ℹ️ Default admin already exists.");
            }
        };
    }
}
