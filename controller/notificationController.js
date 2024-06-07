const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const Notification = require("../model/notification")

exports.getNoti = async (req,res)=>{
    try {
        const data = await Notification.find()
        res.json({errors:true ,data:data})
    } catch (error) {
        res.status.json({errors:true,message:error.message})
    }
}

exports.postNoti = async (req,res)=>{
    try {
        const data = await Notification.create(req.body)
        res.json({errors:true ,data:data})

    } catch (error) {
        res.status.json({errors:true,message:error.message})
    }
}

exports.putNoti = async (req,res)=>{
    try {
        const data = await Notification.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.json({errors:true ,data:data})

    } catch (error) {
        res.status.json({errors:true,message:error.message})
    }
}

exports.deleteNoti = async (req,res)=>{
    try {
        const data = await Notification.findByIdAndDelete(req.params.id)
        res.json({errors:true ,data:data})

    } catch (error) {
        res.status.json({errors:true,message:error.message})
    }
}

exports.login = async (req,res)=>{
    try {
        
        const notiAvbl = await Notification.findOne({user_id:req.body.user_id})
        if(!notiAvbl) return res.status(500).json({errors:true , message:"User or Password is incorrect !!!"})

       const passChk = await bcrypt.compare(req.body.password , notiAvbl.password)
        if (!passChk) return res.status(500).json({ errors: true, message: "User or Password is incorrect !!!" });

        const token = await jwt.sign({_id:req.body._id},process.env.SEC)
        return res.json({errors:false ,data:{token:token,user:notiAvbl}})

    } catch (error) {
        res.status(500).json({errors:true ,message:error.message})
    }
}