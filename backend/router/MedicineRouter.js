const express = require('express');
const { getMeds, addMeds, addQuantity, editMed, findOne, deleteMed } = require('../controller/medicine');
const router = express.Router();


router.route('/')
.get(getMeds)
.post(addMeds)
.patch(editMed);

router.route('/med/:id')
.get(findOne)
.patch(addQuantity)
.delete(deleteMed);

router.patch('/med/edit/:id',editMed);

module.exports = router;