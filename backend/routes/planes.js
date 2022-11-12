const express = require("express");
const router = express.Router();

const PlanesController = require("../controllers/planes");

router.post("/", (req, res) => {
    PlanesController.Create(req, res);
});

router.get('/', (req, res) => {
    PlanesController.GetAll(req, res);
});

router.get('/:id', (req, res) => {
    PlanesController.GetById(req, res);
});

router.put('/:id', (req, res) => {
    PlanesController.Update(req, res);
});

router.delete('/:id', (req, res) => {
    PlanesController.Delete(req, res);
});

module.exports = router;
