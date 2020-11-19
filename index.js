//requiring files
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port=3333;

const db = require('./config/mongoose')
const bodyParser = require('body-parser')
const expressLayouts = require('express-ejs-layouts');

// used for session cookies
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const MongoStore = require('connect-mongo')(session);




// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.urlencoded());
app.use(cookieParser());

// app.use('/',express.static(__dirname + '/public'))
app.use(express.static('assests'));

app.use(expressLayouts);
//extract style and scripts from sub page into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);





//set up view engine
app.set('view engine', 'ejs');
app.set('views', './views');


app.use(session({
    name:'comeet',
  secret:'keyboard',
  saveUninitialized: false,
  resave: false,
  cookie: {
    //    secure: true,
  maxAge:(1000 * 60 * 100) },
  store: new MongoStore({
       mongooseConnection:db,
        autoRemove:'disabled'
      },
      (err)=>{console.log(err || 'connect mongodb setup ok!');})
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

// use express route
app.use('/', require('./routes'));

// fire up sever
app.listen(port,()=>{
    console.log('server started at http://localhost:3333')
})