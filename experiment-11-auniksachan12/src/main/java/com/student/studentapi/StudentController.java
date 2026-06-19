package com.student.studentapi;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StudentController {

    @GetMapping("/")
    public String welcome() {
        return "Welcome to Student Management REST API";
    }

    @GetMapping("/student")
    public Student getStudent() {
        return new Student(
                101,
                "Rahul",
                "Computer Science"
        );
    }

    @PostMapping("/student")
    public Student addStudent(@RequestBody Student student) {
        return student;
    }
}