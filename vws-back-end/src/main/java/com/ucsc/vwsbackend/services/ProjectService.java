package com.ucsc.vwsbackend.services;

import com.ucsc.vwsbackend.dto.AnnouncementInfo;
import com.ucsc.vwsbackend.dto.AnnouncementWithAuthor;
import com.ucsc.vwsbackend.dto.NewProjectDetail;
import com.ucsc.vwsbackend.dto.ProjectDetail;
import com.ucsc.vwsbackend.entities.Project;
import com.ucsc.vwsbackend.repository.ProjectDao.ProjectJdbcRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectService {

    @Autowired ProjectJdbcRepository projectJdbcRepository;
    public List<ProjectDetail> getOngoingProjects() {
        return projectJdbcRepository.getOngoingProjects();
    }

    public List<ProjectDetail> getProposedProjects() {
        return projectJdbcRepository.getProposedProjects();
    }

    public long addProposedProjects(NewProjectDetail newProjectDetail){
        return projectJdbcRepository.addProposedProjects(newProjectDetail);
    }
}
