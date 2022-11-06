const express = require("express");
const router = express.Router();

const CiudadController = require("../controllers/ciudades");

router.post("/", (req, res) => {
    CiudadController.Create(req, res);
});

router.get('/', (req, res) => {
    CiudadController.GetAll(req, res);
});

router.get('/:id', (req, res) => {
    CiudadController.GetById(req, res);
});

router.put('/:id', (req, res) => {
    CiudadController.Update(req, res);
});

router.delete('/:id', (req, res) => {
    CiudadController.Delete(req, res);
});

module.exports = router;
