const Usuario = require("../modelos/usuario");

module.exports = {
    GetAll: (req, res) => {
        Usuario.find((err, usuarios) => {
            if (err) {
                res.send(err, 500);
            }else{
                res.json(usuarios);
            }
        });
    },
    GetById: (req, res) => {
        Usuario.findById(req.params.id, (err, usuario) => {
            if (err) {
                res.send(err, 500);
            }else{
                res.json(usuario);
            }
        });
    },
    Update: (req, res) => {
        var usuario = req.body;
        Usuario.findByIdAndUpdate(req.params.id, usuario, (err, usuario) => {
            if (err) {
                res.send(err, 500);
            }else{
                res.sendStatus(200)
            }
        } );
    },
    Delete: (req, res) => {
        Usuario.findByIdAndRemove(req.params.id, (err, usuario) => {
            if (err) {
                res.send(err, 500);
            }else{
                res.send(200)
            }
        });
    }
};
