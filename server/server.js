const express = require('express')
const app = express();
const PORT = 3000;
const mongoose = require('mongoose')
require('dotenv').config()

app.use(express.json());

require('dotenv').config()

mongoose.connect(process.env.DATABASE_CONNECTION_KEY)
mongoose.connection.once('open', () => {
    console.log('Connected to Database');
  });


// app.use('/item', )


app.use('*', (err, req, res, next) => {
    const defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 500,
        message: { err: 'there is an error and its our fualt' }
    }
    const errorObj = Object.assign(defaultErr, err);
    res.status(errorObj.status).json(errorObj.message);
})

app.listen(3000, ()=>{
    console.log(`server listening on port ${PORT}`);
})