const express = require('express')
const app = express()
const port = 3000
var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'guomei'
})

connection.connect()




app.get('/',function(req,res){
    connection.query('select * from user', function (err, rows, fields) {
        res.send(rows)
    })
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))