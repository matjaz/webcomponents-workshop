var express = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('mylibrary.db');

/* GET all books */
router.get('/', function(req, res, next) {
  db.serialize(function() {
    db.all("SELECT * from books", function(err, rows) {
      res.json(rows);
    });
  });
})

/* GET book by id */
.get('/:book_id', function(req, res, next) {
  db.serialize(function() {
    db.get("SELECT * from books where id=" + req.params.book_id, function(err, row) {
      row.read = !!row.read;
      res.json(row);
    });
  });
})

/* POST new book */
.post('/', function(req, res, next) {
  db.serialize(function() {
    var statement = db.prepare("INSERT into books(title, author, read, pages) VALUES (?, ?, ?, ?)");
    statement.run(req.body.title, req.body.author, req.body.read || 0, req.body.pages, function(err) {
      db.get("SELECT * from books where id=" + this.lastID, function(err, row) {
        res.send(201, row);
      });
    });
  });
})

/* PUT update book read attribute */
.put('/:book_id', function(req, res, next) {
  db.serialize(function() {
    var statement = db.prepare("UPDATE books SET title=?, author=?, read=?, pages=? WHERE id=?");
    statement.run(
      req.body.title,
      req.body.author,
      req.body.read,
      req.body.pages,
      req.params.book_id
    );
    statement.finalize(function(row) {
      res.sendStatus(204);
    });
  });
});

module.exports = router;
