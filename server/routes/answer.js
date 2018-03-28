const express = require('express');
const router = express.Router();
const { getAll, vote, create, destroy } = require('../controllers/answer')
const { authlogin } = require('../middleware/auth')

router.get('/', getAll)
router.put('/:questionId/:id', authlogin, vote)
router.post('/:questionId', authlogin, create)
router.delete('/:id', authlogin, destroy)

module.exports = router;