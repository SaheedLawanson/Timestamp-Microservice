About the project

The timestamp microservice project is an API which helps to convert between 
different time formats based on the value passed into the API's parameter. This API 
can be used by sending a post request to /api/<date>, in other words appending /api/<date> 
to the domain name. The "<date>" should be replaced with a valid time format.

When used correctly, the API returns a JSON object, the first item is the "<date>" converted 
to a unix time format and the second item is the "<date>" converted to a UTC datetimestamp format. JavaScript's accepted time formats can be found here https://www.w3schools.com/js/js_date_formats.asp, 
the API also accepts time in milliseconds using the year 1970 as reference (1970 corresponds to 0ms). 
Examples of different scenarios:

-   a POST request to "/api/2019-05-20" should return: 
    {"unix":1558310400000,"utc":"Mon, 20 May 2019 00:00:00 GMT"}.

-   If the API is called without passing any argument into the "<date>" parameter, returns 
    the same JSON object as before, but acts as if the current time was passed into the "<date>"
    parameter. 

-   If the values passed into the "<date>" parameter has a wrong format then the API returns
    an  error message in a JSON format like: "/api/ae" returns {"error": "Invalid Date"}.


Built with

- Node.js
- Express.js
- dotenv
- body-parser


Getting Started
To get a local copy up and running, follow these simple steps.


Prerequisites

- npm


Installation & Usage

- Clone the repo: git clone https://github.com/SaheedLawanson/Timestamp-Microservice.git

- Install node: run in cmd
    
    ```npm install node```

- Open cmd in the project root folder and run 
    
    ```node index.js```

- On your preferred browser, visit "localhost:3000"

- Use the API as specified
