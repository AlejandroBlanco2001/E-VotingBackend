const { Router } = require('express')
const router = Router()
const db = require("../database/query/db.js");

router.get('/candidates', async (req,res) => {
    const response = await db.giveAllCandidates()
    res.send(response)
});

module.exports = router