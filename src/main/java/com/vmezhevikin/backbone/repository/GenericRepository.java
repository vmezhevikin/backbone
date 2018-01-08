package com.vmezhevikin.backbone.repository;

import java.util.List;

public interface GenericRepository<T, ID> {

    T findOne(ID id);

    List<T> findAll();

    Long count();

    T save(T entity);

    T update(T entity);

    T delete(T entity);
}
