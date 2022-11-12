const Atraccion = require("../models/atraccion");

module.exports = {
    Create: (req, res) => {
        const atraccion = new Atraccion({
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            imagen: req.body.imagen,
            estatura_min: req.body.estatura_min,
            video: req.body.video,
            estado: req.body.estado
        });

        atraccion.save()
            .then(result => {
                res.status(201).json({
                    message: "atracción se creado exitosamente.",
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
        Atraccion.find((err, atracciones) => {
            if (err) {
                res.send(err, 500);
            }else{
                res.json(atracciones);
            }
        });
    },
    GetById: (req, res) => {
        Atraccion.findById(req.params.id, (err, atraccion) => {
            if (err) {
                res.send(err, 500);
            }else{
                res.json(atraccion);
            }
        });
    },
    Update: (req, res) => {
        var atraccion = req.body;
        Atraccion.findByIdAndUpdate(req.params.id, atraccion, (err, atraccion) => {
            if (err) {
                res.send(err, 500);
            }else{
                res.sendStatus(200)
            }
        } );
    },
    Delete: (req, res) => {
        Atraccion.findByIdAndRemove(req.params.id, (err, atraccion) => {
            if (err) {
                res.send(err, 500);
            }else{
                res.send(200)
            }
        });
    }
};
