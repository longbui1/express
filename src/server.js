require('dotenv').config({ path: './src/config/.env' })
const path = require('path');
var cookieParser = require('cookie-parser')
const express = require('express')
const app = express()
const PORT = process.env.PORT
const methodOverride = require('method-override')

// cors setting
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// set the view engine to ejs
app.set('view engine', 'ejs')
app.set('views', './src/views')
//static file 
app.use(express.static(path.join(__dirname, '/public')))


//require router
const productRoutes = require('./routes/products/productRoutes')
const categoryRoutes = require('./routes/products/categoryRoutes')
const brandRoutes = require('./routes/products/brandRouters')
const userRoutes = require('./routes/users/userRoutes')
const authRoutes = require('./routes/authentication/authRoutes')
const adminRoutes = require('./routes/authentication/adminRoutes')
const adminDashboardRoutes = require('./routes/admin/adminDashboardRoutes')
const productsAdmin = require('./routes/admin/productsAdmin')
const brandsAdmin = require('./routes/admin/brandsAdmin')
const mailerRoutes = require('./routes/mailer/mailerRoutes')


//connect to db
const db = require('./connect/index')
db.connect()

//home
app.get('/', (req, res) => {
  res.send('hello word')
})

//body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//cookieParser
app.use(cookieParser('_method'));
app.use(methodOverride());

//add routes
app.use('/products', productRoutes)
app.use('/categories', categoryRoutes)
app.use('/brands', brandRoutes)
app.use('/users', userRoutes)
app.use('/account', authRoutes)
app.use('/rhino-admin', adminRoutes)
app.use('/dashboard', adminDashboardRoutes)
app.use('/dashboard/products', productsAdmin)
app.use('/dashboard/brands', brandsAdmin)
app.use('/dashboard/sendEmail', mailerRoutes)


app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})