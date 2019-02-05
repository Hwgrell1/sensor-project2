const express = require('express')
const app = express() 
const getSensorReadings1 = require('getSensorReadings')


app.get('/temperature', function (req, res) {
	getSensorReadings1((err, temperature, humidity) => {

	if (!err) { 
		res.send(temperature.toFixed(1) + '�C') } }) })

app.get('/humidity', function (req, res) {
	getSensorReadings1((err, temperature, humidity) => {
	if (!err) { 
		res.send(humidity.toFixed(1) + '%') } }) })

app.listen(3000, function () { console.log('Server listening on port 3000') 
	})

 