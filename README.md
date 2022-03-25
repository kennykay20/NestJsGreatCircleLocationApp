# NestJsGreatCircleLocationApp
The great circle is the largest circle that can be drawn on the surface of a sphere


Materials: Visual Studio Code, MongoDb database, and postman for testing the endpoints
Language: NestJs, built on Nodejs runtime environment,
You run this application when you on the path of the application is on
open cli command prompt and run : npm run start

1. When you want to add/insert into the location
Call the localhost:3000 by default, like this

Post
http://localhost:3000/locations
set the HttpMethod to Post
and add the necessary properties through the body in a json format for example
e.g 
{
        "LocationName": "Lagos",
        "Description": "A city in Nigeria",
        "Website": "testing.com",
        "Phone": "07051234258",
        "ContactPerson": "Kenny"
}

this create a data into the database, abd create an id value

2. when you want to fetch All location added 

Call the endpoint url below
Get
http://localhost:3000/locations

3. when you want to a Fetch specific location
Call the endpoint below with a Get HttpMethod,
by a LocationName

http://localhost:3000/locations/{LocationName}


 
