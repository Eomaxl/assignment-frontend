const express = require('express');
require('./db/connection')
const User = require('./models/user')
//const userRouter = require('./Router/user');
//const app = express();

//const port = process.env.port || 4600;
const port = 4600;

app.use(express.json())

//router
app.use(userRouter)

app.listen(port,()=>{
    console.log('Server is up on the port '+ port)
})
