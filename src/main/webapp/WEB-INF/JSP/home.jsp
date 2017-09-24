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
        <div id="createDialog" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="createModal">
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
<script id="contactTemplate" type="text/template">
    <div class="col-xs-12 col-sm-4 col-md-3 col-lg-2 contactView">
        <div class="panel panel-default">
            <div class="panel-body">
                <img src="{{ image }}" alt="{{ image }}"
                     class="img-responsive img-thumbnail center-block">
                <div>
                    <h4 class="text-center">{{ name }}</h4>
                    <p class="text-center">
                        <small>{{ group.id }}</small>
                    </p>
                    <p class="text-center">{{ phone }}</p>
                    <button class="btn btn-danger center-block delete-button">Delete</button>
                </div>
            </div>
        </div>
    </div>
</script>
<script src="/static/js/lib/jquery.js"></script>
<script src="/static/js/lib/bootstrap.js"></script>
<script src="/static/js/lib/underscore.js"></script>
<script src="/static/js/lib/backbone.js"></script>
<script src="/static/js/model/contact.js"></script>
<script src="/static/js/model/contactList.js"></script>
<script src="/static/js/view/contact.js"></script>
<script src="/static/js/view/contactList.js"></script>
<script src="/static/js/app.js"></script>
</body>
</html>