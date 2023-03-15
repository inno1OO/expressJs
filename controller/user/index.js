const User = require('../../models/user')

exports.getAddUser = (req, res, next) => {
    res.render('add-user', { pageTitle: 'Add UserPipit', path: '/user/add-user', formsCSS: true, userCSS: true, activeAddUser: true})
}

exports.saveUser = (req, res, next) => {
    const usr = new User(req.body.userName, req.body.firstName, req.body.lastName, req.body.address, req.body.phone)
    usr.addUser()
    res.redirect('/user/view-users')
}

exports.getAllUser = (req, res, next) => {
    // console.log(User.getAll())
    res.render('view-users', { users: User.getAll(), pageTitle: 'User', formsCSS: true, userCSS: true, activeUser: true })
}