require('nodemon').config()
const express = require('express')
const app = express()

const port = 3000

app.get('/', (req,res)=>{
    res.json({ name: 'Fuad'})
})

app.listen(port, ()=> console.log(`server is listening on the port ${port}`)
)
