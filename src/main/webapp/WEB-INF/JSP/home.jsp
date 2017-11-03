<%@ page contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" trimDirectiveWhitespaces="true" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Backbone</title>
    <link rel="stylesheet" href="/static/css/lib/bootstrap.css">
    <link rel="stylesheet" href="/static/css/app.css">
</head>
<body>
<div class="container-fluid">
    <div id="contactList" class="row">
        <div class="col-xs-12">
            <div class="panel panel-default">
                <div class="panel-body">
                    <button type="button" class="btn btn-success pull-right" data-toggle="modal"
                            data-target="#createDialog">Add
                        new contact
                    </button>
                </div>
            </div>
        </div>
        <div id="createDialog" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="createDialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h4 class="modal-title">Add new contact</h4>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" class="form-control" id="name" placeholder="Name"/>
                        </div>
                        <div class="form-group">
                            <label for="phone">Phone</label>
                            <input type="text" class="form-control" id="phone" placeholder="Phone"/>
                        </div>
                        <div class="form-group">
                            <label for="group">Group</label>
                            <select class="form-control" id="group">
                                <option value="1">Name1</option>
                                <option value="2">Name2</option>
                                <option value="3">Name3</option>
                                <option value="4">Name4</option>
                            </select>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close
                        </button>
                        <button id="createButton" type="button" class="btn btn-primary">Create
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script data-main="/static/js/app" src="/static/js/lib/require/require-2.3.5.js"></script>
</body>
</html>