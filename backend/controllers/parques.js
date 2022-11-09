const Parque = require("../models/parque");

module.exports = {
    Create: (req, res) => {
        const parque = new Parque({
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            direccion: req.body.direccion,
            correo_electronico: req.body.correo_electronico,
            ciudad: req.body.ciudad,
            max_visitantes: req.body.max_visitantes,
            logotipo: req.body.logotipo,
            mapa: req.body.mapa,
            eslogan: req.body.eslogan,
        });

        parque.save()
            .then(result => {
                res.status(201).json({
                    message: "parque se creado exitosamente.",
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
        Parque.find((err, parques) => {
            if (err) {
                res.send(err, 500);
            }else{
                res.json(parques);
            }
        });
    },
    GetById: (req, res) => {
        Parque.findById(req.params.id, (err, parque) => {
            if (err) {
                res.send(err, 500);
            }else{
                res.json(parque);
            }
        });
    },
    Update: (req, res) => {
        var parque = req.body;
        Parque.findByIdAndUpdate(req.params.id, parque, (err, parque) => {
            if (err) {
                res.send(err, 500);
            }else{
                res.sendStatus(200)
            }
        } );
    },
    Delete: (req, res) => {
        Parque.findByIdAndRemove(req.params.id, (err, parque) => {
            if (err) {
                res.send(err, 500);
            }else{
                res.send(200)
            }
        });
    }
};
