package com.vmezhevikin.backbone.service.impl;

import com.vmezhevikin.backbone.entity.*;
import com.vmezhevikin.backbone.repository.*;
import com.vmezhevikin.backbone.service.*;
import java.util.*;
import org.slf4j.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;
import org.springframework.transaction.annotation.*;

@Service
public class DataServiceImpl implements DataService {

    private static final Logger LOGGER = LoggerFactory
            .getLogger(DataServiceImpl.class);

    @Autowired
    private ContactRepository contactRepository;
    @Autowired
    private GroupRepository groupRepository;

    @Override
    public List<Contact> getAllContacts() {
        LOGGER.info("getAllContacts");
        return contactRepository.findAll();
    }

    @Override
    public Contact getContact(Integer id) {
        LOGGER.info("getContact id={}", id);
        return contactRepository.findOne(id);
    }

    @Override
    @Transactional
    public Contact createContact(Contact contact) {
        LOGGER.info("createContact contact={}", contact);
        contact.setImage("/img/01.jpg");
        return contactRepository.save(contact);
    }

    @Override
    @Transactional
    public Contact updateContact(Integer id, Contact value) {
        LOGGER.info("updateContact id={}, contact={}", id, value);
        Contact contact = contactRepository.findOne(id);
        contact.setName(value.getName());
        contact.setPhone(value.getPhone());
        contact.setImage(value.getImage());
        if (!contact.getGroup().getId().equals(value.getGroup().getId())) {
            Group group = groupRepository.findOne(value.getGroup().getId());
            contact.setGroup(group);
        }
        return contactRepository.save(contact);
    }

    @Override
    @Transactional
    public void deleteContact(Integer id) {
        LOGGER.info("deleteContact id={}", id);
        contactRepository.delete(id);
    }

    @Override
    public List<Group> getAllGroups() {
        LOGGER.info("getAllGroups");
        return groupRepository.findAll();
    }
}
