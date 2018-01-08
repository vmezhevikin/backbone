package com.vmezhevikin.backbone.repository;

import com.vmezhevikin.backbone.entity.*;

public interface ContactRepository extends GenericPagableRepository<Contact, Integer> {

    String TABLE_NAME = "contact";

    String COLUMN_ID = "id";
    String COLUMN_GROUP_ID = "group_id";
    String COLUMN_NAME = "contact_name";
    String COLUMN_PHONE = "phone";
    String COLUMN_IMAGE = "image";

    String FIND_ONE = "SELECT * FROM contact WHERE id = ?";
    String FIND_ALL = "SELECT * FROM contact "
            + "LEFT JOIN contact_group ON contact.group_id = contact_group.id";
    String FIND_PAGE = "SELECT * FROM contact "
            + "LEFT JOIN contact_group ON contact.group_id = contact_group.id "
            + "ORDER BY ? ? LIMIT ? OFFSET ?";
    String COUNT_ALL = "SELECT COUNT(*) FROM contact";
}
