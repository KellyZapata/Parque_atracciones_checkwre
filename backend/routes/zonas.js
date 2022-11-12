const express = require("express");
const router = express.Router();

const ZonaController = require("../controllers/zonas");

router.post("/", (req, res) => {
    ZonaController.Create(req, res);
});

router.get('/', (req, res) => {
    ZonaController.GetAll(req, res);
});

router.get('/:id', (req, res) => {
    ZonaController.GetById(req, res);
});

router.put('/:id', (req, res) => {
    ZonaController.Update(req, res);
});

router.delete('/:id', (req, res) => {
    ZonaController.Delete(req, res);
});

module.exports = router;
