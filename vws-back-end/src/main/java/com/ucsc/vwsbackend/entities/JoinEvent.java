package com.ucsc.vwsbackend.entities;

import javax.persistence.*;

@Table(name = "join_event")
@Entity
public class JoinEvent {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    

}
