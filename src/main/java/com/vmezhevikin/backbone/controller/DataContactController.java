package com.vmezhevikin.backbone.controller;

import com.vmezhevikin.backbone.entity.*;
import com.vmezhevikin.backbone.service.*;
import java.util.*;
import org.slf4j.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/contact")
public class DataContactController {

    private static final Logger LOGGER = LoggerFactory
            .getLogger(DataContactController.class);

    @Autowired
    private DataService dataService;

  /*
    url               HTTP Method  Operation
    /api/contact      GET          Get an array of all books
    /api/contact/:id  GET          Get the book with id of :id
    /api/contact      POST         Add a new book and return the book with an id attribute added
    /api/contact/:id  PUT          Update the book with id of :id
    /api/contact/:id  DELETE       Delete the book with id of :id
   */

    @RequestMapping(method = RequestMethod.GET)
    public List<Contact> getAllContacts() {
        LOGGER.info("getAllContacts");
        return dataService.getAllContacts();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Contact getContact(@PathVariable Integer id) {
        LOGGER.info("getContact id={}", id);
        return dataService.getContact(id);
    }

    @RequestMapping(method = RequestMethod.POST)
    public Contact createContact(@RequestBody Contact contact) {
        LOGGER.info("createContact contact={}", contact);
        return dataService.createContact(contact);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public Contact updateContact(@PathVariable Integer id, @RequestBody Contact contact) {
        LOGGER.info("updateContact id={}, contact={}", id, contact);
        return dataService.updateContact(id, contact);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteContact(@PathVariable Integer id) {
        LOGGER.info("deleteContact id={}", id);
        dataService.deleteContact(id);
    }
}
