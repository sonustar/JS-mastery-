const express = require('express')

const app = express()
const PORT = 3000

app.get('/',(req,res)=>{
    res.send("HEllo")
})

app.listen(PORT,()=> console.log(`Running in port ${PORT}`))