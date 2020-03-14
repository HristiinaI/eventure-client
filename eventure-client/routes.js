const nextRoutes = require('next-routes')
const routes = (module.exports = nextRoutes())

routes.add('index', '/index')
routes.add('dashboard', '/dashboard/:pid')

// routes.add('blog', '/blog/:slug')
// routes.add('about', '/about-us/:foo(bar|baz)')

const Router = require('nextjs-dynamic-routes')

const router = new Router()

router.add({ name: 'index', pattern: '/' })

router.add({ name: 'profile', pattern: '/users/profile/:id' })

router.add({ name: 'signIn', pattern: '/users/signIn' })

router.add({ name: 'signUp', pattern: '/home' })

module.exports = router;
