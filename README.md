# RESTApiTask
Small RESTApi and web-client task using expressjs and vuejs


```
curl -X POST http://localhost:8000/attendee -H "Content-Type: application/json" -d '{"name": "bob", "notes": "test"}'
curl http://localhost:8000/attendees
curl -X DELETE http://localhost:8000/attendee/1
```