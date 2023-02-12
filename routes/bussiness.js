const express = require('express')
const router = express.Router()

const postBussiness = require('../services/bussiness/post-bussiness')
const getBussiness = require('../services/bussiness/get-bussiness')
const deleteBussinessByID = require('../services/bussiness/delete-bussiness-byid')
const putBussinessByID = require('../services/bussiness/put-bussiness-byid')


router.post("/", postBussiness)
router.get("/search", getBussiness)
router.delete("/:id", deleteBussinessByID)
router.put("/:id", putBussinessByID)

module.exports = router