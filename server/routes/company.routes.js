var companycontroller = require('../controllers/company-controller')
    express = require('express'),
    router = express.Router()



router.route('/')
    .post(companycontroller.create)






router.route('/:companyid')
    .get(companycontroller.read)


router.param('companyid', companycontroller.companyByID)

module.exports = router