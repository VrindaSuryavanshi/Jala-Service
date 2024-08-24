package com.user.jala.service;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<UserEntity> getAllCandidateData(){

        return userRepository.findAll();
    }

    public void saveCandidateData(UserEntity userEntity) {
        userRepository.save(userEntity);
    }

//    public UserEntity getCandidateData(ObjectId id) {
//
//        return userRepository.findById(id).get();
//    }

    public Optional<UserEntity> candidateDetails(long contact){
        return userRepository.findByContact(contact);
    }
}
