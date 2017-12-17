package com.vmezhevikin.backbone.model;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class PaginatedResponse<T> {
    private int currentPage;
    private int totalPages;
    private int pageSize;
    private long totalRecords;
    private List<T> records;
}
