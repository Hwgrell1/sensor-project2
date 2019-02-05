const express = require('express')
const app = express() 
const gCSR = require('./cache')


app.get('/temperature', function (req, res) {
	res.send(gCSR.getTemperature().toFixed(1) + '°C') 
	}) 

app.get('/humidity', function (req, res) {
	res.send(gCSR.getHumidity().toFixed(1) + '%') 
	} ) 
app.listen(3000, function () { console.log('Server listening on port 3000') 
	})

 