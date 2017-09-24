package com.vmezhevikin.backbone.repository;

import com.vmezhevikin.backbone.entity.*;
import java.util.*;
import org.springframework.data.repository.*;

public interface GroupRepository extends CrudRepository<Group, Integer> {

    List<Group> findAll();
}
