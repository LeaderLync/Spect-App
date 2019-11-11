var authcontroller = require('../controllers/auth-controller')
    express = require('express'),
    router = express.Router()



router.route('/')
    .post(authcontroller.create)






router.route('/:authid')



module.exports = router