const express = require("express")
const router = express.Router()
const path = require("path")
const routerDashboard = require("./dashboard")
const userController = require('../../controller/user')

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'dashboard.html'))
})



router.get('/add-user', userController.getAddUser)
router.post('/add-user', userController.saveUser)
router.get('/view-users', userController.getAllUser)
router.use('/dashboard', routerDashboard)

module.exports = router;