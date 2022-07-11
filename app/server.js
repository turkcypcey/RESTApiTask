const express = require('express')
const app = express()
const port = 8000

const attendees = [
    {"foo": "bar676"},
]

app.get('/', (req, res) => {
  res.sendFile('client.html', {root: __dirname})
})

app.get('/attendees/', (req, res) => [
    res.json(attendees),
])

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})