var companycontroller = require('../controllers/company-controller')
    express = require('express'),
    router = express.Router()


//Route to create a company inside the database    
router.route('/').post(companycontroller.create);

//Update a company (Used to update the jobPost/ Post jobs)
//router.route('/job').put(companycontroller.jobPost);


//Route to retieve a single company by company id
//router.route('/:companyid').get(companyController.findOne);




router.route('/:companyid')
    .get(companycontroller.read)
    .put(companycontroller.jobPost)


router.param('companyid', companycontroller.companyByID)

module.exports = router