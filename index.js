require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const sessions = require('express-session')
const path = require('path')
const bodyParser = require('body-parser')

const db = require('./src/database/query/db')
const Blockchain = require('./src/Blockchain/blockchain')
const Block = require('./src/Blockchain/block') 
const tools  = require('./utils')


const vote = require("./src/routes/vote");
const auth = require('./src/routes/authentication')
const info = require('./src/routes/info')
const { max } = require('pg/lib/defaults')
const oneDay = 1000*60*60*24;

const port = process.env.PORT || 5000;
const app = express()

const chain = new Blockchain()

async function selectVoters(){  
  const voters = await db.giveAllPersonas()
  let numberVoters = voters.rowCount
  let splitVoters = tools(voters.rows,1000)
  const maxBlocks = splitVoters.length
  for (let i = 0; i < maxBlocks; i++) {
    let block = new Block({
      nombre: `Puesto${i}`,
      estado: `Disponible`,
    });
    block.addCedulas(splitVoters[i])
    await chain.addBlock(block);
  } 
}

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

app.use('/static/', express.static(__dirname + '/src/images'))
app.use('/auth', auth.router)
app.use('/info', info)
app.use('/votes', vote)

selectVoters();

module.exports = {
  chain
}
