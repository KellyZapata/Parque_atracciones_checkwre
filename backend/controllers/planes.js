const Plan = require("../models/plan");

module.exports = {
    Create: (req, res) => {
        const plan = new Plan({
            nombre: req.body.nombre,
            color: req.body.color,
            valor: req.body.valor,
            atracciones_incluidas: req.body.atracciones_incluidas,
            ciudad: req.body.ciudad,
            max_visitantes: req.body.max_visitantes,
            logotipo: req.body.logotipo,
            mapa: req.body.mapa,
            eslogan: req.body.eslogan
        });

        plan.save()
            .then(result => {
                res.status(201).json({
                    message: "plan se creado exitosamente.",
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
        Plan.find((err, planes) => {
            if (err) {
                res.send(err, 500);
            }else{
                res.json(planes);
            }
        });
    },
    GetById: (req, res) => {
        Plan.findById(req.params.id, (err, plan) => {
            if (err) {
                res.send(err, 500);
            }else{
                res.json(plan);
            }
        });
    },
    Update: (req, res) => {
        var plan = req.body;
        Plan.findByIdAndUpdate(req.params.id, plan, (err, plan) => {
            if (err) {
                res.send(err, 500);
            }else{
                res.sendStatus(200)
            }
        } );
    },
    Delete: (req, res) => {
        Plan.findByIdAndRemove(req.params.id, (err, plan) => {
            if (err) {
                res.send(err, 500);
            }else{
                res.send(200)
            }
        });
    }
};
