const express = require('express');
const { getMeds, addMeds, addQuantity, editMed, findOne } = require('../controller/medicine');
const router = express.Router();


router.route('/')
.get(getMeds)
.post(addMeds)
.patch(editMed)
.delete();

router.route('/:id',addMeds);

router.route('/med/:id')
.get(findOne)
.patch(addQuantity);

module.exports = router;