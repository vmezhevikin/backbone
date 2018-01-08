package com.vmezhevikin.backbone.repository.impl;

import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import com.vmezhevikin.backbone.entity.Contact;
import com.vmezhevikin.backbone.repository.ContactRepository;
import com.vmezhevikin.backbone.repository.mapper.ContactMapper;

@Component
public class ContactRepositoryImpl implements ContactRepository {

    private JdbcTemplate jdbcTemplate;

    @Autowired
    public ContactRepositoryImpl(DataSource dataSource) {
        jdbcTemplate = new JdbcTemplate(dataSource);
    }

    @Override
    public Contact findOne(Integer id) {
        return jdbcTemplate.queryForObject(FIND_ONE, new ContactMapper(), id);
    }

    @Override
    public List<Contact> findAll() {
        return jdbcTemplate.query(FIND_ALL, new ContactMapper());
    }

    @Override
    public List<Contact> findPage(int page, int pageSize, String sort, String order) {
        return jdbcTemplate.query(FIND_PAGE, new ContactMapper(), sort, order, pageSize, page * pageSize);
    }

    @Override
    public Long count() {
        return jdbcTemplate.queryForObject(COUNT_ALL, Long.class);
    }

	@Override
	public Contact save(Contact entity) {
		throw new UnsupportedOperationException();
	}

	@Override
	public Contact update(Contact entity) {
		throw new UnsupportedOperationException();
	}

	@Override
	public Contact delete(Contact entity) {
		throw new UnsupportedOperationException();
	}

}
