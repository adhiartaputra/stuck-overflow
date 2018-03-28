const express = require('express');
const router = express.Router();
const { getAll, signin, signup, getProfile, edit, destroy } = require('../controllers/user')
const { authlogin } = require('../middleware/auth')

router
.get('/', authlogin, getAll)
.post('/signup', signup)
.post('/signin', signin)
.get('/profile', authlogin, getProfile)
.put('/:id', authlogin, edit)
.delete('/:id', authlogin, destroy)

module.exports = router;
