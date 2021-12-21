// Requirements
const express = require('express')
const app = express()

require('dotenv').config()

const port = 3000

app.use('/', express.static('.'))
app.get('/', (req, res) => {
        res.sendFile(__dirname+"/index.html") 
})

app.get('/api/example', (req, res) => {
    let responseObj = {}
    responseObj['unix'] = new Date("2019-04-24").getTime()
    responseObj['utc'] = new Date("2019-04-24").toUTCString()

    res.json(responseObj)
})
  
// THE APP
let requestObj = {}

// GET request to /api/<date>
app.get('/api/:date', (req, res) => {
    // store the argument passed by the user in the "input" variable
    let input = req.params.date

    // if the user input is in the form "2000-10-20" ... 
    if(/^\d{4}-\d{2}-\d{2}$/.test(input)){
        // Convert the date to milliseconds and store it in the "responseObj" object
        requestObj['unix'] = new Date(input).getTime()
        // Convert the date to UTC timestamp and store it in the same object
        requestObj['utc'] = new Date(input).toUTCString()
    }

    // if the user input is an integer ...
    else if(/^\d+$/.test(input)){
        // Store the integer in the "responseObj" object
        requestObj['unix'] = parseInt(input)
        // Convert the integer to UTC timestamp and store it in the object
        requestObj['utc'] = new Date(parseInt(input)).toUTCString()
    } 
        
    else {

        // If the user input is in any other date format
        if(new Date(input) != "Invalid Date") {
            // Convert the date to milliseconds and store it in the "responseObj" object
            requestObj['unix'] = new Date(input).getTime()
            // Convert the date to UTC timestamp and store it in the same object
            requestObj['utc'] = new Date(input).toUTCString()
        }else{
         // If the user input cannot be converted to a date value ...
            requestObj = {error: "Invalid Date"}
        }
    }
    // Display the content of the requestObj object
    res.json(requestObj)
    // Clear the content for later use
    requestObj = {}
})

// GET call to /api/
app.get('/api/', (req, res) => {
    // Save the current time in milliseconds to the responseObj object
    requestObj['unix'] = new Date().getTime()
    // Save the current time to the object
    requestObj['utc'] = new Date().toUTCString()

    // Display the content of the requestObj object
    res.json(requestObj)
    // Clear the content for later use
    requestObj = {}
})

// Listens for requests  
app.listen(port, () => {
    console.log(`Now listening on port ${port}`)
})