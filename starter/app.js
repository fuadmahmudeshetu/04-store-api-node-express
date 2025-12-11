require('dotenv').config()
// async errors
require('express-async-errors')

const express = require('express')
const app = express()
const connectDB = require('./db/connect')
const productsRouter = require('./routes/products')

const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');

// Middleware

app.use(express.json())

const port = process.env.PORT || 3000

app.get('/', (req,res)=>{
    res.send('<h1>Product api</h1><a href="/api/v1/products">Go To Products Page</a>')
})

app.use('/api/v1/products',productsRouter)

app.use(errorMiddleware)
app.use(notFoundMiddleware)


const start = async () => {
    try {
        //ConnectDB
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => console.log(`server is listening on the port ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()