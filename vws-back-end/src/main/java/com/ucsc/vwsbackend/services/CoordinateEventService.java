package com.ucsc.vwsbackend.services;



import com.ucsc.vwsbackend.entities.Event;
import com.ucsc.vwsbackend.repository.coordinateEventDao.CoordinateEventJdbcRepository;
import com.ucsc.vwsbackend.repository.coordinateEventDao.CoordinateEventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class CoordinateEventService {

    @Autowired
    CoordinateEventRepository coordinateEventRepository;

    @Autowired
    CoordinateEventJdbcRepository coordinateEventJdbcRepository ;

    public static long addCoordinatedEvents(Event event){
        return CoordinateEventJdbcRepository.addCoordinatedEvents(event);
    }



    public static long updateCoordinatedEventStatus(Event event) {
        return CoordinateEventJdbcRepository.updateCoordinatedEventStatus(event);
    }

}
