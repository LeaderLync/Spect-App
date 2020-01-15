var companycontroller = require('../controllers/company-controller')
    express = require('express'),
    router = express.Router()


//Route to create a company inside the database
router.route('/')
    .post(companycontroller.create)
    .get(companycontroller.getall)
    .delete(companycontroller.delete)

//Route to retieve a single company by company id
//router.route('/:companyid').get(companyController.findOne);

router.route('/:companyid')
    .get(companycontroller.read)
    .put(companycontroller.updatePost)
    .patch(companycontroller.updateCompany)

router.param('companyid', companycontroller.companyByID)

module.exports = router
