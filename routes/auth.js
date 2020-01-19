const express = require('express');
const router = express.Router();

// @route  GET api/users
// @desc   Get logged in user
// @access Private
router.get('/', (req, res) => {
  res.send('Get logged in user');
});

// @route  POST api/users
// @desc   Authenticate user & get token
// @access Public
router.post('/', (req, res) => {
  res.send('Log in user');
  console.log('newfile');
});

module.exports = router;
