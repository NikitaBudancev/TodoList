const express = require("express");
const mysql = require("mysql");
const methodOverride = require("method-override");

const app = express();
const PORT = 3080;

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "todos",
});

connection.connect();

app.use(methodOverride());
const cors = require("cors");

app.use(cors());
const bodyParser = require("body-parser");
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get("/todo", (req, res) => {
  let limit = parseInt(req.query.limit) || 10;
  let offset = parseInt(req.query.page) * limit - limit || 0;
  connection.query(
    `SELECT * FROM todo LIMIT ${limit} OFFSET ${offset}`,
    function (error, results) {
      if (error) throw error;
      res.send(results);
    }
  );
});

app.post("/todo", (req, res) => {
  connection.query(
    `INSERT INTO todo (content) VALUES (?)`,
    [req.body.content],
    (error, result) => {
      try {
        res.status(201).send("hello");
        console.log(1);
      } catch (error) {
        console.log(new Error(error));
      }
    }
  );
});

app.put("/todo/important/:id", (req, res) => {
  const id = req.params.id;
  const important = req.body.important;
  console.log(req.body);
  connection.query(
    `UPDATE todo SET important=${important} WHERE id=${id}`,
    (error, result) => {
      res.status(200).send();
    }
  );
});

app.put("/todo/done/:id", (req, res) => {
  const id = req.params.id;
  const done = req.body.done;
  console.log(id)
  connection.query(
    `UPDATE todo SET done=${done} WHERE id=${id}`,
    (error, result) => {
      res.status(200).send();
    }
  );
});

app.delete("/todo/del/:id", (req, res) => {
  const id = req.params.id;
 
  connection.query(`DELETE FROM todo WHERE id=${id}`, (error, result) => {
      if (error) throw error;

      res.send('User deleted.');
  });
});

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log("Server started");
});
