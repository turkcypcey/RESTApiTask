RestAPITask
===========

Within this task I had to create an API for a RSPV to be able to add attendees, delete attendees and, see the list of attendees. Using an OpenAPI specification I was told what the RSPV required for it to work and pass the unit tests and be completed. 

Language Features
------------------

- used javaScript 
- array manipulation
    - sort
        - sorts out the list and updates the original 
    - filter
        - filters out what is not needed and creates a new list
    - push 
        - adds a item to the bottom of the list 

Using JavaScript for this project I found that it has a lot of inconsistencies in the way it uses lists this is due to the fact that JavaScript will not allow an array to equal another array as it views them as different arrays, the inconsistencies begin here with the sort function as it will sort the list to the correct order and then update the original one. whereas the filter  


Client Framework Features
-------------------------

- vuejs

Server Framework Features
-------------------------

- used expressjs
- middleware
    - supports the plug in of middleware
    - used for decoding the json POST
    - CORS response
- able to bind method and root to quikly 
-


