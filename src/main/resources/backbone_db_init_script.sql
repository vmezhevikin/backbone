-- set init values

INSERT IGNORE INTO backbone.contact_group
(id, group_name) VALUES
  (1, 'category1'),
  (2, 'category2'),
  (3, 'category3'),
  (4, 'category4'),
  (5, 'category5');

INSERT IGNORE INTO backbone.contact
(id, group_id, contact_name, phone, image) VALUES
  (1, 1, 'contact1', '+3801234567', '/img/0.jpg'),
  (2, 1, 'contact2', '+3801234567', '/img/1.jpg'),
  (3, 1, 'contact3', '+3801234567', '/img/2.jpg'),
  (4, 1, 'contact4', '+3801234567', '/img/3.jpg'),
  (5, 1, 'contact5', '+3801234567', '/img/4.jpg'),
  (6, 2, 'contact6', '+3801234567', '/img/5.jpg'),
  (7, 2, 'contact7', '+3801234567', '/img/6.jpg'),
  (8, 2, 'contact8', '+3801234567', '/img/7.jpg'),
  (9, 2, 'contact9', '+3801234567', '/img/8.jpg'),
  (10, 2, 'contact10', '+3801234567', '/img/9.jpg'),
  (11, 3, 'contact11', '+3801234567', '/img/10.jpg'),
  (12, 3, 'contact12', '+3801234567', '/img/11.jpg'),
  (13, 3, 'contact13', '+3801234567', '/img/12.jpg'),
  (14, 3, 'contact14', '+3801234567', '/img/13.jpg'),
  (15, 3, 'contact15', '+3801234567', '/img/14.jpg'),
  (16, 4, 'contact16', '+3801234567', '/img/15.jpg'),
  (17, 4, 'contact17', '+3801234567', '/img/16.jpg'),
  (18, 4, 'contact18', '+3801234567', '/img/17.jpg'),
  (19, 4, 'contact19', '+3801234567', '/img/18.jpg'),
  (20, 4, 'contact20', '+3801234567', '/img/19.jpg'),
  (21, 5, 'contact21', '+3801234567', '/img/20.jpg'),
  (22, 5, 'contact22', '+3801234567', '/img/21.jpg'),
  (23, 5, 'contact23', '+3801234567', '/img/22.jpg'),
  (24, 5, 'contact24', '+3801234567', '/img/23.jpg'),
  (25, 5, 'contact25', '+3801234567', '/img/24.jpg');

