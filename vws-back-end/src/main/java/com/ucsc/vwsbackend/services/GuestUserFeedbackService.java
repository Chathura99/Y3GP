package com.ucsc.vwsbackend.services;

import com.ucsc.vwsbackend.dto.GuestUserFeedback;
import com.ucsc.vwsbackend.repository.guestUserFeedbackDao.GuestUserFeedbackJdbcRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GuestUserFeedbackService {

    @Autowired
    GuestUserFeedbackJdbcRepository guestUserFeedbackJdbcRepository;

    public long addFeedback(GuestUserFeedback guestUserFeedback){
        return guestUserFeedbackJdbcRepository.addFeedback(guestUserFeedback);
    }

}
