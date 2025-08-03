const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/connection.js');
const router = require('./router/UserRouter.js')

dotenv.config();
connectDB();
const app =express();


//middlewares
app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.use(cors())

//routing
app.use('/',router);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})