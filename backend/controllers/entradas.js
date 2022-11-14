const Entrada = require("../models/entrada");

module.exports = {
    Create: (req, res) => {
        const entrada = new Entrada({
            valor: req.body.valor,
            tipo_entrada: req.body.tipo_entrada,
            usuario: req.body.usuario,
            fecha: req.body.fecha,
            valido: req.body.valido
        });

        entrada.save()
            .then(result => {
                res.status(201).json({
                    message: "tipo entrada se creado exitosamente.",
                    entrada: result
                });
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                });
            });
    },
    GetAll: (req, res) => {
        Entrada.find((err, entrada) => {
            if (err) {
                res.send(err, 500);
            }else{
                res.json(entrada);
            }
        });
    },
    GetById: (req, res) => {
        Entrada.findById(req.params.id, (err, entrada) => {
            if (err) {
                res.send(err, 500);
            }else{
                res.json(entrada);
            }
        });
    },
    Update: (req, res) => {
        var entrada = req.body;
        Entrada.findByIdAndUpdate(req.params.id, entrada, (err, entrada) => {
            if (err) {
                res.send(err, 500);
            }else{
                res.sendStatus(200)
            }
        } );
    },
    Delete: (req, res) => {
        Entrada.findByIdAndRemove(req.params.id, (err, entrada) => {
            if (err) {
                res.send(err, 500);
            }else{
                res.send(200)
            }
        });
    }
};
