const express = require('express')
const path = require('path')
const index = require('./routes/index');
const about = require('./routes/about');
const contactus = require('./routes/ContactUs');
const Features = require('./routes/Features');
const signup = require('./routes/signup');
const products = require('./routes/products');
const error404 = require('./routes/404error');




const app = express()

app.use(express.static(path.join(__dirname)))

app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(index);
app.use(about);
app.use(products);
app.use(signup);
app.use(Features);
app.use(contactus);
app.use(error404)



app.listen(3000, (err) => {
    console.log(err)
    console.log('server listen on port 3000')
})