var studentcontroller = require('../controllers/student-controller')
    express = require('express'),
    router = express.Router()



router.route('/')
    .post(studentcontroller.create)






router.route('/:studentid')
    .get(studentcontroller.read)




router.param('studentid', studentcontroller.studentByID)



module.exports = router