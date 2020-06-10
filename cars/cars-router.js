const express = require("express");

const db = require("../data/connection.js");

const router = express.Router();

router.get("/", (req, res) => {
  db("cars")
    .then(cars => {
      res.json(cars);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to retrieve cars" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  db("cars")
    .where({ id })
    .first()
    .then(cars => {
      res.json(cars);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to retrieve car" });
    });
});

router.post('/', (req, res) => {
    let newCar = {
        vin: req.body.vin,
        make: req.body.make,
        model: req.body.model,
        mileage: req.body.mileage,
        transmission: req.body.transmission,
        title_status: req.body.title_status
    }
    db('cars').insert(newCar)
    .then(car => {
        res.status(200).json(car)
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to retrieve car" });
      });
})

module.exports = router;
