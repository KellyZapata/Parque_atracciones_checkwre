const Usuario = require("../models/usuario");
const Rol = require("../models/rol");

module.exports = {
    GetAll: async (req, res) => {
        try {
            usuarios = await Usuario.find().populate('roles');
            res.status(200).json(usuarios);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    GetById: async (req, res) => {
        try {
            usuario = await Usuario.findById(req.params.id).populate('roles');
            res.status(200).json(usuario);
        } catch (error) {
            res.status(500).json(error);
        }
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
