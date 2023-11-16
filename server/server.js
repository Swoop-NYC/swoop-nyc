const path = require('path')
const express = require('express')
const app = express();
const PORT = 3000;
const cors = require("cors");
const userRouter = require('./router/userRouter');
const itemRouter = require('./router/itemRouter.js');
const itemController = require('./controller/itemController.js')
// const cookieSession = require("cookie-session");
const cookieParser = require('cookie-parser')

//set up cors policy 
const corsOptions = {
  origin: "http://localhost:8080"
};
app.use(cors(corsOptions));

//require mongoose and require the dotenv for the key for the DB
const mongoose = require('mongoose')
require('dotenv').config()

//parses json data 
app.use(express.json());
app.use(cookieParser())

//connects to the DB
mongoose.connect(process.env.DATABASE_CONNECTION_KEY)
mongoose.connection.once('open', () => {
    console.log('Connected to Database');
  });

//serves files for the webpack
app.use('/build', express.static(path.join(__dirname, '../build')));

//to log the user into their account
app.use('/auth', userRouter);


const reactRouterStaticPath = path.join(__dirname, '../build/index.html');

//create-item is post request
app.use('/create-item', itemRouter)

//TODO: working on getting the userController method update to check to see if users can signup 
app.use('/create-new-user', userRouter);

//route for get requests from front end to return all objects from DB
app.use('/all-listings', itemController.getAllItems, (req, res) => {
    res.status(200).json(res.locals.allListings)
})

//the following serve static pages via index.html through react router
app.use('/createpost', (req, res)=>{
    res.status(200).sendFile(reactRouterStaticPath)
});
app.use('/listings', (req, res)=>{
    res.status(200).sendFile(reactRouterStaticPath)
});
app.use('/signup', (req, res)=>{
    res.status(200).sendFile(reactRouterStaticPath)
});
app.use('/favorite', (req, res)=>{
    res.status(200).sendFile(reactRouterStaticPath)
});
app.use('/user-profile', (req, res)=>{
    res.status(200).sendFile(reactRouterStaticPath)
});

app.use('/build', express.static(path.join(__dirname, '../build')));

// app.use('/login', userRouter);
app.use('/login', (req, res)=>{
    res.status(200).sendFile(reactRouterStaticPath)
});

//used for serving the application 
app.use('/', (req, res)=> {
    res.status(200).sendFile(path.join(__dirname, '../index.html'))
});

//wild card route handler 
app.use('*', (req, res) => {
    res.status(404).send('File Not Found');
  });

//global error handler 
app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 500,
        message: { err: err.message }
    }
    const errorObj = Object.assign(defaultErr, err);
    console.log(errorObj.log)
    res.status(errorObj.status).json(errorObj.message);
})

//connects the server to the port 
app.listen(3000, ()=>{
    console.log(`server listening on port ${PORT}`);
})