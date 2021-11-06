package com.example.demo.student;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

import static java.time.Month.*;

@Configuration
public class StudentConfig {

    @Bean
    CommandLineRunner commandLineRunner(StudentRepository repository) {
        return args -> {
            Student marvin = new Student(
                    "Marvin",
                    "marvinvilaysack@gmail.com",
                    LocalDate.of(1998, APRIL, 10)
            );
            Student alex = new Student(
                    "Alex",
                    "Alexssd@gmail.com",
                    LocalDate.of(2004, JUNE, 10)
            );

            repository.saveAll(
                    List.of(marvin,alex)
            );
        };
    }
}
