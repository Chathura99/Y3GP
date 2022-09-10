package com.ucsc.vwsbackend.repository.ProjectDao;

import com.ucsc.vwsbackend.dto.ProjectDetail;
import com.ucsc.vwsbackend.dto.ProposedProjectdetails;
import com.ucsc.vwsbackend.dto.VolunteerUpgrade;
import com.ucsc.vwsbackend.entities.ProjectCoordinator;
import com.ucsc.vwsbackend.entities.Volunteer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public class ProjectJdbcRepository {

    @Autowired
    protected NamedParameterJdbcTemplate jdbc;

    @Autowired
    JdbcTemplate jdbcTemplate;
    public List<ProjectDetail> getOngoingProjects() {
        MapSqlParameterSource namedParameters = new MapSqlParameterSource();

        String query ="SELECT *  " +
                "FROM project as p " +
                "INNER JOIN project_coordinator as pc ON p.coordinator_id = pc.coordinator_id " +
                "INNER JOIN user as u ON u.id = pc.id " +
                "and p.status=1";

        List<ProjectDetail> projectDetail = jdbc.query(query,namedParameters, new BeanPropertyRowMapper<ProjectDetail>(ProjectDetail.class));
        return projectDetail;
    }

    public List<ProposedProjectdetails> getProposedProjects() {
        MapSqlParameterSource namedParameters = new MapSqlParameterSource();

        String query ="SELECT *  " +
                "FROM project as p " +
                "INNER JOIN volunteer as v ON v.volunteer_id = p.volunteer_id " +
                "INNER JOIN user as u ON u.id = v.id " +
                "and p.status=0";

        List<ProposedProjectdetails> proposedProjectdetails = jdbc.query(query,namedParameters, new BeanPropertyRowMapper<ProposedProjectdetails>(ProposedProjectdetails.class));
        return proposedProjectdetails;
    }

    public long editProject(ProjectDetail projectDetail) {
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();
        String update = "UPDATE project " +
                "SET name = :name, description = :description, event_per_year= :event_per_year, coordinator_id= :coordinator_id WHERE project_id = :id;";

        namedParameters.addValue("name", projectDetail.getName());
        namedParameters.addValue("description", projectDetail.getDescription());
        namedParameters.addValue("coordinator_id", projectDetail.getCoordinatorId());
        namedParameters.addValue("event_per_year", projectDetail.getEventPerYear());
        namedParameters.addValue("id", projectDetail.getProjectId());

        int rowsAffected = jdbc.update(update, namedParameters);
        return rowsAffected;
    }

    public List<Volunteer> getAllVolunteers() {
//  Todo : do not get current coordinators
        String query ="SELECT * from volunteer where coordinator_or_not=0";

        List<Volunteer> volunteers = jdbc.query(query, new BeanPropertyRowMapper<Volunteer>(Volunteer.class));
        return volunteers;
    }

    public VolunteerUpgrade getNewCoordinatorData(long id) {
        String query ="SELECT * from volunteer  where volunteer_id = ?";

        VolunteerUpgrade volunteerUpgrade = (VolunteerUpgrade) jdbcTemplate.queryForObject(query, new Object[]{id}, new BeanPropertyRowMapper(VolunteerUpgrade.class));


        return volunteerUpgrade;
    }

    public long getUserIdOfNewVolunteer(long id){
        String sql = "SELECT id from volunteer where volunteer_id = ?";
        return jdbcTemplate.queryForObject(sql, new Object[] { id }, Integer.class);

    }

    public void addNewProjectCoordinator(VolunteerUpgrade volunteerUpgrade) {
    }

    public long removeFromVolunteer(long id) {
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();
        String update = "UPDATE volunteer " +
                "SET coordinator_or_not = 1 WHERE volunteer_id = :id;";

        namedParameters.addValue("id", id);

        int rowsAffected = jdbc.update(update, namedParameters);
        return rowsAffected;
    }

    public int saveData(ProjectCoordinator projectCoordinator,long userid) {
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();
        String query = "INSERT INTO project_coordinator " +
                "(address, district,university_college, id,first_name,last_name) " +
                "values (:address, :district, :university_college, :id, :first_name,:last_name )";

        namedParameters.addValue("address", projectCoordinator.getAddress());
        namedParameters.addValue("district", projectCoordinator.getDistrict());
        namedParameters.addValue("university_college", projectCoordinator.getUniversityCollege());
        namedParameters.addValue("id", userid);
        namedParameters.addValue("first_name", projectCoordinator.getFirstName());
        namedParameters.addValue("last_name", projectCoordinator.getLastName());


        int rowsAffected = jdbc.update(query , namedParameters);
        return rowsAffected;
    }

    public long getNewCoordinatorId(long userid) {
        System.out.println("userid->"+userid);
        String sql = "SELECT coordinator_id from project_coordinator where id = ?";
        return jdbcTemplate.queryForObject(sql, new Object[] { userid }, Integer.class);
    }
//  upgrade new user role after assign to project
    public long upgradeNewUserRole(long newUserid) {
        String sql = "SELECT authorities_id from user_authority where user_id=?";
        long authId=jdbcTemplate.queryForObject(sql, new Object[] { newUserid }, Integer.class);
        System.out.println("NewauthId->"+authId);

        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();
        String update = "UPDATE authority " +
                "SET role_code = :role_code, role_description = :role_description WHERE id = :authId";

        namedParameters.addValue("role_code", "PROJECT_COORDINATOR");
        namedParameters.addValue("role_description", "Project coordinator role");
        namedParameters.addValue("authId", authId);

        int rowsAffected = jdbc.update(update, namedParameters);
        return rowsAffected;

    }

    public long getUserIdOfOldCoordinator(Long projectId) {
        System.out.println("projectId->"+projectId);
        String sql = "SELECT user.id as userId from user " +
                "INNER JOIN project_coordinator ON user.id=project_coordinator.id " +
                "INNER JOIN project ON project_coordinator.coordinator_id=project.coordinator_id" +
                " where project_id = ?";
        long oldCoordinatorId= jdbcTemplate.queryForObject(sql, new Object[] { projectId }, Integer.class);
        System.out.println("oldCoordinatorId->"+oldCoordinatorId);
        return oldCoordinatorId;
    }

    public long downgradeNewUserRole(long oldUserid) {
        String sql = "SELECT authorities_id from user_authority where user_id=?";
        long authId=jdbcTemplate.queryForObject(sql, new Object[] { oldUserid }, Integer.class);
        System.out.println("OldauthId->"+authId);

        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();
        String update = "UPDATE authority " +
                "SET role_code = :role_code, role_description = :role_description WHERE id = :authId";

        namedParameters.addValue("role_code", "VOLUNTEER");
        namedParameters.addValue("role_description", "Volunteer role");
        namedParameters.addValue("authId", authId);

        int rowsAffected = jdbc.update(update, namedParameters);
        return rowsAffected;
    }

    public long initializeProject(Long projectId) {

        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();
        String update = "UPDATE project " +
                "SET status = 1 WHERE project_id = :projectId";

        namedParameters.addValue("projectId", projectId);

        int rowsAffected = jdbc.update(update, namedParameters);
        return rowsAffected;
    }

    public long assignProjectCoordinator(Long projectId, long newCoordinatorId) {
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();
        String update = "UPDATE project " +
                "SET coordinator_id =:newCoordinatorId WHERE project_id = :projectId";

        namedParameters.addValue("projectId", projectId);
        namedParameters.addValue("newCoordinatorId", newCoordinatorId);


        int rowsAffected = jdbc.update(update, namedParameters);
        return rowsAffected;

    }

    public long removeCurrentProjectCoordinator(long oldUserid) {
        MapSqlParameterSource namedParameters = new MapSqlParameterSource();
        namedParameters.addValue("id", oldUserid);

        String query = "Delete FROM project_coordinator where id = :oldUserid;";

        return jdbc.update(query, namedParameters);
    }
}
