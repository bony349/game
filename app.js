const express = require('express')
const path = require('path')
const app = express()
app.use(express.static(path.join(__dirname, 'assets')))
app.use(express.static(path.join(__dirname)))

app.set('view engine', 'ejs')
app.set('views', 'views')
app.get('/', (req, res, next) => {
    res.render('index')
})
app.get('/about', (req, res, next) => {
    res.render('about')
})
app.get('/ContactUs', (req, res, next) => {
    res.render('ContactUs')
})
app.get('/Features', (req, res, next) => {
    res.render('Features')
})
app.get('/products', (req, res, next) => {
    res.render('products')
})
app.get('/signup', (req, res, next) => {
    res.render('signup')
})
app.listen(3000, (err) => {
    console.log(err)
    console.log('server listen on port 3000')
})
app.use(function(req, res, next) {
    return res.status(404).render('404error');
});