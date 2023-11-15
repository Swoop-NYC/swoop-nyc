const express = require('express')
const app = express();
const PORT = 3000;
const userRouter = require('./router/userRouter');
const cors = require("cors");
const cookieSession = require("cookie-session");
const itemRouter = require('./router/itemRouter.js');
const itemController = require('./controller/itemController.js')
const path = require('path')

//set up cors policy 
var corsOptions = {
  origin: "http://localhost:8080"
};
app.use(cors(corsOptions));

//require mongoose and require the dotenv for the key for the DB
const mongoose = require('mongoose')
require('dotenv').config()


app.use(express.json());
mongoose.connect(process.env.DATABASE_CONNECTION_KEY)
mongoose.connection.once('open', () => {
    console.log('Connected to Database');
  });

const reactRouterStaticPath = path.join(__dirname, '../build/index.html');
//create-item is post request
app.use('/create-item', itemRouter)

//TODO: working on getting the userController method update to check to see if users can signup 
app.use('/create-new-user', userRouter);

//route for get requests from front end to return all objects from DB
app.use('/all-listings', itemController.getAllItems, (req, res) => {
    res.status(200).json(res.locals.allListings)
})

// const reactRouterStaticPath2 = path.join(__dirname, '../index.html');
// console.log('home html', reactRouterStaticPath2);
// app.get('/createpost', express.static(path.join(__dirname, '../build/index.html')));

app.use('/createpost', (req, res)=>{
    res.status(200).sendFile(reactRouterStaticPath)
});
app.use('/listings', (req, res)=>{
    res.status(200).sendFile(reactRouterStaticPath)
});
app.use('/signup', (req, res)=>{
    res.status(200).sendFile(reactRouterStaticPath)
});

app.use('/build', express.static(path.join(__dirname, '../build')));

// app.use('/login', userRouter);

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
    res.status(errorObj.status).json(errorObj.message);
})

app.listen(3000, ()=>{
    console.log(`server listening on port ${PORT}`);
})