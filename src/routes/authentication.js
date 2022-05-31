const qrCode = require('qrcode')
const db = require("../database/query/db.js");
const tools = require("../../utils");
const { Router } = require('express');
const router = Router()
const Block = require("../Blockchain/block");
const { authenticator } = require('otplib')
const Blockchain = require("../Blockchain/blockchain");
let temp = false;

var session;
const chain = new Blockchain();

async function selectVoters() {
    const voters = await db.giveAllPersonas();
    let numberVoters = voters.rowCount;
    let splitVoters = tools(voters.rows, 1000);
    const maxBlocks = splitVoters.length;
    for (let i = 0; i < maxBlocks; i++) {
        let block = new Block({
        nombre: `Puesto${i}`,
        estado: `Disponible`,
        });
        block.addCedulas(splitVoters[i]);
        await chain.addBlock(block);
    }
    return true
}

selectVoters()

router.post('/create', async (req, res) => {
    const { username, password, cedula} = req.body
    const secret = authenticator.generateSecret()
    await db.createUser(username,cedula,password,secret);
    qrCode.toDataURL(authenticator.keyuri(username, "Vot-e", secret), (err, url) => {
        if (err) {
            throw err;
        }
        res.send(url)
    })
})

router.get('/all', async (req,res) => {
    const sw = await db.giveAllUsers()
    console.log(sw);
    res.json({message:"OK"})
})

router.post('/login', async (req, res) => {
    const { username, cedula, secret, password } = req.body;
    const sw = await db.searchUser(username, password, cedula)
    if (sw[0]) {
        const secret_query = sw[1] //Secret of the query
        if (!authenticator.check(secret,secret_query)){
            res.send({message: "ERROR"})
        }else{
            session = req.session
            session.userid = req.body.username
            console.log(req.session)
            res.send({ message: "OK" })
        }
    } else {
        res.send({ message: "ERROR" })
    }
})

router.post("/checkVoteDB", async (req, res) => {
    let { cedula, candidato } = req.body;
    let response = await db.getVote(cedula)
    if(response[1] == 1){
        if(response[0][0].yavoto == true){
            //await db.registerVote(candidato);
            res.send({status:0})
            return
        }else{
            await db.updateVoto(cedula)
            res.send({ status: 1 });
            return
        }
    }else{
        res.send({status: 2})
        return
    }
});


router.post("/checkVote", async (req, res) => {
    if (!temp) {
        selectVoters();
        temp = !temp;
    }
    let { cedula } = req.body;
    let list = chain.getBlocks();
    for (let block of list) {
        if (block.checkCedula(cedula)) {
        res.send({ found: true });
        return;
        }
    }
    res.send({ found: false });
});

function getSession() {
    return session
}
module.exports = { router, getSession }