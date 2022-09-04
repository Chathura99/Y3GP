package com.ucsc.vwsbackend.entities;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
public class ParticipationStatus implements Serializable {

    @Column(name = "event_id")
    Long eventId;

    @Column(name = "volunteer_id")
    Long volunteerId;
}
