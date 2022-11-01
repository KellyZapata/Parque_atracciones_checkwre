
const jwt = require("jsonwebtoken");
const Usuario = require("../models/usuario");
const { TOKEN_SECRET } = require("../config");

module.exports =  {
  VerifyRol: (rol) => {
    return (req, res, next) => {
      const authHeader = req.headers['authorization']
      const token = authHeader && authHeader.split(' ')[1]

      if (token == null) return res.sendStatus(401)

      jwt.verify(token, TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)
        usuario = Usuario.findById(user.userId, (err, usuario) => {
          if (err) return res.sendStatus(403)
          if (usuario.roles.includes(rol) || rol == null) {
            next()
          } else {
            return res.sendStatus(403)
          }
        })
      })
    }
  }
}
