const express = require('express');
const router = express.Router();
const { getAll, create, getById, vote, edit, destroy }= require('../controllers/question')
const { authlogin } = require('../middleware/auth')

router.get('/', getAll)
router.post('/add', authlogin, create)
router.get('/profile', authlogin, getById)
router.put('/vote/:id', authlogin, vote)
router.put('/:id', authlogin, edit)
router.delete('/:id', authlogin, destroy)

module.exports = router;