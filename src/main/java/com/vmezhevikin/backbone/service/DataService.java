package com.vmezhevikin.backbone.service;

import com.vmezhevikin.backbone.entity.*;
import java.util.*;

public interface DataService {
    List<Contact> getAllContacts();

    Contact getContact(Integer id);

    Contact createContact(Contact contact);

    Contact updateContact(Integer id, Contact contact);

    Contact deleteContact(Integer id);

    List<Group> getAllGroups();
}
