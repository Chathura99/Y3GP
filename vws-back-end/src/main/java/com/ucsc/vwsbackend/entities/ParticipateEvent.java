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

    public ParticipationStatus getId() {
        return id;
    }

    public void setId(ParticipationStatus id) {
        this.id = id;
    }

    public Event getEvent() {
        return event;
    }

    public void setEvent(Event event) {
        this.event = event;
    }

    public Volunteer getVolunteer() {
        return volunteer;
    }

    public void setVolunteer(Volunteer volunteer) {
        this.volunteer = volunteer;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    @ManyToOne
    @MapsId("volunteerId")
    @JoinColumn(name = "volunteer_id")
    Volunteer volunteer;

    int status;

}
