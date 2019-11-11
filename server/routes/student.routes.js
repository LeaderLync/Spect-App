var studentcontroller = require('../controllers/student-controller')
    express = require('express'),
    router = express.Router()



router.route('/')
    .post(studentcontroller.create)






router.route('/:studentid')



module.exports = router