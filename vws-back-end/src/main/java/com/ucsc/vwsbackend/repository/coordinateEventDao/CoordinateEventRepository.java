package com.ucsc.vwsbackend.repository.coordinateEventDao;

import com.ucsc.vwsbackend.entities.Event;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CoordinateEventRepository extends JpaRepository<Event, Long> {
}
