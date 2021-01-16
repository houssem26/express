var express = require('express');
var router = express.Router();
const { findUsers, createUser} = require('../Controllers/users');

/* GET users listing. */
router.post('/', createUser);

/* GET users listing. */
router.get('/:id', findUsers);

module.exports = router;
