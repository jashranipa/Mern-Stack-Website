const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

require("./db/conn");

app.use(express.json());

app.use(require('./router/auth'));

const Register = require('./models/registers');

// res-> resond   req->request

// app.get('/',(req,res)=> {
//     res.send("Hello world from server");    
// });

// app.get('/form2',(req,res)=> {
//     res.send("Hello world 2 from server");    
// });

// app.get('/home',(req,res)=> {
//     res.send("home from server");    
// });

// app.get('/student',(req,res)=> {
//     res.send("student from server");    
// });

// app.get('/faculty',(req,res)=> {
//     res.send("faculty from server");    
// });
// app.get('/contact',(req,res)=> {
//     res.send("contact from server");    
// });


app.listen(port,() => {
    console.log(`Server is running at port ${port}`);
})