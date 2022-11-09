const express = require("express");
const router = express.Router();

const ParqueController = require("../controllers/parques");

router.post("/", (req, res) => {
    ParqueController.Create(req, res);
});

router.get('/', (req, res) => {
    ParqueController.GetAll(req, res);
});

router.get('/:id', (req, res) => {
    ParqueController.GetById(req, res);
});

router.put('/:id', (req, res) => {
    ParqueController.Update(req, res);
});

router.delete('/:id', (req, res) => {
    ParqueController.Delete(req, res);
});

module.exports = router;
