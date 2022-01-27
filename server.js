const express = require('express')
const app = express()
const port = 8000

// Init Express ----------------------------------------------------------------

app.use(express.json());  // Enable json input from incoming requests. This is accessible from `req.body`


// Routes ----------------------------------------------------------------------

app.get('/', (req, res) => {
  res.sendFile('index.html', {root: __dirname})
})

app.get('/vue.js', (req, res) => {
  res.sendFile('vue.js', {root: __dirname})
})

ATTENDEES = []

app.post('/attendee/', (req, res) => {
  ATTENDEES.push(req.body)
  res.json({ })
})

app.get('/attendees/', (req, res) => {
  res.json(ATTENDEES)
})

app.delete('/attendee/:id', (req, res) => {
  const id = parseFloat(req.params.id)
  ATTENDEES = [...ATTENDEES.filter((attendee)=>attendee.id != id)]
  res.json({ })
})

// Serve -----------------------------------------------------------------------



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

/*
// https://expressjs.com/en/guide/error-handling.html
function logErrors (err, req, res, next) {
  console.error(err.stack)
  next(err)
}
app.use(logErrors)
app.use(function(req, res, next){
  console.log('no route', req.originalUrl);
  res.status(404).type('txt').send('Not found');
  next()
})
*/

// Docker container exit handler - https://github.com/nodejs/node/issues/4182
process.on('SIGINT', function() {process.exit()})