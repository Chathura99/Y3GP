package com.ucsc.vwsbackend.entities;

import javax.persistence.*;

@Entity
public class ParticipateEvent {

    @EmbeddedId
    ParticipationStatus id;

    @ManyToOne
    @MapsId("eventId")
    @JoinColumn(name = "event_id")
    Event event;

    @ManyToOne
    @MapsId("volunteerId")
    @JoinColumn(name = "volunteer_id")
    Volunteer volunteer;

    int status;

}
