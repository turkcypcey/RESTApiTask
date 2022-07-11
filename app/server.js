const express = require('express')
const app = express()
const port = 8000

app.use(express.json());

attendees = [
  {"id": 123, "name": "test", "notes": "some notes"},
  {"id": 124, "name": "test", "notes": "some notes"}  
]

app.get('/', (req, res) => {
  res.sendFile('client.html', {root: __dirname})
})

app.get('/attendees/', (req, res) => [
    res.json(attendees),
])

app.post('/attendee/', (req, res) => {
  attendees.push(req.body)
  res.status(201).json(req.body)
})
app.delete('/attendee/:id', (req,res) =>{
  console.log("to be deleted", req.params.id)
  attendees = attendees.filter((i)=> i.id !=req.params.id)
  res.status(204).json({})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})