const express = require('express')
const app = express();
const PORT = 3000;

app.listen(3000, ()=>{
    console.log(`server listening on port ${PORT}`);
})