const express = require('express')
const Controller = require('../controllers/Controller')

const router = express.Router()

router.get('/', Controller.index)
router.get('/new', Controller.new_message_get)
router.post('/new', Controller.new_message_post)

module.exports = router