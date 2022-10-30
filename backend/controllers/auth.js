const generador = require('password-generator');
const bcrypt = require('bcrypt');
const Usuario = require('../models/usuario');
const jwt = require('jsonwebtoken');

module.exports = {
    Login: (req, res) => {
        let fetchedUser;
        Usuario.findOne({correo_electronico: req.body.correo_electronico}).then(user=>{
          if(!user){
            return res.status(401).json({
              token: "error",
              expiresIn: "error",
              role: "error",
              message: "Correo electrónico invalido."
            });
          }
          fetchedUser=user;
          return bcrypt.compare(req.body.clave, user.clave);
        })
        .then(result =>{
          if(!result){
            return res.status(401).json({
              token: "error",
              expiresIn: "error",
              role: "error",
              message: "Contraseña invalida."
            });
          }
          const token = jwt.sign(
            {email: fetchedUser.correo_electronico , userId : fetchedUser ._id } ,
            process.env.TOKEN_SECRET,
            { expiresIn : "24h"}
            );
            res.status(200).json({
              token: token,
              expiresIn: 86400,
              role: fetchedUser.roles,
              message: "Login exitoso."
            });
        })
        .catch(err =>{
          return res.status(401).json({
            message: "Autenticacion fallida."
          });
        });
    },
    Signup: (req, res) => {
        clave = generador(8, false);
        bcrypt.hash(clave, 10)
        .then(hash => {
          const user = new Usuario({
            nombres : req.body.nombres,
            apellidos : req.body.apellidos,
            telefono_fijo : req.body.telefono_fijo,
            telefono_celular : req.body.telefono_celular,
            correo_electronico : req.body.correo_electronico,
            clave : hash,
          });

          user.save()
            .then(result =>{
              res.status(201).json({
                message : 'usuario creado',
                clave: clave,
                result: result
              });
            })

            .catch(err =>{
              res.status(500).json({
                error :err
              });
            });
        })
    }
}
