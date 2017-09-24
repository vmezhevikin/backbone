package com.vmezhevikin.backbone.repository;

import com.vmezhevikin.backbone.entity.*;
import java.util.*;
import org.springframework.data.repository.*;

public interface ContactRepository extends CrudRepository<Contact, Integer> {

    List<Contact> findAll();
}
