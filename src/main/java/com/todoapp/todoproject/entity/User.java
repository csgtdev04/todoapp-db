package com.todoapp.todoproject.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy= GenerationType.SEQUENCE, generator = "user_generator")
    @SequenceGenerator(initialValue = 1, name = "user_generator", sequenceName = "user_seq")
    @Column(name = "id", updatable = false, nullable = false)
    private int id;

    private String username;
    private String password;
}
