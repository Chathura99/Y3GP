package com.ucsc.vwsbackend.repository.forumDao;

import com.ucsc.vwsbackend.dto.AnnouncementWithAuthor;
import com.ucsc.vwsbackend.dto.ForumInfo;
import com.ucsc.vwsbackend.dto.ProjectDetail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

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
        String query = "SELECT COUNT(*) as replies, f.* FROM reply as r  INNER JOIN forum as f ON f.reply_id = r.reply_id ";

        List<ForumInfo> forumInfo = jdbc.query(query,namedParameters, new BeanPropertyRowMapper<ForumInfo>(ForumInfo.class));
        return forumInfo;
    }
}
