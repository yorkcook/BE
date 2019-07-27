I'll Serve Soup Backend

POST api/auth/register 
  Expects request body: 
    {
      "username": "user1",
      "email":"email1@email.com",
      "password": "1234",
      "kit_id": 4     //working on this
    }
    
  Returns  object:
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
  Expects requet body:
    {
    "username": "user1",
    "password":"1234"
    }
    
  Returns object:
    {
      "message": "Welcome user1",
      "token": "token"
    }


