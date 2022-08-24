const express = require('express')
import routes from './routes/routes.js'
import db from './config/db.js'

const app = express()
app.use(express.json())
app.use(routes)

// Conexión a la base de datos
try {
    await db.autenticate()
    db.sync()
    console.log('conexionestablecida')
} catch (error) {
    console.log(error)
}

const PORT = process.env.PORT || 3000

app.get("/",(req,res)=>{
    res.send("<h1>Servidor funcionando</h1>")
})

app.listen(PORT,()=>{
    console.log(`servidor corriendo en ${PORT}`)
})