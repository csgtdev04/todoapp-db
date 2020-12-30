package com.todoapp.todoproject.controller;

import com.todoapp.todoproject.entity.User;
import com.todoapp.todoproject.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.NoResultException;

@RestController
@CrossOrigin(origins = { "http://localhost:3000"})
public class UserController {

    @Autowired
    private UserService userService;

//    @GetMapping("/login")
//    private User getCurrentUser(@RequestBody User user) {
//        System.out.println("Controller GET *****");
//        System.out.println(userService.getUser(user));
//        return userService.getUser(user);
//    }

    @GetMapping("/login")
    private User getCurrentUser(@RequestBody User user) {
        System.out.println("GET User by username and password *****");
        //System.out.println(userService.getUser(user));
        return userService.getUser(user);
    }

    @GetMapping("/login/{username}/{password}")
    private boolean findUserByUsername(@PathVariable String username, @PathVariable String password) {
        System.out.println("GET User by username and password *****");
        //System.out.println(userService.getUserByUsername(username, password));
        return userService.getUserByUsername(username, password);
    }

    @PostMapping("/createUser")
    private void addUser(@RequestBody User user) {
        userService.saveUser(user);
    }
}
