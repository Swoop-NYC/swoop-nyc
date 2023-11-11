const express = require('express')
const app = express();
const PORT = 3000;
// const userRouter = require('./router/userRouter');
const itemRouter = require('./router/itemRouter.js');
const path = require('path')
//install path


const mongoose = require('mongoose')
require('dotenv').config()

app.use(express.json());

mongoose.connect(process.env.DATABASE_CONNECTION_KEY)
mongoose.connection.once('open', () => {
    console.log('Connected to Database');
  });

app.use('/create-item', itemRouter)

//endpoints for handling user login or user signup
app.use('/', (req, res)=> {
    console.log('error in the /')
    res.status(200).sendFile(path.resolve(__dirname, '../index.html'))
})
// app.use('/login', userRouter);
// app.use('/signup', userRouter);



app.use('*', (req, res) => {
    console.log('error in the *')
    res.status(404).send('File Not Found');
  });

app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 500,
        message: { err: 'there is an error and its your fault' }
    }
    const errorObj = Object.assign(defaultErr, err);
    res.status(errorObj.status).json(errorObj.message);
})

app.listen(3000, ()=>{
    console.log(`server listening on port ${PORT}`);
})