package com.ucsc.vwsbackend.repository.volunteerDao;

import com.ucsc.vwsbackend.entities.User;
import com.ucsc.vwsbackend.entities.Volunteer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VolunteerRepository extends JpaRepository<Volunteer, Long> {
    Volunteer save(Volunteer volunteer);
}
