package com.vmezhevikin.backbone.entity;

import java.io.*;
import javax.persistence.*;
import lombok.*;

@Entity
@Table(name = "contact")
@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class Contact implements Serializable {

    private static final long serialVersionUID = 441953216834661423L;

    @Id
    @Column(unique = true, nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "contact_name", nullable = false, length = 50)
    private String name;

    @Column(nullable = false, length = 20)
    private String phone;

    @Column(nullable = false)
    private String image;

    @ManyToOne(optional = false)
    @JoinColumn(name = "group_id", nullable = false)
    private Group group;
}
