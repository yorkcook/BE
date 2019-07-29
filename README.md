I'll Serve Soup Backend


POST api/auth/register

Expects request body: { "username": "user1", "email":"email1@email.com", "password": "1234", "kit_id": 4 }

Returns single object: { "id": 4, "username": "user4", "email": "email4@emai.com", "kitchen": { "Name": "Martin de Porres House of Hospitality", "Location": "San Francisco", "Website": "http://www.martindeporres.org/" } }

POST api/auth/login

Expects request body: { "username": "user1", "password":"1234" }

Returns single object: { "message": "Welcome user1", "token": "token" }

GET /api/inventory

Returns full inventory in array of objects. Each object:
{ "Name": "popcorn", "Quantity": 10, "Unit": "packages", "Price": 1000, //in cents "Alert": 0, //alert when quantity reaches this amount "Category": "dry", "Kitchen": "Saint Antony's" }

GET /api/inventory/:id 

Returns single inventory item as object: { "Name": "popcorn", "Quantity": 10, "Unit": "packages", "Price": 1000, //in cents "Alert": 0, //alert when quantity reaches this amount "Category": "dry", "Kitchen": "Saint Antony's" }

GET /api/users/:id

Returns single user object:{
  "id": 1,
  "username": "user1",
  "email": "email1@11email.com"
}

PUT /api/users/:id 

Expects object with changes to be updated. 

Returns messages: "Update successful" or "User not found"

DELETE /api/users/:id

Returns status 204 if successful, or meessage, "User not found to delete" if unsuccessful. 

GET /api/users/:id/inventory 

Returns inventory list by user id as array of objects: [ { "Name": "popcorn", "Quantity": 10, "Unit": "packages", "Category": "dry" }, { "Name": "black beans", "Quantity": 30, "Unit": "cans", "Category": "canned&jarred" }]

GET/api/inventory/kitchen/:id
AND
GET/api/inventory/user/:id

Returns inventory list by kitchen (for kitchen/:id) or User (for user/:id). Returns an array of objects. Each Object: 
  {
    "item_name": "popcorn",
    "quantity": 10,
    "unit_name": "packages",
    "price": 1000,
    "alert_when": 0,
    "cat_name": "dry"
  },