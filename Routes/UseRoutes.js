const route = require('express').Router()
const {login,register,about,contact} = require('../Controller/Api')
const { Specificauth } = require('../Middleware/auth')

route.get('/login',Specificauth,login)
route.get('/register',Specificauth,register)
route.get('/about',about)
route.get('/contact',contact)

module.exports = route