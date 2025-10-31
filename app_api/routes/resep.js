const express = require('express')
const router = express.Router()

const resepController = require('../controllers/resepController') // 

router.get('/', resepController.getAllResep)
router.get('/:id', resepController.getResepById)
router.post('/', resepController.createResep)
router.put('/:id', resepController.updateResepById)
router.delete('/:id', resepController.deleteResepById)

module.exports = router
  