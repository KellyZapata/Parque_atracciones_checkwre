const Rol = require("../models/rol");

module.exports = {
    Create: (req, res) => {
        const rol = new Rol({
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
        });

        rol.save()
            .then(result => {
                res.status(201).json({
                    message: "Rol creado exitosamente.",
                    rol: result
                });
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                });
            });
    },
    GetAll: (req, res) => {
        Rol.find((err, roles) => {
            if (err) {
                res.send(err, 500);
            }else{
                res.json(roles);
            }
        });
    },
    GetById: (req, res) => {
        Rol.findById(req.params.id, (err, rol) => {
            if (err) {
                res.send(err, 500);
            }else{
                res.json(rol);
            }
        });
    },
    Update: (req, res) => {
        var rol = req.body;
        Rol.findByIdAndUpdate(req.params.id, rol, (err, rol) => {
            if (err) {
                res.send(err, 500);
            }else{
                res.sendStatus(200)
            }
        } );
    },
    Delete: (req, res) => {
        Rol.findByIdAndRemove(req.params.id, (err, rol) => {
            if (err) {
                res.send(err, 500);
            }else{
                res.send(200)
            }
        });
    }
};
