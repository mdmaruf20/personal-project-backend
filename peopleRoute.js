const router = require('express').Router();
const addPeopleController = require('./peopleController');

router.post('/', addPeopleController);

module.exports = router;