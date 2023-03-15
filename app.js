const express = require('express')
const ejs = require("ejs")
const port = 3000;
const app = express()
const router = require("./routes")
const path = require('path')


app.use(express.json())
app.use(express.urlencoded({extented: false }))
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css'))) 
app.set('view engine', 'html')
app.engine('html', ejs.renderFile)
//using the router
app.use('/', router)

app.listen(port, () => console.log("App running"))

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname,'views', 'login.html'))
// })

// app.get('/', (req, res) => {
//     // res.sendFile(path.join(__dirname, 'views', 'login.html'))
//     res.render('login', {pageTitle: 'Login'})
// })