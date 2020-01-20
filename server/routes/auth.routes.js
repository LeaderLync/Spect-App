var authcontroller = require('../controllers/auth-controller')
    express = require('express'),
    router = express.Router()



router.route('/')
    .post(authcontroller.create)
    .get(authcontroller.getuser)


router.route('/temp/:firebaseid')
    .get(authcontroller.getuser)

router.route('/:authid')
    .delete(authcontroller.delete)


router.param('authid', authcontroller.userbyID)
router.param('firebaseid', authcontroller.userbyauthID)
module.exports = router
