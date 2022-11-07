const express = require('express');
const app = express()
const port = 8080

app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('prova', { title: 'Home', message: 'Benvenuto' , nome: ('CIAO' + document.getElementById(form).children[0].value )})

})

app.listen(8080,()=>{
    console.log("express is working")
})