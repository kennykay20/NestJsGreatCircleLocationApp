# NestJsGreatCircleLocationApp
The great circle is the largest circle that can be drawn on the surface of a sphere


Materials: Visual Studio Code, MongoDb database, and postman for testing the endpoints
Language: NestJs, built on Nodejs runtime environment,
Make sure you install node_modules on the application before you run the application

## Install node_modules
$ npm install

open cli command prompt and run : npm run start

## Running the app
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod


It uses locahost:3000 by default , when u open the localhost it display this message on your page "Hello Welcome to my Location" to show the application runs

Open Postman to run or call the endpoints/url for testing
 
1. When you want to add/insert into the location
Call the localhost:3000 which shows by default after you run the app, like this

http://localhost:3000/locations

set the HttpMethod to Post
and add the necessary properties through the body in a json format for example
e.g 
{
        "LocationName": "Lagos",
        "Description": "A city in Nigeria",
        "Website": "testing.com",
        "Phone": "07051234258",
        "ContactPerson": "Kenny",
	"Latitude: "24",
	"Longitude: "30"
}
Note: The Latitude and Longitude represent the Coordinates 

this create a data into the database, and create an id value

2. when you want to fetch All location added 

Call the endpoint url below, it will fetch all data added

http://localhost:3000/locations

set the HttpMethod to Get

3. when you want to a Fetch specific location
Call the endpoint below with a Get HttpMethod,
by a LocationName

http://localhost:3000/locations/{LocationName}
set the HttpMethod to Get

4. To Update a location you call the Url below 
by the name of the location, i change or modify by the name of the locationName
because mongo database id is not in normal integer number, so that was why am using name to change location just for testing because name is not unique and if its in live it will be id because id will always be unique

http://localhost:3000/locations/{LocationName}
set the HttpMethod to Get

and place the parameter inside the body like this and change any of the parameter
body = 
{
      "LocationName": "Lagos",
      "Description": "A city in Nigeria",
      "Website": "testing.com",
      "Phone": "07051234258",
      "ContactPerson": "Femi Kayode",
      "Latitude: "24",
      "Longitude: "30"
}


5. to calculate the great circle distance you call the url/endpoint below

Get HttpMethod
http://localhost:3000/locations/calculateDistance

set the HttpMethod to Get

and pass the necessary parameter , all this number are in degree, because i convert the number to radian before i call the method to calculate the distance 

here is an example below set latitudeA to any number but am converting the number to radian 

body
{
    "latitudeA": 25,
    "latitudeB": 34,
    "longitudeA": 48,
    "longitudeB": 67,
    "radius": 5
}

6. Delete when you want to a Delete specific location
Call the endpoint below with a Get HttpMethod,
by a LocationName

http://localhost:3000/locations/{LocationName}
set the HttpMethod to Get

You delete by LocationName 
