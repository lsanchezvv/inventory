# Inventory
Small inventory app

This app is just a backend service to play around with NodeJS, Swagger (Open API Standard) and PostgresQL Stack.

# Endpoints
<!-- markdown-swagger -->
 Endpoint         | Method | Auth? | Description                                    
 ---------------- | ------ | ----- | -----------------------------------------------
 `/user`          | GET    | No    | Gets a User.                                   
 `/user`          | POST   | No    | Creates a new user or updates an existing user.
 `/end-user`      | GET    | No    | Returns a list of end usersGets all end users  
 `/end-user`      | POST   | No    | Creates a new enduser                          
 `/end-user/{id}` | GET    | No    | Gets an end-user by Id                         
<!-- /markdown-swagger -->
