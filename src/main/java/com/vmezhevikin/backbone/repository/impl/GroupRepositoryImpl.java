package com.vmezhevikin.backbone.repository.impl;

import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import com.vmezhevikin.backbone.entity.Group;
import com.vmezhevikin.backbone.repository.GroupRepository;
import com.vmezhevikin.backbone.repository.mapper.GroupMapper;

@Component
public class GroupRepositoryImpl implements GroupRepository {

    private JdbcTemplate jdbcTemplate;

    @Autowired
    public GroupRepositoryImpl(DataSource dataSource) {
    	jdbcTemplate = new JdbcTemplate(dataSource);
    }

    @Override
    public Group findOne(Integer id) {
        return jdbcTemplate.queryForObject(FIND_ONE, new GroupMapper(), id);
    }

	@Override
	public List<Group> findAll() {
		throw new UnsupportedOperationException();
	}

	@Override
	public Long count() {
		throw new UnsupportedOperationException();
	}

	@Override
	public Group save(Group entity) {
		throw new UnsupportedOperationException();
	}

	@Override
	public Group update(Group entity) {
		throw new UnsupportedOperationException();
	}

	@Override
	public Group delete(Group entity) {
		throw new UnsupportedOperationException();
	}

}
