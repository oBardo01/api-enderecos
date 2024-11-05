require('dotenv').config()
const express = require('express')
const app = express()
const useRoutes = require('./routes/routes')

app.use(express.json())
app.use('/api/enderecos', useRoutes)

const PORT = process.env.PORT || 8080
app.listen(PORT, ()=>{
    console.log(`Servidor subiu em ${PORT}`)
});