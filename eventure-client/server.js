const { createServer } = require('http')
const routes = require('./routes')

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

//const http = require('http').createServer(app);
//const io = require('socket.io')(http);

app.prepare()
  .then(() => {
    server.get('*', (req, res) => handle(req, res))
    server.listen(3000)
  })

/*io.on('connection', (socket) => {
    console.log('a user connected');
});

http.listen(1080, () => {
    console.log('listening on *:3000');
});*/
