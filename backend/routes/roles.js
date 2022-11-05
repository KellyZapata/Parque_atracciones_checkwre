const express = require("express");
const router = express.Router();

const RolController = require("../controllers/roles");

router.post("/", (req, res) => {
    RolController.Create(req, res);
});

router.get('/', (req, res) => {
    RolController.GetAll(req, res);
});

router.get('/:id', (req, res) => {
    RolController.GetById(req, res);
});

router.put('/:id', (req, res) => {
    RolController.Update(req, res);
});

router.delete('/:id', (req, res) => {
    RolController.Delete(req, res);
});

module.exports = router;
