package com.vmezhevikin.backbone.entity;

import java.io.*;
import javax.persistence.*;
import lombok.*;

@Entity
@Table(name = "contact_group")
@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class Group implements Serializable {

    private static final long serialVersionUID = 4419584168346691423L;

    @Id
    @Column(unique = true, nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "group_name", nullable = false, length = 100)
    private String description;
}
