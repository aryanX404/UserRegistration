const express = require('express');
const router = express.Router();

const {handleLoginUser, handleSignUpUser} = require('../controller/HandleUser')

router.post('/login',handleLoginUser);
router.post('/signup', handleSignUpUser);


module.exports = router;
    