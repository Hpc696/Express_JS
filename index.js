//intro mdn express
const express = require('express')
const app = express()
const port = 8080
//home di localhost:port
app.get('/',(req,res)=>{
    console.log("Home")
    console.log(req.query) //stampa in console la query che inseriamo (es. '/?q=cakka)
    res.send("Home")
})
//params
app.get('/cacca/:molla/:dura',(req,res)=>{
    console.log("ho cacato")
    console.log("Cacca molla: " ,req.params['molla'])
    console.log("Cacca dura: " ,req.params['dura']) 
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