const express = require("express")
const router = express.Router()

// impor obatController
const obatController = require("../controllers/obatController");


router.get("/", obatController.getAllObat)
router.post("/", obatController.createObat)
router.get("/:id", obatController.getObatById)
router.delete("/:id", obatController.deleteObatById)
router.put("/:id", obatController.updateObatById)

// export module
module.exports = router