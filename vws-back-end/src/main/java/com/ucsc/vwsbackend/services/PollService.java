package com.ucsc.vwsbackend.services;

import com.ucsc.vwsbackend.dto.ForumInfo;
import com.ucsc.vwsbackend.dto.PollInfo;
import com.ucsc.vwsbackend.entities.ReactToPoll;
import com.ucsc.vwsbackend.repository.forumDao.ForumJdbcRepository;
import com.ucsc.vwsbackend.repository.pollDao.PollJdbcRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PollService {
    @Autowired
    PollJdbcRepository pollJdbcRepository ;

    public List<PollInfo> getPollInfo() {
        return pollJdbcRepository.getPollInfo();
    }

    public long addNewPoll(PollInfo pollInfo){
        return pollJdbcRepository.addNewPoll(pollInfo);
    }

    public long addReactToPoll(ReactToPoll reactToPoll){
        return pollJdbcRepository.addReactToPoll(reactToPoll);
    }


}
