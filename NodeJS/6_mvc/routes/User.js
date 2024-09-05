const express = require('express')
const router = express.Router()
const controller = require('../controllers/UserController')

router.get('/', (req, res) => {
  controller.get
})

module.exports = router