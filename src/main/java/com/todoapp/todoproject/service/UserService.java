package com.todoapp.todoproject.service;

import com.todoapp.todoproject.entity.User;
import com.todoapp.todoproject.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.NoResultException;
import javax.persistence.NonUniqueResultException;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    public User getUser(User user) {
        System.out.println("Service GET *****");
        return userRepository.findByUsernameAndPassword(user.getUsername(), user.getPassword());
    }
    public boolean getUserByUsername(String username, String password) {
//        if(userRepository.findByUsername(username) != null) {
//            return userRepository.findByUsername(username);
//        }
//        else {
//            System.out.println("No user");
//            //return null;
//            return new User(-1, "N/A", "N/A");
//        }
        boolean username_present;
        boolean password_present;
        try {
            username_present = userRepository.findTopByUsername(username) != null ? true : false;
            System.out.println("Username present: " + username_present);
            password_present = userRepository.findTopByPassword(password) != null ? true : false;
            System.out.println("Password present: " + password_present);
        } catch(NonUniqueResultException nre) {
            return true;
        }
        return username_present && password_present;
    }

    public void saveUser(User user) {
        userRepository.save(user);
    }
}
