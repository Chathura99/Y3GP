package com.ucsc.vwsbackend.services;

import com.ucsc.vwsbackend.entities.JoinRequest;
import com.ucsc.vwsbackend.repository.joinRequestDao.JoinRequestRepository;
import com.ucsc.vwsbackend.repository.userDao.UserJdbcRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SignUpService {

    @Autowired
    JoinRequestRepository joinRequestRepository;

    @Autowired
    UserJdbcRepository userJdbcRepository;
    public String signUp(JoinRequest joinRequest) {
//      check email is exists in user
//      check in requests also
        int rowCount = userJdbcRepository.checkEmailExists(joinRequest.getEmail());
        if(rowCount>0){
            return "You have already an account";
        }
        joinRequestRepository.save(joinRequest);
        return "Saved Successfully!";

    }

    public List<JoinRequest> getJoinRequest() {
//      write query for get only new requests
        return joinRequestRepository.findAll();
    }
}

//    {
//            "id": 5,
//            "firstName": "Chamara",
//            "lastName": "Manujaya",
//            "email": "nm@gmail.com",
//            "phoneNumber": "+94752145875",
//            "address": "Polgahawela",
//            "universityCollege": "Colombo",
//            "district": "Kurunegala",
//            "date": "2022-07-05T18:30:00.000+00:00",
//            "status": 0
//            }
