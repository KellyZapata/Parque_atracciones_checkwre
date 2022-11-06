const Ciudad = require("../models/ciudad");

module.exports = {
    Create: (req, res) => {
        const ciudad = new Ciudad({
            nombre: req.body.nombre,
            departamento: req.body.departamento
        });

        ciudad.save()
            .then(result => {
                res.status(201).json({
                    message: "Ciudad se creado exitosamente.",
                    ciudad: result
                });
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                });
            });
    },
    GetAll: async (req, res) => {
        try {
            ciudades = await Ciudad.find().populate("departamento");
            res.status(200).json(ciudades);
        } catch (err) {
            res.status(500).json({
                error: err
            });
        }
    },
    GetById: async (req, res) => {
        try {
            ciudad = await Ciudad.findById(req.params.id).populate("departamento");
            res.status(200).json(ciudad);
        } catch (err) {
            res.status(500).json({
                error: err
            });
        }
    },
    Update: (req, res) => {
        var ciudad = req.body;
        Ciudad.findByIdAndUpdate(req.params.id, ciudad, (err, ciudad) => {
            if (err) {
                res.send(err, 500);
            }else{
                res.sendStatus(200)
            }
        } );
    },
    Delete: (req, res) => {
        Ciudad.findByIdAndRemove(req.params.id, (err, ciudad) => {
            if (err) {
                res.send(err, 500);
            }else{
                res.send(200)
            }
        });
    }
};
