const RunServer = require("./database/connection");
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const userRoute =require('./Routes/userRoute');
const productRoutes = require('./Routes/productRoutes');
const paymentRoutes = require ('./Routes/PaymentRoutes')
const cookiePraser = require ("cookie-parser")
const morgan = require ('morgan')

const app = express()
const port = 3000


RunServer()

app.use(express.json())
app.use(helmet())
app.use(cors({
    origin: 'http://localhost:5173',
    credentials:true
}))
app.use(morgan('dev'))
app.use(cookiePraser())


app.use('/api/v1/user', userRoute)
app.use('/api/v1',productRoutes)
app.use('/api/v1/payment', paymentRoutes);

app.listen(port,()=>{
    console.log (`server is running on ${port}`)
})