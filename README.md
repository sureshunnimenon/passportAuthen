# passportAuthen
Passport authentication using Node and express
Key takeaways:
User Model/schema for storing the email information, password is hashed and stored. dcryptjs is used for decryping the password and compare with what is entered by user.

In 'routes' folder, index and users - 2 files for all routes.
router() method of express is used. 

Middleware function (say/named, ensureAuthen) is used for protected routes.

In users route, both 'get' and 'post' actions on routes login and register are defined.

passport-local strategy is used for 'post' action on login.

in register route, client side validation is first used, (null fields, passwords not matching, passowrd not of required length etc.)
once client side validation is passed, server side validated (whether already exists & whether password matches if exists)

newuser is created, for password field, hashed password is used. 

views: Partials for header, footer etc. (repeat code)
ejs is used.
login, welcome, dashboard, register- ejs files
layout.ejs - express-ejs-layout package is used to simplify layout management

flash & session for alerts across forms within session.

app.js is used for only for loading and using middleware, packages, server etc.

config has 3 files
auth.js: for passport authentication check, using isAuthenticated()

keys: for storing mongoDB credentials

passport: for local strategy. 

