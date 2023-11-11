const express = require('express')
const app = express();
const PORT = 3000;
const userRouter = require('./router/userRouter');

//endpoints for handling user login or user signup
app.use('/login', userRouter);
app.use('/signup', userRouter);

app.listen(3000, ()=>{
    console.log(`server listening on port ${PORT}`);
})