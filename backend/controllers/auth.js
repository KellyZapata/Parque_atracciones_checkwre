const generador = require('password-generator');
const bcrypt = require('bcrypt');
const Usuario = require('../models/usuario');
const jwt = require('jsonwebtoken');
const sgMail = require('@sendgrid/mail')
const crypto = require('crypto');
const { SENDGRID_API_KEY } = require('../config');

sgMail.setApiKey(SENDGRID_API_KEY)

module.exports = {
    Login: async (req, res) => {
      try {
        let fetchedUser;
        fetchedUser = await Usuario.findOne({correo_electronico: req.body.correo_electronico})
        if(!fetchedUser){
          return res.status(401).json({
            token: "error",
            expiresIn: "error",
            role: "error",
            message: "Correo electrónico invalido."
          });
        }
        const encrypt = await bcrypt.compare(req.body.clave, fetchedUser.clave)
        if(!encrypt){
          return res.status(401).json({
            token: "error",
            expiresIn: "error",
            role: "error",
            message: "Contraseña invalida."
          });
        }
        if (req.body.codigo){
            if (req.body.codigo == fetchedUser.codigo_autenticacion){
            const token = jwt.sign(
              {email: fetchedUser.correo_electronico , userId : fetchedUser ._id } ,
              process.env.TOKEN_SECRET,
              { expiresIn : "24h"}
            );
            fetchedUser.codigo_autenticacion = null;
            await fetchedUser.save();
            return res.status(200).json({
              token: token,
              expiresIn: 86400,
              role: fetchedUser.roles,
              message: "Login exitoso."
            });
          }else{
            return res.status(401).json({
              token: "error",
              expiresIn: "error",
              role: "error",
              message: "Código invalido."
            });
          }
        }

        codigo=generador(6, false, "^[0-9]+$");

        fetchedUser.codigo_autenticacion=codigo;
        await fetchedUser.save();
        const msg = {
          to: fetchedUser.correo_electronico,
          from: 'k.zapata1@utp.edu.co',
          subject: 'Código de autenticación',
          text: 'Su código de autenticación es ' + codigo,
          html: '<strong>Su código de autenticación es ' + codigo + '</strong>',
        }
        await sgMail.send(msg);

        return res.status(200).json({});
      } catch (e) {
        return res.status(500).json({
          error: e
        });
      }
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
              const msg = {
                to: req.body.correo_electronico,
                from: 'k.zapata1@utp.edu.co',
                subject: 'Contraseña',
                text: 'Su contraseña es ' + clave,
                html: '<strong>Su contraseña es ' + clave + '</strong>',
              }
              sgMail.send(msg).then(() => {
                console.log('Email sent')
              })
              .catch((error) => {
                console.error(error)
              });

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
    },
    SendPasswordReset: async (req, res) => {
      try {
        let fetchedUser;
        fetchedUser = await Usuario.findOne({correo_electronico: req.body.correo_electronico});
        if(!fetchedUser){
          return res.status(401).json({
            message: "Correo electrónico invalido."
          });
        }
        fetchedUser.recuperar_clave = crypto.randomBytes(20).toString('hex');
        fetchedUser.recuperar_clave_expiracion = Date.now() + 3600000;
        await fetchedUser.save();

        const msg = {
          to: fetchedUser.correo_electronico,
          from: 'k.zapata1@utp.edu.co',
          subject: 'Recuperar contraseña',
          text: 'Ingrese a este enlace para recuperar contraseña' + fetchedUser.recuperar_clave,
          html: '<strong>Ingrese a este enlace para recuperar contraseña ' + fetchedUser.recuperar_clave + '</strong>',
        }
        await sgMail.send(msg);

        return res.status(200).json({});

      } catch (e) {
        return res.status(500).json({
          error: e
        });
      }
    },
    ResetPassword: async (req, res) => {
      try{
        let fetchedUser;
        fetchedUser = await Usuario.findOne({recuperar_clave: req.params.token});
        if(!fetchedUser){
          return res.status(401).json({
            message: "Token invalido."
          });
        }
        if (fetchedUser.recuperar_clave_expiracion < Date.now()){
          return res.status(401).json({
            message: "Token expirado."
          });
        }
        fetchedUser.recuperar_clave = null;
        fetchedUser.recuperar_clave_expiracion = null;
        fetchedUser.clave = await bcrypt.hash(req.body.clave, 10);
        await fetchedUser.save();
        return res.status(200).json({});
      }
      catch (e) {
        return res.status(500).json({
          error: e
        });
      }
    }
}
