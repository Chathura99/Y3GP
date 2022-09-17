package com.ucsc.vwsbackend.repository.ProjectDao;

import com.ucsc.vwsbackend.entities.ProjectCoordinator;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRepository extends JpaRepository<ProjectCoordinator, Long> {
    ProjectCoordinator save(ProjectCoordinator projectCoordinator);
}
