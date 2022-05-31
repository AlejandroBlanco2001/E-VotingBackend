const { Router } = require('express')
const router = Router()

router.get('/candidates', async (req,res) => {
    // Suppose that we have a DB
    let candidates = [
      {
        name: "Isaac Blanco",
        party: "Partido isaacneta",
        description: "Bla bla bla bla",
        image: "http://localhost:8000/static/p1.jpg",
      },
      {
        name: "Dylan Cantillo",
        party: "Partido matematicas",
        description: "Ble ble ble ble",
        image: "http://localhost:8000/static/p2.jpg",
      },
      {
        name: "Luis Caro",
        party: "Partido caro",
        description: "Bli bli bli bli",
        image: "http://localhost:8000/static/p3.jpg",
      },
      {
        name: "Fabian Vargas",
        party: "Partido junior",
        description: "Blo blo blo blo",
        image: "http://localhost:8000/static/p4.jpg",
      },
      {
        name: "German Vargas",
        party: "Partido miedo",
        description: "Blu blu blu blu",
        image: "http://localhost:8000/static/p5.jpg",
      },
    ];
    res.json(candidates)
});

module.exports = router