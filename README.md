# I'll Serve Soup Backend

## POST api/auth/register

Expects request body:

```
  {
    "username": "user1",
    "email":"email1@email.com",
    "password": "1234",
    "kit_id": 4
  }
```

Returns single object:

```
{
  "id": 8,
  "username": "user7",
  "email": "email7@emai.com",
  "kitchen": {
    "kit_name": "Saint Antony's",
    "city": "San Francisco",
    "website": "https://www.stanthonysf.org/"
  }
}
```

## POST api/auth/login

Expects request body:

```
{
"username": "user1",
"password":"1234"
}
```

Returns single object:

```
{
"message": "Welcome user1",
"token": "token"
}
```

## GET /api/users/:id

Returns single user object:

```
{
"id": 1,
"username": "user1",
"email": "email1@11email.com"
}
```

## PUT /api/users/:id

Expects object with changes to be updated.

Returns messages: "Update successful" or "User not found"

## DELETE /api/users/:id

Returns status 204 if successful, or meessage, "User not found to delete" if unsuccessful.

## GET /api/users/:id/inventory

Returns inventory list by user id as array of objects:

```
[
  {
    "item_name": "yellow popcorn",
    "quantity": 10,
    "unit_name": "pounds",
    "cat_name": "meat&poultry"
  },
  {
    "item_name": "black beans",
    "quantity": 30,
    "unit_name": "cans",
    "cat_name": "canned&jarred"
  }
]  
```

## GET /api/inventory
Returns full inventory in array of objects. Each object:

```
 [
  {
    "id": 1,
    "item_name": "yellow popcorn",
    "quantity": 10,
    "unit": "pounds",
    "price": 1000,
    "alert_when": 0,
    "cat_namey": "meat&poultry",
    "kit_name": "Saint Antony's",
    "username": "user1"
  },
  {
    "id": 2,
    "item_name": "black beans",
    "quantity": 30,
    "unit": "cans",
    "price": 1500,
    "alert_when": 10,
    "cat_namey": "canned&jarred",
    "kit_name": "Saint Antony's",
    "username": "user1"
  }
 ]
```

## POST /api/inventory

Expects object: 
```
{
	"item_name": "ghee",
	"quantity" : "14",
	"price": "445456",
	"alert_when": "4",
	"kit_id": "1",
	"unit_id": "4",
	"cat_id": "2",
	"user_id":"1"	
}
```

Returns object: 
```
{
  "id": 13,
  "item_name": "ghee",
  "quantity": 14,
  "unit_name": "cans",
  "price": 445456,
  "alert_when": 4,
  "cat_name": "dairy",
  "kit_name": "Saint Antony's"
}
```

## GET /api/inventory/:id

Returns single inventory item as object:
```
{
  "id": 1,
  "item_name": "yellow popcorn",
  "quantity": 10,
  "unit_name": "pounds",
  "price": 1000,
  "alert_when": 0,
  "cat_name": "meat&poultry",
  "kit_name": "Saint Antony's",
  "username": "user1"
}
```

## DELETE  /api/inventory/:id
Returns message "Item deleted" or "Item not found to delete"

## PUT  /api/inventory/:id

Expects Object: 
```
{
  "item_name": "yellow popcorn",
  "quantity": 10,
  "unit_id": "1",
  "price": 1000,
  "alert_when": 0,
  "cat_id": 3,
  "kit_id": 1
}
```

Returns message "Update successful" or "Item not found"

## GET/api/inventory/kitchen/:id

Returns inventory list by kitchen. Returns an array of objects. Each Object:
```
[
  {
    "id": 1,
    "item_name": "yellow popcorn",
    "quantity": 10,
    "unit_name": "pounds",
    "price": 1000,
    "alert_when": 0,
    "cat_name": "meat&poultry",
    "username": "user1"
  },
  {
    "id": 2,
    "item_name": "black beans",
    "quantity": 30,
    "unit_name": "cans",
    "price": 1500,
    "alert_when": 10,
    "cat_name": "canned&jarred",
    "username": "user1"
  }
]
```  
## GET /kitchens
Returns array of Objects:

```
[
  {
    "id": 1,
    "kit_name": "Saint Antony's",
    "city": "San Francisco",
    "website": "https://www.stanthonysf.org/"
  },
  {
    "id": 2,
    "kit_name": "GLIDE",
    "city": "San Francisco",
    "website": "https://www.glide.org/"
  }
]
```  

## POST /kitchens

expects object: 
```
{
"kit_name": "Kitchen Name",
  "city": "San Francisco",
  "website": "https://www.soup-kitchen.org/"
}
```

Returns object:

```
{
  "id": 7,
  "kit_name": "Kitchen Name",
  "city": "San Francisco",
  "website": "https://www.soup-kitchen.org/"
}
```

## GET /kitchens/:id

Returns object:
```
{
  "id": 7,
  "kit_name": "Kitchen Name",
  "city": "San Francisco",
  "website": "https://www.soup-kitchen.org/"
}

```

## PUT /kitchens/:id

Expects object:
```
{
  "kit_name": "Soup Kitchen Name",
  "city": "San Francisco",
  "website": "https://www.soup-kitchen.org/"
}
```

Returns message "Update successful" or "Kitchen not found"