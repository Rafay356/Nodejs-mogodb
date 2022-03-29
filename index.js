const express = require("express")
const mongoose = require("mongoose")

const url = "mongodb://localhost/ColorApp"
const app = express()

app.use(express.json())

const indexRou = require("./routers/indexRout")

app.use('/',indexRou)

mongoose.connect(url,{useNewUrlParser:true})

const cn = mongoose.connection

cn.on('open',function(){
    console.log('connected')
})

const port = process.env.PORT || 2000
app.listen (port, ()=>{
    console.log(`Listning port ${port}`)
})
