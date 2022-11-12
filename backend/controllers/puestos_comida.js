const PuestoComida = require("../models/puesto_comida");

module.exports = {
    Create: (req, res) => {
        const puesto_comida = new PuestoComida({
            nombre: req.body.nombre,
            imagen: req.body.imagen,
            zona: req.body.zona,
            menu: req.body.menu
        });

        puesto_comida.save()
            .then(result => {
                res.status(201).json({
                    message: "puesto de comida se creado exitosamente.",
                    parque: result
                });
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                });
            });
    },
    GetAll: (req, res) => {
        PuestoComida.find((err, puesto_comida) => {
            if (err) {
                res.send(err, 500);
            }else{
                res.json(puesto_comida);
            }
        });
    },
    GetById: (req, res) => {
        PuestoComida.findById(req.params.id, (err, puesto_comida) => {
            if (err) {
                res.send(err, 500);
            }else{
                res.json(puesto_comida);
            }
        });
    },
    Update: (req, res) => {
        var puesto_comida = req.body;
        PuestoComida.findByIdAndUpdate(req.params.id, puesto_comida, (err, puesto_comida) => {
            if (err) {
                res.send(err, 500);
            }else{
                res.sendStatus(200)
            }
        } );
    },
    Delete: (req, res) => {
        PuestoComida.findByIdAndRemove(req.params.id, (err, puesto_comida) => {
            if (err) {
                res.send(err, 500);
            }else{
                res.send(200)
            }
        });
    }
};
