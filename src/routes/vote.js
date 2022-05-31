const { Router } = require('express')
const router = Router()
const db = require('../database/query/db')
const ethers = require('ethers')

router.get('/stats', async (req,res) => {
    let votes = await db.getVotes()
    let candidatos_names = votes.map((item) => item.candidato)
    let voteCount = votes.map((item) => item.resultados);
    let data = {
      labels: candidatos_names,
      datasets: [
        {
          label: "# of Votes",
          data: voteCount,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };
    res.send(data)
})

module.exports = router