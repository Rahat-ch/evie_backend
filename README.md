To Run: 

Make sure you have Docker and Docker Compose installed

Install docker: 
https://docs.docker.com/install/

Install docker compose:
https://docs.docker.com/compose/install/

To verify you have docker installed run `docker -v` in terminal and you'll get a version back. 

To verify you have docker-compose installed run `docker-compose -v` in terminal and you'll get a version back. 

To run the app: 

- Clone the repo
- open the code in two tabs of terminal
- `npm install` in one of the tabs
- once install is done run `docker-compose up` -> this should start mongoDB up in that terminal
- in your other tab `npm start`
- open http://localhost:9000 and you should see a welcome message this means you did everything correctly

Testing in Postman:

Download postman here: 
https://www.getpostman.com/downloads/

How to test current routes:

Create users:

In Postman run a POST request to localhost:9001/user

click body -> raw -> on the dropdown select JSON

sample json object for creating a user:

```
{
  "username": "Rahat",
  "email": "rahat@rahatcodes.com"
}
```
Once you hit send you should get back something similar to this:

```
{
    "_id": "5df9b0cc368197d45a819947",
    "username": "Rahat",
    "email": "rahat@rahatcodes.com",
    "__v": 0
}
```

Now go ahead and add a bunch of users then test the Get route: 

- Switch from POST to GET and change the url you're hitting to localhost:9001/users
- This time just give your body an empty object
- If done correctly then postman will return an array of all of the users created



