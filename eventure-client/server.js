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
