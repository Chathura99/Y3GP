package com.ucsc.vwsbackend.repository.forumDao;

import com.ucsc.vwsbackend.dto.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public class ForumJdbcRepository {
    @Autowired
    protected NamedParameterJdbcTemplate jdbc;

    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<ForumInfo> getForumInfo() {
        MapSqlParameterSource namedParameters = new MapSqlParameterSource();

//        String query ="SELECT *  " +
//                "FROM forum as p " +
//                "INNER JOIN project_coordinator as pc ON p.coordinator_id = pc.coordinator_id " +
//                "INNER JOIN user as u ON u.id = pc.id " +
//                "and p.status=1";
        String query = "SELECT COUNT(*) as replies,concat(u.first_name,\" \",u.last_name) as name, f.* FROM reply as r  INNER JOIN forum as f ON f.reply_id = r.reply_id " +
                "Inner join user as u ON f.user_id = u.id";


        List<ForumInfo> forumInfo = jdbc.query(query,namedParameters, new BeanPropertyRowMapper<ForumInfo>(ForumInfo.class));
        return forumInfo;
    }
    public long addNewForum(ForumInfo forumInfo) {
        LocalDate edate = LocalDate.parse(forumInfo.getEndDate());

//        System.out.println(":ID" + newProjectDetail.getProjectId());
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();
        String query = "INSERT INTO forum " +
                "(title,description,start_date,end_date,user_id) " +
                "values (:title, :description, :CURDATE(), :end_date,:user_id)";

        namedParameters.addValue("title", forumInfo.getName());
        namedParameters.addValue("description", forumInfo.getDescription());
//        namedParameters.addValue("start_date",sdate);
        namedParameters.addValue("end_date", edate);
        namedParameters.addValue("user_id", forumInfo.getUserId());


        int rowsAffected = jdbc.update(query , namedParameters);
        return rowsAffected;

    }
    public List<ForumWithDiscussionTopic> getViewForumInfo() {
        MapSqlParameterSource namedParameters = new MapSqlParameterSource();

//        String query ="SELECT *  " +
//                "FROM forum as p " +
//                "INNER JOIN project_coordinator as pc ON p.coordinator_id = pc.coordinator_id " +
//                "INNER JOIN user as u ON u.id = pc.id " +
//                "and p.status=1";
        String query = "SELECT COUNT(*) as replies,concat(u.first_name,\" \",u.last_name) as name, d.* FROM reply as r  INNER JOIN discussion_topic as d ON d.reply_id = r.reply_id " +
                "Inner join user as u ON d.user_id = u.id";


        List<ForumWithDiscussionTopic> forumWithDiscussionTopic = jdbc.query(query,namedParameters, new BeanPropertyRowMapper<ForumWithDiscussionTopic>(ForumWithDiscussionTopic.class));
        return forumWithDiscussionTopic;
    }

    public List<DiscssionTopicWithReply> getReplyToForum() {
        MapSqlParameterSource namedParameters = new MapSqlParameterSource();

//        String query ="SELECT *  " +
//                "FROM forum as p " +
//                "INNER JOIN project_coordinator as pc ON p.coordinator_id = pc.coordinator_id " +
//                "INNER JOIN user as u ON u.id = pc.id " +
//                "and p.status=1";
        String query = "SELECT concat(u.first_name,\" \",u.last_name) as name, r.* FROM discussion_topic as d  INNER JOIN reply as r ON r.reply_id = d.reply_id " +
                "Inner join user as u ON d.user_id = u.id";


        List<DiscssionTopicWithReply> discssionTopicWithReply = jdbc.query(query,namedParameters, new BeanPropertyRowMapper<DiscssionTopicWithReply>(DiscssionTopicWithReply.class));
        return discssionTopicWithReply;
    }
}
