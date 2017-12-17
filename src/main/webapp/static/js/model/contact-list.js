define(['underscore', 'backbone', 'model/contact', 'pagination'],
    function (_, Backbone, Contact) {

        return Backbone.PageableCollection.extend({
            model: Contact,
            url: '/api/contact',
            
            mode: 'server',
            
            state: {
                firstPage: 1,
                currentPage: 1,
                pageSize: 5,
                sortKey: 'id',
                order: -1
            },
            
            queryParams: {
            	totalPages: null,
            	totalRecords: null,
                currentPage: 'page',
                pageSize: 'perPage',
                sortKey: 'sort',
                order: 'order'
            },
            
            parseState: function (response, queryParams, state, options) {
                return {
                    currentPage: response.currentPage,
                    totalPages: response.totalPages,
                    pageSize: response.pageSize,
                    totalRecords: response.totalRecords
                };
            },
            
            parseRecords: function (response, options) {
                return response.records;
            }
        });
    });