var studentcontroller = require('../controllers/student-controller')
    express = require('express'),
    router = express.Router()



router.route('/')
    .post(studentcontroller.create)
    .patch(studentcontroller.getmatches)
    .get(studentcontroller.getall)

router.route('/:studentid')
    .get(studentcontroller.read)
    .patch(studentcontroller.addMatch)





router.param('studentid', studentcontroller.studentByID)



module.exports = router