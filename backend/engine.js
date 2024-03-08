const schedule = require('node-schedule');
const Medicine = require('./model/Medicine');
const {sendEmail} = require('./email');
process.env.TZ = 'Asia/Dhaka';


function getDayOfWeek() {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const today = new Date();
    const dayIndex = today.getDay();
    return days[dayIndex];
  }
  

exports.engine = ()=>{
    schedule.scheduleJob('34 12 * * *',async()=>{
    const today = getDayOfWeek();
    let report = '';

    const medicineList = await Medicine.find();

    medicineList.forEach(async(med) => {

        if(med.intakeDates.includes(today)){

      let updatedStock = med.stock - med.dailyIntake;
      if(updatedStock <= med.redLine){
        report += updatedStock <= 0? `Stock of ${med.name} is empty.\n` :`Only ${updatedStock} pills of ${med.name} remains on stock.\n`
      //  console.log(`WARNING: you are running out of stock ${med.name}`);
      }
      updatedStock = updatedStock < 0? 0 : updatedStock;
      
      await Medicine.findOneAndUpdate({_id:med._id},{stock:updatedStock});
    } 
});
    console.log('schedule Job');
    console.log("REPORT:", report);
    sendEmail(report);
 });
};

/* schedule.scheduleJob('0 0 * * *',function(){
  console.log('hello world');
}) */

//'*/15 * * * * *' in every 15 seconds 
// '0 0 * * *' everyday at 12am

/* 
*    *    *    *    *    *
┬    ┬    ┬    ┬    ┬    ┬
│    │    │    │    │    │
│    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
│    │    │    │    └───── month (1 - 12)
│    │    │    └────────── day of month (1 - 31)
│    │    └─────────────── hour (0 - 23)
│    └──────────────────── minute (0 - 59)
└───────────────────────── second (0 - 59, OPTIONAL)
*/