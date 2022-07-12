const express = require('express')
const app = express()
const port = 8000

app.use(express.json());

var cors = require('cors')
app.use(cors())

attendees = [
   
]

app.get('/', (req, res) => {
  res.sendFile('client.html', {root: __dirname})
})

app.get('/attendees/', (req, res) => [
    res.json(attendees),
])

app.post('/attendee', (req, res) => {
  if(Object.keys(req.body).sort().toString() != 'id,name,notes'){
    return res.status(405).json({message: "I need id,name,notes"})
  }
  attendees.push(req.body)
  res.status(201).json(req.body)
})

app.delete('/attendee/:id', (req,res) =>{
  attendees = attendees.filter((i)=> i.id !=req.params.id)
  res.status(204).json({})
}) 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})