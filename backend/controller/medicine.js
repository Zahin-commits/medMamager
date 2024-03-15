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


exports.editMed = async(req,res)=>{
    const patch = req.body;
    const id = req.params.id;

    if(!patch || !id){
     return res.status(400).json({sucess:false, message:'invalid credentials'});
    }

 try {
    const medicine = await Medicine.findByIdAndUpdate(id,patch);
    res.json({success:true,medicine});
 } catch (error) {
    res.status(500).json({sucess:false, message:error.message});
 }
}

exports.findOne = async(req,res)=>{
    const id = req.params.id;
    if(!id){
        return res.status(400).json({sucess:false, message:'invalid credentials'});
       }
 try {
    const medicine = await Medicine.findById(id);
    res.json({success:true,medicine});
 } catch (error) {
    res.status(500).json({sucess:false, message:error.message});
 }
}


exports.deleteOne = async(req,res)=>{
    const id = req.params.id;
    if(!id){
        return res.status(400).json({sucess:false, message:'invalid credentials'});
    }
 try {
    const medicine = await Medicine.findByIdAndDelete(id);
    res.json({success:true,message:`the medince ${medicine.name} has been deleted scucessfully`})
 } catch (error) {
    res.status(500).json({sucess:false, message:error.message});
 }
}

exports.addQuantity = async(req,res)=>{

    const quantity = req.body.quantity;  
    const id = req.params.id;

    if(!quantity || !id){
        return res.status(400).json({sucess:false, message:'invalid credentials'});
       }
 try {
    const medicine = await Medicine.findById(id);
    const newStock = medicine.stock + quantity;
    medicine.stock = newStock;
    const updatedMedicine = await medicine.save();
    res.json({success:true,updatedMedicine});
 } catch (error) {
    res.status(500).json({sucess:false, message:error.message});
 }
}