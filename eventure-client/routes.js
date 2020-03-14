const Router = require('nextjs-dynamic-routes')

const router = new Router()

router.add({ name: 'index', pattern: '/' })

router.add({ name: 'profile', pattern: '/users/profile/:id' })

router.add({ name: 'signIn', pattern: '/users/signIn' })

router.add({ name: 'signUp', pattern: '/home' })

module.exports = router;