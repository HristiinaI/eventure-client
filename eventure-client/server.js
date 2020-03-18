const { createServer } = require('http')
const next = require('next')
const routes = require('./routes')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handler = routes.getRequestHandler(app)


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
