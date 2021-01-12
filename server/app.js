const express = require('express');
const mysql = require('mysql');

const app = express()
const PORT = 3080

const cors = require('cors')

app.use(cors())
const bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'todos'

});

connection.connect();


app.get('/todo', (req, res) => {
    let limit = parseInt(req.query.limit) || 10;
    let offset = (parseInt(req.query.page) * limit) - limit || 0
    connection.query(`SELECT * FROM todo LIMIT ${limit} OFFSET ${offset}` , function (error, results, fields) {
        if (error) throw error;
        res.send(results)
    });
})


app.post('/todo', (req, res) => {
    connection.query('INSERT INTO todo (text,done,important ) VALUES ("my name kitos",false,false)', req.body, (error, result) => {
        if (error) throw error;

        res.status(201).send(`User added with ID: ${result.insertId}`);
    });
});


app.put('/todo/:id', (request, response) => {
    const id = request.params.id;
    const done = request.body.done
    console.log(done)

    connection.query(`UPDATE todo SET done=${done} WHERE id =${id}`, (error, result) => {
        console.log(id,request.body)
        if (error) throw error;

        response.send('User updated successfully.');
    });
});


app.listen(PORT,err=>{
    err ? console.log(err) : console.log('Server started')
})
