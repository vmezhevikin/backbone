package com.vmezhevikin.backbone.repository;

import java.util.List;

public interface GenericPagableRepository<T, ID> extends GenericRepository<T, ID> {

    List<T> findPage(int page, int pageSize, String sort, String order);
}
