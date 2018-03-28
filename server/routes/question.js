const express = require('express');
const router = express.Router();
const { getAll, create, getById, vote, edit, destroy }= require('../controllers/question')
const { authlogin } = require('../middleware/auth')

router.get('/', getAll)
router.post('/add', create)
router.get('/:id', getById)
router.put('/vote/:id', vote)
router.put('/:id', edit)
router.delete('/:id', destroy)

module.exports = router;