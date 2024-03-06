require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const connectDB = require('./config/DB');
const medRouter = require('./router/MedicineRouter');
const { engine } = require('./engine');


function getDayOfWeek() {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const today = new Date();
  const dayIndex = today.getDay();
  return days[dayIndex];
}

connectDB();
engine();

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get('/',(req,res)=>{
 res.json('server is online');
});

app.use('/medicine',medRouter);

app.listen(PORT,()=>{
 console.log(`server is listening at port ${PORT}`);
})