const express = require('express');
const { getMeds, addMeds, addQuantity, editMed, findOne } = require('../controller/medicine');
const router = express.Router();


router.route('/')
.get(getMeds)
.post(addMeds)
.patch(editMed)
.delete();

router.route('/med/:id')
.get(findOne)
.patch(addQuantity);

router.patch('/med/edit/:id',editMed);

module.exports = router;