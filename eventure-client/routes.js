const nextRoutes = require('next-routes')
const routes = (module.exports = nextRoutes())

routes.add('index', '/index')
routes.add('dashboard', '/dashboard/:pid')

// routes.add('blog', '/blog/:slug')
// routes.add('about', '/about-us/:foo(bar|baz)')
