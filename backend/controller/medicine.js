const Medicine = require("../model/Medicine");

exports.getMeds = async(req,res)=>{
try {
     const medicine = await Medicine.find();
     res.json({sucess:true,medicine});
} catch (error) {
    res.status(500).json({sucess:false, message:error.message});
    }
};

exports.addMeds = async(req,res)=>{
    const {name,dailyIntake,intakeDates,stock,redLine} = req.body;
    if(name && dailyIntake && intakeDates && stock && redLine){

    
    try {
         const medicine = await Medicine.create({name,dailyIntake,intakeDates,stock,redLine});
         res.json({sucess:true,medicine});
    } catch (error) {
     res.status(500).json({sucess:false, message:error.message});
    }
}else{
    res.status(400).json({sucess:false, message:'invalid credentials'});
}
};