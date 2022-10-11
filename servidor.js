const express = require('express');
const mongoose = require('mongoose');
const config = require('./config.js');

const app = express();
const router = express.Router();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



mongoose.connect(config.MONGO_STRING);

const PersonaSchema = require('./modelos/persona.js');

router.get('/', (req, res) => {
    res.json({ message: 'Funcionando' });
});

router.post ('/personas', (req, res) => {
    let persona = new PersonaSchema({
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        tipoDocumento: req.body.tipoDocumento,
        numeroDocumento: req.body.numeroDocumento,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        correo: req.body.correo,
        celular: req.body.celular,
        comprobanteConsignacion: req.body.comprobanteConsignacion,
        codigoICFES: req.body.codigoICFES,
        familiarEnUniversidad: req.body.familiarEnUniversidad,
        estrato: req.body.estrato,
        tipoColegio : req.body.tipoColegio
    });
    persona.save((err) => {
        if (err) {
            console.log(err);
            res.send(err, 500);
        }else{
            res.send("Tarea almacenada")
        }
    });
});

router.get('/personas', (req, res) => {
    PersonaSchema.find((err, personas) => {
        if (err) {
            res.send(err, 500);
        }else{
            res.json(personas);
        }
    });
});

router.get('/personas/:id', (req, res) => {
    PersonaSchema.findById(req.params.id, (err, persona) => {
        if (err) {
            res.send(err, 500);
        }else{
            res.json(persona);
        }
    });
});

router.put('/personas/:id', (req, res) => {
    var persona = req.body;
    PersonaSchema.findByIdAndUpdate(req.params.id, persona, (err, persona) => {
        if (err) {
            res.send(err, 500);
        }else{
            res.send("Tarea actualizada")
        }
    } );
});

router.delete('/personas/:id', (req, res) => {
    PersonaSchema.findByIdAndRemove(req.params.id, (err, persona) => {
        if (err) {
            res.send(err, 500);
        }else{
            res.send("Tarea eliminada")
        }
    });
});


app.use(router);

app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000");
});