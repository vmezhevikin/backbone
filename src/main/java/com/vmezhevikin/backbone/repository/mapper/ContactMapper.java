package com.vmezhevikin.backbone.repository.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.vmezhevikin.backbone.entity.Contact;
import com.vmezhevikin.backbone.entity.Group;
import com.vmezhevikin.backbone.repository.ContactRepository;
import com.vmezhevikin.backbone.repository.GroupRepository;

public class ContactMapper implements RowMapper<Contact> {

    @Override
    public Contact mapRow(ResultSet rs, int rowNum) throws SQLException {
        Group group = Group.builder()
            .id(rs.getInt(ContactRepository.COLUMN_GROUP_ID))
            .description(rs.getString(GroupRepository.COLUMN_NAME))
            .build();

        return Contact.builder()
            .id(rs.getInt(ContactRepository.COLUMN_ID))
            .name(rs.getString(ContactRepository.COLUMN_NAME))
            .image(rs.getString(ContactRepository.COLUMN_IMAGE))
            .phone(rs.getString(ContactRepository.COLUMN_PHONE))
            .group(group)
            .build();
    }
}
