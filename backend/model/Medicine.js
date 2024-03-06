const mongoose = require('mongoose');
const schema = mongoose.Schema; 

const medicineSchema = new schema({
 name:{
  type: String,
  required:true
 },
 dailyIntake:{
  type: Number,
  default:1,
  required:true
 },
 intakeDates:{
  type:Array,
  default:['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  required:true
 },
 stock:{
    type: Number,
    required:true
   },

 redLine:{
    type: Number,
    default:1,
    required:true
   },
}, { timestamps: true });

module.exports = mongoose.model("Medicine",medicineSchema);
