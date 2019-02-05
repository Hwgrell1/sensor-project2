const express = require('express')
const app = express() 
<<<<<<< HEAD
const getSensorReadings = require('./get_sensor-readings')
=======
const getSensorReadings = require('./getSensorReadings')
>>>>>>> 81bc5a69568f73ca273dc410170164409e5d6237

app.get('/temperature', function (req, res) {
	getSensorReadings((err, temperature, humidity) => {

	if (!err) { 
		res.send(temperature.toFixed(1) + '°C') } }) })

app.get('/humidity', function (req, res) {
	getSensorReadings((err, temperature, humidity) => {
	if (!err) { 
		res.send(humidity.toFixed(1) + '%') } }) })

app.listen(3000, function () { console.log('Server listening on port 3000') 
	})

 