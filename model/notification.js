const mongoose = require("mongoose")
const { start } = require("repl")
const notiSchema = new mongoose.Schema({

membership_id:{
    type:Number,
    require:true
},
user_id:{
    type:Number,
    require:true
},
password:{
    type:String,
    require:true
},
start_date:{
    type:Date,
    default:Date.now()
},
end_date:{
    type:Date,
    default:Date.now()
}
})

module.exports = mongoose.model('Notification',notiSchema)