const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
  res.sendFile('client.html', {root: __dirname})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})