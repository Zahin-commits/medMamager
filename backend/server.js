require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;
const connectDB = require('./config/DB');
const medRouter = require('./router/MedicineRouter');
const { engine } = require('./engine');


connectDB();
engine();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors({
    credentials: true,
    origin:"http://localhost:5173"
}
));

app.get('/',(req,res)=>{
 res.json('server is online');
});

app.use('/medicine',medRouter);

app.listen(PORT,()=>{
 console.log(`server is listening at port ${PORT}`);
})