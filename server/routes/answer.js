const express = require('express');
const router = express.Router();
const { getAll, vote, create, destroy } = require('../controllers/answer')
const { authlogin } = require('../middleware/auth')

router.get('/', getAll)
router.put('/:questionId/:id', vote)
router.post('/:questionId', create)
router.delete('/:id', destroy)

module.exports = router;