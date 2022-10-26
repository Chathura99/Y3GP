package com.ucsc.vwsbackend.services;

import com.ucsc.vwsbackend.dto.*;
import com.ucsc.vwsbackend.repository.announcementDao.AnnouncementJdbcRepository;
import com.ucsc.vwsbackend.repository.announcementDao.AnnouncementRepository;
import com.ucsc.vwsbackend.repository.forumDao.ForumJdbcRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ForumService {


    @Autowired
    ForumJdbcRepository forumJdbcRepository ;

    public List<ForumInfo> getForumInfo() {
        return forumJdbcRepository.getForumInfo();
    }

    public List<ForumWithDiscussionTopic> getViewForumInfo() {
        return forumJdbcRepository.getViewForumInfo();
    }

    public List<DiscssionTopicWithReply> getReplyToForum() {
        return forumJdbcRepository.getReplyToForum();
    }

    public long addNewForum(ForumInfo forumInfo){
        return forumJdbcRepository.addNewForum(forumInfo);
    }

    public long addNewDiscussionTopic(ForumWithDiscussionTopic forumWithDiscussionTopic){
        return forumJdbcRepository.addNewDiscussionTopic(forumWithDiscussionTopic);
    }
}
