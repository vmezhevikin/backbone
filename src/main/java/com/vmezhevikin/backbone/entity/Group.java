package com.vmezhevikin.backbone.entity;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class Group {

    private Integer id;
    private String description;
}
