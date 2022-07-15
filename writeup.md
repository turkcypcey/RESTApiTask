RestAPITask
===========

Within this task I had to create an API for a RSPV to be able to add attendees, delete attendees and, see the list of attendees. Using an OpenAPI specification I was told what was required for this API to work, OpenAPI spec is a very useful tool in the industry as it allows both the server and user teams to be able to work on the project at the same time without having to wait for each other to complete a task as the specification tells exactly what is needed for both teams. Furthermore, if one of the developers are sick then the rest of the team are able to carry on with the work as they can easily see where the previous developer was and carry on from there, by simply running and passing the unit tests will tell the developer where they are in the project. Unit tests are a small program within the program and they work by adding in data to the project and if the project carries on working after it means that the test has been passed. Also, they are a great way telling the client how far along they are in completing their project as once all the tests have been completed the project is finished. 

Language Features
------------------

Using JavaScript for this project I found that it has a lot of inconsistencies in the way it uses lists this is due to the fact that JavaScript will not allow an array to equal another array as it views them as different arrays, the inconsistencies begin here with the sort function as it will sort the list to the correct order and then update the original one. Whereas the filter function will create a new array with the filtered item beng removed for example:

```
attendees = attendees.filter((i)=> i.id !=req.params.id)
```

The code above shows the ```.filter``` and this line of code is in the delete part of the server and essentially says the id which is going to be removed is taken out however wants this happens a new list is created without the id which had been removed. 

The ```.push``` function is used to add attendees in the POST part of the server

```
app.post('/attendee', (req, res) => {
  if(Object.keys(req.body).sort().toString() != 'id,name,notes'){
    return res.status(405).json({message: "I need id,name,notes"})
  }
  attendees.push(req.body)
  res.status(201).json(req.body)
})
```

The code above is the POST part of the server this part is responsible for the adding of attendees as can be seen above.

Another function of javaScript is that it has anonymous functions these are essentially functions without names this makes it incredibly useful when coding as it is extremely easy to define a function without having to 

Finally, javaScript can execute multiple functions at any given time this makes it very hard to debug and trace, this is due to the fact that javaScript runs in an asynchronous way so the whole program functions are running at once this makes the runtime of the program very fast as the user is never waiting for the program to compile the rest of the code as it would for example, C# that is a synchronous language meaning that when it is compiling it will go line by line making the runtime a lot slower.

Client Framework Features
-------------------------

For the frontend client side vue.js was a used the reason for this is that it has a range of features such as the fact that developers can add vue.js increments to an existing site this makes vue.js extremely useful as the developers can easily add ```v-model``` or ```v-for``` these bind html to the datastore creating a 2 way mapping between the raw html and the data model.

Furthermore Vue.js keeps the data separate to the layout this is due to the way it works and how it calls the data to be compiled. This therefore makes Vue.js great for debugging as the data is separate to the html layout.

```
addAttendee() {
                fetch(`${urlAPI}/attendee`, {
				    method: 'POST',
				    headers: {'Content-Type': 'application/json'},
				    body: JSON.stringify(this.attendee),
                })
                .then(response => response.json())
                .then(json => console.log('addAttendee()', json))
                .then(() =>this.updateAttendees())
            .catch(err => console.error(err));
            }
        }
```
This code above shows how vue.js fetches the data from the server to display the list once the new attendee has been added.

Finally another feature that Vue.js has is that it has its own dev tools which can resolve issues while the site is still running making it extremely useful to developers to see as the projects get bigger. 

Server Framework Features
-------------------------

For the RestAPI Express.js was used and the features of this framework is the fact Express.js supports plug-in middleware, this allows the modification of request and response objects as can be seen from:

```
app.delete('/attendee/:id', (req,res) =>{
  attendees = attendees.filter((i)=> i.id !=req.params.id)
  res.status(204).json({})
}) 
```

The code above shows the DELETE part of the server and, after the code for the deletion has compiled a ```res.status(204).json({})``` this says that a 204 status code will show up as the ```res``` means respond.

Furthermore, the code below shows the CORS middleware

```
var cors = require('cors')
app.use(cors())
```    
                                                                                                                    
Due to the fact that websites have CORS (Cross-Origin Resource Sharing) this code will allow them to access the webpage without causing any errors.

Another function of Express.js is that it is able to define a root and function within the same line which is ideal for small projects as it keeps the code relatively small making it easier to read, such as:

```
app.get('/', (req, res) => {
  res.sendFile('client.html', {root: __dirname})
})
```
the ```app.get('/',(req, res)``` is the root and function being defined in the same like. 

