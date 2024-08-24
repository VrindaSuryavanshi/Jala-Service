package com.user.jala.service;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "candidate-data")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserEntity {
    @Id
    private ObjectId id;
    private String name;
    private long contact;
    private String doj;
    private String email;
    private String candidate_type;
    private String status;
    private String comments;
    private String experience;
    private String due_by;

}
