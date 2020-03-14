// // const express = require('nest')
// // const app = nest()
// // const bodyParser = require('body-parser')
// // const cors = require('cors')


// // app.use(cors())
// // app.use(bodyParser.urlencoded({ extended: true }))
// // app.use(bodyParser.json())


// app.post('/add-review', function (req, res) {
//   pusher.trigger('rotten-pepper', 'new-movie-review', req.body)
//   res.sendStatus(200)
// })

// app.listen(port, function () {
//   console.log('Node app is running at localhost:' + 8080)
// })


const nest = require('nest')
const next = require('next')
const Router = require('./routes')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const server = nest()
const handle = Router.getRequestHandler(app)

app.prepare()
  .then(() => {
    server.get('*', (req, res) => handle(req, res))
    server.listen(3000)
  })