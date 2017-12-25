package com.vmezhevikin.backbone.repository;

import com.vmezhevikin.backbone.entity.*;
import java.util.*;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.*;

public interface ContactRepository extends PagingAndSortingRepository<Contact, Integer> {

    List<Contact> findAll();

    Page<Contact> findAll(Pageable pageable);
}
