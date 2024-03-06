const express = require('express');
const { getMeds, addMeds } = require('../controller/medicine');
const router = express.Router();


router.route('/')
.get(getMeds)
.post(addMeds)
.patch()
.delete();

module.exports = router;