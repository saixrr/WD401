const {request}=require('express')
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.get('/',(request,response)=>{
    response.send("hello world!!")
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
