const Departamento = require("../models/departamento");

module.exports = {
    Create: (req, res) => {
        const departamento = new Departamento({
            nombre: req.body.nombre,
        });

        departamento.save()
            .then(result => {
                res.status(201).json({
                    message: "Departamento se creado exitosamente.",
                    departamento: result
                });
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                });
            });
    },
    GetAll: (req, res) => {
        Departamento.find((err, departamentos) => {
            if (err) {
                res.send(err, 500);
            }else{
                res.json(departamentos);
            }
        });
    },
    GetById: (req, res) => {
        Departamento.findById(req.params.id, (err, departamento) => {
            if (err) {
                res.send(err, 500);
            }else{
                res.json(departamento);
            }
        });
    },
    Update: (req, res) => {
        var departamento = req.body;
        Departamento.findByIdAndUpdate(req.params.id, departamento, (err, departamento) => {
            if (err) {
                res.send(err, 500);
            }else{
                res.sendStatus(200)
            }
        } );
    },
    Delete: (req, res) => {
        Departamento.findByIdAndRemove(req.params.id, (err, departamento) => {
            if (err) {
                res.send(err, 500);
            }else{
                res.send(200)
            }
        });
    }
};
