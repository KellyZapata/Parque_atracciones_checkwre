
const express = require("express");
const router = express.Router();

const AuthController = require("../controllers/auth");

router.post("/signup", (req,res, next)=>{
  AuthController.Signup(req, res);
})

router.post("/login" , (req, res ,  next)=>{
  AuthController.Login(req, res);
})

router.post("/resetpassword", (req, res, next)=>{
  AuthController.SendPasswordReset(req, res);
})

router.post("/resetpassword/:token", (req, res, next)=>{
  AuthController.ResetPassword(req, res);
})

module.exports = router;
