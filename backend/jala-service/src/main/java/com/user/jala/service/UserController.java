package com.user.jala.service;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/v1/candidate")
@CrossOrigin
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public ResponseEntity<List<UserEntity>> getAllCandidate(){
        return new ResponseEntity<List<UserEntity>>( userService.getAllCandidateData(), HttpStatus.OK);
    }

    @PostMapping("/save")
    public long SaveCandidateData(@RequestBody UserEntity userEntity){

        userService.saveCandidateData(userEntity);
        return userEntity.getContact();
    }

//    @RequestMapping("/{id}")
//    public UserEntity getCandidate(@PathVariable(name = "id") ObjectId id){
//
//        return userService.getCandidateData(id);
//    }

    @GetMapping("/{contact}")
    public ResponseEntity<Optional<UserEntity>> getCandidateDetails(@PathVariable long contact){
        return new ResponseEntity<Optional<UserEntity>>(userService.candidateDetails(contact) ,HttpStatus.OK);
    }



}
