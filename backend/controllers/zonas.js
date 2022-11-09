const Zona = require("../models/zona");

module.exports = {
    Create: (req, res) => {
        const zona = new Zona({
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            color: req.body.color,
            parque: req.body.parque
        });

        zona.save()
            .then(result => {
                res.status(201).json({
                    message: "zona se creado exitosamente.",
                    zona: result
                });
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                });
            });
    },
    GetAll: (req, res) => {
        Zona.find((err, zonas) => {
            if (err) {
                res.send(err, 500);
            }else{
                res.json(zonas);
            }
        });
    },
    GetById: (req, res) => {
        Zona.findById(req.params.id, (err, zona) => {
            if (err) {
                res.send(err, 500);
            }else{
                res.json(zona);
            }
        });
    },
    Update: (req, res) => {
        var zona = req.body;
        Zona.findByIdAndUpdate(req.params.id, zona, (err, zona) => {
            if (err) {
                res.send(err, 500);
            }else{
                res.sendStatus(200)
            }
        } );
    },
    Delete: (req, res) => {
        Zona.findByIdAndRemove(req.params.id, (err, zona) => {
            if (err) {
                res.send(err, 500);
            }else{
                res.send(200)
            }
        });
    }
};
