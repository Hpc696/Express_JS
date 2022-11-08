const express = require('express');
const app = express()
const port = 8080

app.set('view engine', 'ejs')

app.get('/form', (req,res) => {
    res.render('templateForm',{
        topicHead : 'User Form',
    });
})

app.post('/form', (req, res) =>{
    let utente
    console.log(utente)
    res.render('templateForm',{
        utente : {nome:req.body.fname, cognome:req.body.lname} ,
        topicHead : 'User Form'
    });
})

app.listen(8080,()=>{
    console.log("express is working")
})