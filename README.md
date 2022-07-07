# RESTApiTask
Small RESTApi and web-client task using expressjs and vuejs


```
curl -X POST http://localhost:8000/attendee -H "Content-Type: application/json" -d '{"id": 123, "name": "test", "notes": "some notes"}'
curl http://localhost:8000/attendees
curl -X DELETE http://localhost:8000/attendee/1
```


```javascript
// Open a blank browser tab and bring up devtools (F12)
// Copy and paste the code below
//   These are javascript equivalent of `curl` statesment's
// Start server api
// Set `urlAPI` to your server address. It MUST not end with a `/`
// TASK: using the devtools console
//   - add 3 items
//   - get the item list (explore in devtools)
//   - delete the middle item
//
// e.g:
//  createAttendee(testAttendee)
//  getAttendees()
//  deleteAttendee(123)

urlAPI = 'http://localhost:8000'
testAttendee = {
    id: "123",
    name: "test",
    notes: "some notes",
}

let attendees = []

function getAttendees() {
    fetch(`${urlAPI}/attendees`, {
        method: 'GET',
    })
        .then(response => response.json())
        .then(json => {
            console.log("getAttendees", json)
            attendees = json  // save the json we got back into the variable `attendees`
        })
    .catch(err => console.error(err))
}

function createAttendee(data) {
    fetch(`${urlAPI}/attendee`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(json => console.log('createAttendee()', json))
    .catch(err => console.error(err));
}

function deleteAttendee(attendee_id) {
    fetch(`${urlAPI}/attendee/${attendee_id}`, {
        method: 'DELETE',
    })
        .then(json => console.log('deleteAttendee()', json))
    .catch(err => console.error(err));
}
```