var companycontroller = require('../controllers/company-controller')
    express = require('express'),
    router = express.Router()



router.route('/job')
    .post(companycontroller.createjob)

router.route('/')
    .post(companycontroller.create)




router.route('/:companyid')



module.exports = router