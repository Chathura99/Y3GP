package com.ucsc.vwsbackend.services;

import com.ucsc.vwsbackend.dto.ProjectDetail;
import com.ucsc.vwsbackend.dto.ProposedProjectdetails;
import com.ucsc.vwsbackend.dto.VolunteerUpgrade;
import com.ucsc.vwsbackend.entities.Project;
import com.ucsc.vwsbackend.entities.ProjectCoordinator;
import com.ucsc.vwsbackend.entities.Volunteer;
import com.ucsc.vwsbackend.repository.ProjectDao.ProjectJdbcRepository;
import com.ucsc.vwsbackend.repository.ProjectDao.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectService {

    @Autowired
    ProjectJdbcRepository projectJdbcRepository;

    @Autowired
    ProjectRepository projectRepository;
    public List<ProjectDetail> getOngoingProjects() {
        return projectJdbcRepository.getOngoingProjects();
    }

    public List<ProposedProjectdetails> getProposedProjects() {
        return projectJdbcRepository.getProposedProjects();
    }

    public long editProject(ProjectDetail projectDetail) {
//      get new volunteer data
        VolunteerUpgrade volunteerUpgrade=projectJdbcRepository.getNewCoordinatorData(projectDetail.getCoordinatorId());
//      save to pc
        ProjectCoordinator projectCoordinator =new ProjectCoordinator();
        projectCoordinator.setAddress(volunteerUpgrade.getAddress());
        projectCoordinator.setDistrict(volunteerUpgrade.getDistrict());
        projectCoordinator.setUniversityCollege(volunteerUpgrade.getUniversityCollege());
        projectCoordinator.setFirstName(volunteerUpgrade.getFirstName());
        projectCoordinator.setLastName(volunteerUpgrade.getLastName());

        long newUserid=projectJdbcRepository.getUserIdOfNewVolunteer(projectDetail.getCoordinatorId());
        long oldUserid=projectJdbcRepository.getUserIdOfOldCoordinator(projectDetail.getProjectId());
//        insert new project coordinator
        projectJdbcRepository.saveData(projectCoordinator,newUserid);
//        remove from volunteer
        projectJdbcRepository.removeFromVolunteer(projectDetail.getCoordinatorId());
//        upgrade new user role
        projectJdbcRepository.upgradeNewUserRole(newUserid);
//        downgrade current user role
        projectJdbcRepository.downgradeNewUserRole(oldUserid);
//        remove current project coordinator
        projectJdbcRepository.removeCurrentProjectCoordinator(oldUserid);


        projectDetail.setCoordinatorId(projectJdbcRepository.getNewCoordinatorId(newUserid));
        return projectJdbcRepository.editProject(projectDetail);
    }


    public List<Volunteer> getAllVolunteers() {
        return projectJdbcRepository.getAllVolunteers();
    }

    public String initializeProject(ProposedProjectdetails proposedProjectdetails) {
//      get new volunteer data
        VolunteerUpgrade volunteerUpgrade=projectJdbcRepository.getNewCoordinatorData(proposedProjectdetails.getVolunteerId());

//      save to pc
        ProjectCoordinator projectCoordinator =new ProjectCoordinator();
        projectCoordinator.setAddress(volunteerUpgrade.getAddress());
        projectCoordinator.setDistrict(volunteerUpgrade.getDistrict());
        projectCoordinator.setUniversityCollege(volunteerUpgrade.getUniversityCollege());
        projectCoordinator.setFirstName(volunteerUpgrade.getFirstName());
        projectCoordinator.setLastName(volunteerUpgrade.getLastName());

//      update project status to 1
        projectJdbcRepository.initializeProject(proposedProjectdetails.getProjectId());

//      upgrade proposed volunteer to project coordinator
        long proposedVolunteerUserID = projectJdbcRepository.getUserIdOfNewVolunteer(proposedProjectdetails.getVolunteerId());
        projectJdbcRepository.upgradeNewUserRole(proposedVolunteerUserID);

//      remove from volunteer
        projectJdbcRepository.removeFromVolunteer(proposedProjectdetails.getVolunteerId());

//      get newly created project coordinator id
        long newCoordinatorUserId=projectJdbcRepository.getUserIdOfNewVolunteer(proposedProjectdetails.getVolunteerId());
        System.out.println("newCoordinatorUserId->"+newCoordinatorUserId);

//      insert new project coordinator
        projectJdbcRepository.saveData(projectCoordinator,newCoordinatorUserId);

        long newCoordinatorId=projectJdbcRepository.getNewCoordinatorId(newCoordinatorUserId);
        System.out.println("newCoordinatorId->"+newCoordinatorId);

//      assign project coordinator
        projectJdbcRepository.assignProjectCoordinator(proposedProjectdetails.getProjectId(),newCoordinatorId);


        return proposedProjectdetails.getName()+" project added Successful!";
    }
}
