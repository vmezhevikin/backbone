package com.vmezhevikin.backbone.controller;

import com.vmezhevikin.backbone.Constants;
import com.vmezhevikin.backbone.entity.*;
import com.vmezhevikin.backbone.model.PaginatedResponse;
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

    @RequestMapping(method = RequestMethod.GET)
    public PaginatedResponse<Contact> getPaginatedContacts(
            @RequestParam(value = "page", defaultValue = Constants.DEFAULT_PAGE) int page,
            @RequestParam(value = "perPage", defaultValue = Constants.DEFAULT_PER_PAGE) int perPage,
            @RequestParam(value = "sort", defaultValue = Constants.DEFAULT_SORT) String sort,
            @RequestParam(value = "order", defaultValue = Constants.DEFAULT_ORDER) String order) {
        LOGGER.info("getPaginatedContacts page={}, perPage={}, sort={}, order={}", 
            page, perPage, sort, order);
        List<Contact> contacts = dataService.getContactsPage(page, perPage, sort, order);
        long totalRecords = dataService.getTotalContactsCount();
        int totalPages = (int) totalRecords / perPage;
        return PaginatedResponse.<Contact>builder()
                .currentPage(page).totalPages(totalPages)
                .pageSize(perPage).totalRecords(totalRecords)
                .records(contacts).build();
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
    public Contact deleteContact(@PathVariable Integer id) {
        LOGGER.info("deleteContact id={}", id);
        return dataService.deleteContact(id);
    }
}
