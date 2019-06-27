# Inventory
Small inventory app

This is just a backend service to play around with NodeJS, Swagger (Open API Standard) and PostgresQL Stack.

## Endpoints
<!-- markdown-swagger -->
 Endpoint                | Method | Auth? | Description                          
 ----------------------- | ------ | ----- | -------------------------------------
 `/inventory-entry`      | POST   | No    | Creates a new inventory entry        
 `/inventory-entry`      | GET    | No    | Returns a list of inventory entries  
 `/inventory-entry/{id}` | PATCH  | No    | Updates an inventory entry           
 `/end-user`             | GET    | No    | Returns a list of all end users      
 `/end-user`             | POST   | No    | Creates a new enduser                
 `/end-user/{id}`        | GET    | No    | Gets an end-user by Id               
 `/item`                 | GET    | No    | Returns a list of all inventory items
 `/item`                 | POST   | No    | Creates an inventory item            
 `/item/{id}`            | GET    | No    | Returns item by Id                   
<!-- /markdown-swagger -->
