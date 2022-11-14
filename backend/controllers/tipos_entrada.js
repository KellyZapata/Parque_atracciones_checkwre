const TipoEntrada = require("../models/tipo_entrada");

module.exports = {
    Create: (req, res) => {
        const tipo_entrada = new TipoEntrada({
            nombre: req.body.nombre,
            valor: req.body.valor,
            parque: req.body.parque,
            cantidad: req.body.cantidad,
            incremento: req.body.incremento,
            cambio_fechas: req.body.cambio_fechas
        });

        tipo_entrada.save()
            .then(result => {
                res.status(201).json({
                    message: "tipo entrada se creado exitosamente.",
                    tipo_entrada: result
                });
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                });
            });
    },
    GetAll: (req, res) => {
        TipoEntrada.find((err, zonas) => {
            if (err) {
                res.send(err, 500);
            }else{
                res.json(zonas);
            }
        });
    },
    GetById: (req, res) => {
        TipoEntrada.findById(req.params.id, (err, tipos_entrada) => {
            if (err) {
                res.send(err, 500);
            }else{
                res.json(tipos_entrada);
            }
        });
    },
    Update: (req, res) => {
        var tipos_entrada = req.body;
        TipoEntrada.findByIdAndUpdate(req.params.id, tipos_entrada, (err, tipos_entrada) => {
            if (err) {
                res.send(err, 500);
            }else{
                res.sendStatus(200)
            }
        } );
    },
    Delete: (req, res) => {
        TipoEntrada.findByIdAndRemove(req.params.id, (err, tipos_entrada) => {
            if (err) {
                res.send(err, 500);
            }else{
                res.send(200)
            }
        });
    }
};
