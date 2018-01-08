package com.vmezhevikin.backbone.repository.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.vmezhevikin.backbone.entity.Group;
import com.vmezhevikin.backbone.repository.GroupRepository;

public class GroupMapper implements RowMapper<Group> {

    @Override
    public Group mapRow(ResultSet rs, int rowNum) throws SQLException {
        return Group.builder()
            .id(rs.getInt(GroupRepository.COLUMN_ID))
            .description(rs.getString(GroupRepository.COLUMN_NAME))
            .build();
    }
}
