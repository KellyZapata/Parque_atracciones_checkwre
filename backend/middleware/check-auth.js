
const jwt = require("jsonwebtoken");
const Usuario = require("../models/usuario");
const { TOKEN_SECRET } = require("../config");

module.exports =  {
  VerifyRol: (roles = []) => {
    return async (req, res, next) => {
      try {
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]

        if (token == null) return res.sendStatus(401)

        user = await jwt.verify(token, TOKEN_SECRET);
        if (user == null) return res.sendStatus(401)
        user = await Usuario.findById(user.userId).populate('roles');
        req.user = user;
        if (user == null) return res.sendStatus(500)
        user.roles.filter((r) => { return roles.includes(r.nombre) }).length > 0 ? next() : res.sendStatus(403);
      } catch (error) {
        res.sendStatus(500, error);
      }
    }
  }
}
