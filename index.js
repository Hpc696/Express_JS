//intro mdn express
const express = require('express')
const app = express()
const port = 8080
//home di localhost:port
app.get('/',(req,res)=>{
    console.log("Home")
    res.send("Home")
})

app.get('/cacca',(req,res)=>{
    console.log("ho cacato")
    res.send("...poop...")
})
//fa quello interno grande quando path = /profile
app.get('/profile',(req,res)=>{
    console.log('Profilo di cacca')
    res.send('Profilo')
})

app.listen(8080,()=>{
    console.log('express is working...')
})