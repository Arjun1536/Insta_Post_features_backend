const express  = require("express")
const app = express()

require("dotenv").config()
const PORT = process.env.PORT || 400

//Middle ware
app.use(express.json())


const blog = require('./routes/blog')

//mount
app.use("/api/v1/",blog)

//start database 
const connectdatabase = require("./config/database")
connectdatabase()

app.listen(PORT,()=>{
    console.log(`The port is working fine on port ${PORT}`)
})

app.get("/",(req,res)=>{
    res.send("this is get requesst")
})