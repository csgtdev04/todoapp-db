package com.todoapp.todoproject.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "courses_table")
public class Course {
    @Id
    @GeneratedValue(strategy= GenerationType.SEQUENCE, generator = "course_generator")
    @SequenceGenerator(initialValue = 1, name = "course_generator", sequenceName = "course_seq")
    @Column(name = "id", updatable = false, nullable = false)
    private int id;

    private String name;
    private String description;
    private String status;

    @Column(name = "username")
    private String username;
}
