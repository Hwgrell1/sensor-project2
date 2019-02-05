const getSensorReadings = require('./readings') 

/* 
Instantiate the cache. In this case its a simple variable
stored in local memory
*/ 

const cache 
const cache2 


/*
Run a function to get the sensor readings every 2 seconds 
(the same sampling rate as our sensor)
*/ 

setInterval(() => { getSensorReadings((err, temperature, humidity) => { 
			if (err) { 
			return console.error(err) }

 /* 
Set the values of the cache on receiving new readings 
*/ 

cache = temperature 
cache2  = humidity }) 
}, 2000) 

/*
The functions that we expose only return the cached
values, and don't make a call to the sensor interface 
everytime
*/ 

module.exports.getTemperature = () => cache
module.exports.getHumidity = () => cache2
 