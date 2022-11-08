const express = require('express');
const app = express()
const port = 8080

app.set('view engine', 'ejs')

let user = {firstname:'Matteo',lastname:'Gnz'}
app.get('/', (req, res) => {
    res.render('templateEJS', { user:user })

})

let utente = {nome:'',cognome:''}
app.get('/utente', (req, res) =>{
    utente.nome=req.query.nome
    utente.cognome=req.query.cognome
    res.render('templateUtente', { utente:utente })

})

app.listen(8080,()=>{
    console.log("express is working")
})
//prender da path /utente i dati user dalla query 