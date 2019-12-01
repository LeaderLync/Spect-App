var companyController = require('../controllers/company-controller')
    express = require('express'),
    router = express.Router()


//Route to create a company inside the database    
router.route('/').post(companyController.create);

//Update a company (Used to update the jobPost/ Post jobs)
router.route('/job').post(companyController.jobPost);


//Route to retieve a single company by company id
//router.route('/:companyid').get(companyController.findOne);




router.route('/:companyid')
    .get(companycontroller.read)


router.param('companyid', companycontroller.companyByID)

module.exports = router