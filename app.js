const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');

const app = express();
const passport = require('passport');

//passport config 
require('./config/passport')(passport);

//DB config
const db = require('./config/keys').MongoURI;

//connect to |Mongo

mongoose.connect(db, { useNewUrlParser: true})
.then(()=> console.log('Mongodb connected'))
.catch((err) => console.log(err))

// ejs
app.use(expressLayouts);
app.set('view engine', 'ejs');

// bodyparser middleware
app.use(express.urlencoded({extended:false}));

// other middlewares of express middlewares

app.use(session({
    secret: 'exbeyondSecret',
    resave: true,
    saveUninitialized: true    
  }))

// passport middleware

  app.use(passport.initialize());
  app.use(passport.session());
  // connect clash

  app.use(flash());

  // global vars
  app.use((req,res,next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
  })


// routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server started on port ${5000}`));


