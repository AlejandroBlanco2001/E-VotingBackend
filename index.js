require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const sessions = require('express-session')
const path = require('path')
const bodyParser = require('body-parser')

const vote = require("./src/routes/vote");
const auth = require('./src/routes/authentication')
const info = require('./src/routes/info')
const oneDay = 1000*60*60*24;

const port = process.env.PORT || 5000;

const app = express()

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(
  sessions({
    secret: process.env.COOKIE,
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: false,
  })
);
app.use(cookieParser());
app.use(cors({ credentials: true, origin: true}));

app.listen(port, () => 
    console.log(`Server started on port ${port}`)
)

app.get('/', (req,res) => {
  res.send("Works")
})

app.use('/static/', express.static(__dirname + '/src/images'))
app.use('/auth', auth.router)
app.use('/info', info)
app.use('/votes', vote)