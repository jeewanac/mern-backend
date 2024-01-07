const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/users', controller.getUsers);
router.post('/createuser', controller.addUser);
router.post('/updateusers', controller.updateUser);
router.post('/deleteuser', controller.deleteUser);

module.exports = router;