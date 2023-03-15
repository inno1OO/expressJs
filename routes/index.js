const express = require('express')
const router = express.Router()
const path = require("path")
const routerUsr = require('./user')

router.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, 'views', 'login.html'))
    res.render('login', {pageTitle: 'Login'})
})

router.post('/login', (req, res) => {
    res.render('dashboard', { pageTitle: '1 2' })
})

router.use('/user', routerUsr)
module.exports = router;