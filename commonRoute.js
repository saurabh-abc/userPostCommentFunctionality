const router = require('express').Router();
const commonController = require('../controller/commonControler');
router.route('/userCreate').post(commonController.user);
router.route('/post').post(commonController.post);
router.route('/comment').post(commonController.comment);
router.route('/fetch').get(commonController.getData);
module.exports = router;