package com.vmezhevikin.backbone.repository;

import com.vmezhevikin.backbone.entity.*;
import java.util.*;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.*;

public interface ContactRepository extends CrudRepository<Contact, Integer> {

    List<Contact> findAll();

    @Query(
        value = "SELECT * FROM backbone.contact ORDER BY ?3 ?4 LIMIT ?1 OFFSET ?2",
        nativeQuery = true)
    List<Contact> find(int perPage, int offset, String sort, String order);
}
