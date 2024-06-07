require("dotenv/config")
const mongoose = require("mongoose")
const express = require("express")
const notiSchema = require("./router/notificationRouter")
const app=express()

app.use(express.json())
app.use('/api/notification',notiSchema)

app.listen(process.env.PORT)

async function db(){
    try {
        const res = await mongoose.connect(process.env.DB)
        const data = res.STATES
        console.log(data.connected);
    } catch (error) {
        console.log(error.message);
    }
}
db()