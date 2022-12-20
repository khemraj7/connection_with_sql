var express = require('express')
var bodyParser = require('body-parser')
const mysql = require('mysql2')
const app = express()

var mysqlConnection = mysql.createConnection({
  host: '127.0.0.1',
  port: '3306',
  user: 'root',
  password: '1234',
  database: 'testDatabase',
  multipleStatements: true,
})

mysqlConnection.connect((err) => {
  if (!err) {
    console.log('Connection Established Successfully')
  } else {
    console.log('Connection Failed!')
  }
})

module.exports = app
