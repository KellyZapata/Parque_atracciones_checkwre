
module.exports = {
    Login: (req, res) => {
        let fetchedUser;
        Usuario.findOne({correo_electronico: req.body.correo_electronico}).then(user=>{
          if(!user){
            return res.status(401).json({
              token: "error",
              expiresIn: "error",
              role: "error",
              message: "Correo electronico invalido."
            });
          }
          fetchedUser=user;
          return bcrypt.compare(req.body.contrasena, user.contrasena);
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
        bcrypt.hash(req.body.contrasena, 10)
        .then(hash => {
          const user = new Usuario({
            nombres : req.body.nombres,
            apellidos : req.body.apellidos,
            telefono_fijo : req.body.telefono_fijo,
            telefono_celular : req.body.telefono_celular,
            correo_electronico : req.body.correo_electronico,
            contrasena : hash,
          });

          user.save()
            .then(result =>{
              res.status(201).json({
                message : 'usuario creado',
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
