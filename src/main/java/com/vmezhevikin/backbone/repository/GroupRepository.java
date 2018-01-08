package com.vmezhevikin.backbone.repository;

import com.vmezhevikin.backbone.entity.*;

public interface GroupRepository extends GenericRepository<Group, Integer> {

    String TABLE_NAME = "contact_group";

    String COLUMN_ID = "id";
    String COLUMN_NAME = "group_name";

    String FIND_ONE = "SELECT * FROM contact_group WHERE id = ?";
}
