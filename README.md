I'll Serve Soup Backend

POST api/auth/register 

  Expects request body: 
    {
      "username": "user1",
      "email":"email1@email.com",
      "password": "1234",
      "kit_id": 4     //working on this
    }
    
  Returns single object:
    {
      "id": 4,
      "username": "user4",
      "email": "email4@emai.com",
      "kitchen": {
        "Name": "Martin de Porres House of Hospitality",
        "Location": "San Francisco",
        "Website": "http://www.martindeporres.org/"
      }
    }
  

POST api/auth/login:

  Expects request body:
    {
    "username": "user1",
    "password":"1234"
    }
    
  Returns single object:
    {
      "message": "Welcome user1",
      "token": "token"
    }


GET /api/inventory:

  Returns full inventory in array of objects. Each object:  
  {
    "Name": "popcorn",
    "Quantity": 10,
    "Unit": "packages",
    "Price": 1000,  //in cents
    "Alert": 0,     //alert when quantity reaches this amount
    "Category": "dry",
    "Kitchen": "Saint Antony's"
  }
  
GET /api/inventory/:id
  Returns single inventory item as object: 
    {
    "Name": "popcorn",
    "Quantity": 10,
    "Unit": "packages",
    "Price": 1000,  //in cents
    "Alert": 0,     //alert when quantity reaches this amount
    "Category": "dry",
    "Kitchen": "Saint Antony's"
  }
  
GET /api/users/:id/inventory
  Returns inventory list by user id as array of objects: 
  [
  {
    "Name": "popcorn",
    "Quantity": 10,
    "Unit": "packages",
    "Category": "dry"
  },
  {
    "Name": "black beans",
    "Quantity": 30,
    "Unit": "cans",
    "Category": "canned&jarred"
  }]
