RestAPITask
===========

Within this task I had to create an API for a RSPV to be able to add attendees, delete attendees and, see the list of attendees. Using an OpenAPI specification I was told what the RSPV required for it to work and pass the unit tests and be completed. 

Language Features
------------------

- used javaScript 
- array manipulation
    - .sort
        - sorts out the list and updates the original 
    - .filter
        - filters out what is not needed and creates a new list
    - .push 
        - adds a item to the bottom of the list 

Using JavaScript for this project I found that it has a lot of inconsistencies in the way it uses lists this is due to the fact that JavaScript will not allow an array to equal another array as it views them as different arrays, the inconsistencies begin here with the sort function as it will sort the list to the correct order and then update the original one. Whereas the filter function will create a new array with the filtered item beng removed for example:

```
attendees = attendees.filter((i)=> i.id !=req.params.id)
```

annonymus function - a function without a name 
    - javaScript can execute multiple functions at any given time this makes it very hard to debug and trace where the program is in compliing at any given time 
    basically never waiting for the program 
    paralisation
    3 different ways to define functions

    asynchrionas 
    very hard to debug


Client Framework Features
-------------------------

- vuejs
all fornt frawirj seperate code for layout to the data 
data seperate from everything 

can bind bits of html to the datastore creating a 2 way mapping between raw html and our data model. 

compndnts 

1 data
2 html laout
3 functions which modify    

v-model and v-for bind the html to vue.js

can add vuejs increments to an existing site 

great for debugging 

dev tools as the projets get bigger

Server Framework Features
-------------------------

- used expressjs
- middleware
    - supports the plug in of middleware
    - used for decoding the json POST
    - CORS response on the way out 
    - installed json express mid ware 
    what kind of middlewares are out there for expressjs

- able to define a root and function within the same line which is ideal for small projects as it keeps the code relatively small  
- 



functions of first class citizens

