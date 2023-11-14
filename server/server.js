const express = require('express')
const app = express();
const PORT = 3000;
// const userRouter = require('./router/userRouter');
const cors = require("cors");
const cookieSession = require("cookie-session");
const itemRouter = require('./router/itemRouter.js');
const itemController = require('./controller/itemController.js')
const path = require('path')
//install path

//set up cors policy 
var corsOptions = { 
  origin: "http://localhost:8080"
};
app.use(cors(corsOptions));

const mongoose = require('mongoose')
require('dotenv').config()

app.use(express.json());
mongoose.connect(process.env.DATABASE_CONNECTION_KEY) //must create a new .env file somehow link to this, will give us mongoDB access
mongoose.connection.once('open', () => {
    console.log('Connected to Database');
  });

app.use('/create-item', itemRouter)
app.use('/all-listings', itemController.getAllItems, (req, res) => {
    res.status(200).json(res.locals.allListings)
})

const staticPath = path.join(__dirname, '../build/index.html');
console.log('build html ',staticPath);
// const staticPath2 = path.join(__dirname, '../index.html');
// console.log('home html', staticPath2);
// app.get('/createpost', express.static(path.join(__dirname, '../build/index.html')));
app.use('/createpost', (req, res)=>{
    res.status(200).sendFile(staticPath)
});
app.use('/listings', (req, res)=>{
    res.status(200).sendFile(staticPath)
});
app.use('/signup', (req, res)=>{
    res.status(200).sendFile(staticPath)
});

app.use('/build', express.static(path.join(__dirname, '../build')));
// app.use('/login', userRouter);

// app.use('/signup', userRouter);

//endpoints for handling user login or user signup
app.use('/', (req, res)=> {
    res.status(200).sendFile(path.join(__dirname, '../index.html'))
});



app.use('*', (req, res) => {
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