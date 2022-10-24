package com.ucsc.vwsbackend.services;

import com.ucsc.vwsbackend.dto.ConsiderFeedbackNotification;
import com.ucsc.vwsbackend.dto.GuestUserFeedback;
import com.ucsc.vwsbackend.entities.Notification;
import com.ucsc.vwsbackend.repository.guestUserFeedbackDao.GuestUserFeedbackJdbcRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GuestUserFeedbackService {

    @Autowired
    GuestUserFeedbackJdbcRepository guestUserFeedbackJdbcRepository;

    public long addFeedback(GuestUserFeedback guestUserFeedback){
        return guestUserFeedbackJdbcRepository.addFeedback(guestUserFeedback);
    }

    public List<GuestUserFeedback> getFeedback() {
        return guestUserFeedbackJdbcRepository.getfeedback();
    }

    public long considerFeedback(long id, ConsiderFeedbackNotification notification) {
        guestUserFeedbackJdbcRepository.consider(id);
        return guestUserFeedbackJdbcRepository.considerFeedback(id,notification);
    }
}
