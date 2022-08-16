const express = require('express')

const app = express()

const PORT = process.env.PORT || 3000

app.get("/",(req,res)=>{
    res.send("<h1>Servidor funcionando</h1>")
})

app.listen(PORT,()=>{
    console.log(`servidor corriendo en ${PORT}`)
})