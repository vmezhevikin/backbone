package com.vmezhevikin.backbone.entity;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class Contact {

    private Integer id;
    private String name;
    private String phone;
    private String image;
    private Group group;
}
