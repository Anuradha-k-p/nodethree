const express=require("express")
const route= require('./Routes/UseRoutes');
const app=express();
const { Allauth } = require("./Middleware/auth");
const cors = require('cors')

app.use(Allauth)

app.use('/api',route)

// app.use(cors({
//     origin:"http://127.0.0.1:5500/Html/new.html" // any port can access and use it in the frontend
// }))

// app.get('/data',(req,res)=>{
//     res.json({
//         name : 'madhav',
//         address: 'Mumbai',
//         college: 'IIT'
//     })
// })


app.listen(5050,()=>{
    console.log('serever started')
})