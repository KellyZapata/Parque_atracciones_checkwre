const express = require('express');
const mongoose = require('mongoose');
const config = require('./config.js');
const bodyParser = require('body-parser');
const checkauth = require('./middleware/check-auth');
const mongan = require('morgan');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(mongan('dev'));

mongoose.connect(config.MONGO_STRING, {useNewUrlParser: true , useUnifiedTopology: true})
.then(()=>{
  console.log('connected to database!');
})
.catch((e)=>{
  console.log(e);
  console.log('connection failed! ');
});

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With ,Content-Type,Authorization ,Accept",
    "HTTP/1.1 200 OK",
    "append,delete,entries,foreach,get,has,keys,set,values,Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PATCH,DELETE,OPTIONS,PUT"
  );
  next();
});

app.use("/api/auth", require("./routes/autenticacion"));
app.use("/api/test", checkauth.VerifyRol(), require("./routes/test_login"));


app.use("/api/adm/usuarios", checkauth.VerifyRol(), require("./routes/usuarios"));
app.use("/api/adm/roles", checkauth.VerifyRol(), require("./routes/roles"));
app.use("/api/adm/departamentos", checkauth.VerifyRol(), require("./routes/departamentos"));
app.use("/api/adm/ciudades", checkauth.VerifyRol(), require("./routes/ciudades"));

module.exports = app;
