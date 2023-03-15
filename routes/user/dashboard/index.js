const express = require("express")
const routerDash = express.Router()
const path = require('path')

const arr = [{
    name:"Ram", courses:["java","javascript"]
    },
    {
    name:"Shyam", courses:["Python","Angular"]
    }];

    const form = { name: 'Ram', age: '30', skills:{ list: ['java', 'javascript'] ,value:'javascript'}}
routerDash.get("/", (req, res) => {
    // res.sendFile(path.join(__dirname, 'views', 'dashboard.html'))
    res.render('dashboard', {pageTitle: 'Dashboard', dat:arr, formDat:form})
})

module.exports = routerDash