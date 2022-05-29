var express = require('express');
var db = require('../conection')
var jwt = require('jsonwebtoken');
const { token } = require('morgan');
var router = express.Router();

router.post('/login', function (req, res, next) {
  const user = {
    "email": req.body.email,
    "password": req.body.password
  }

  db.query(`select userid from usuario WHERE email = '${req.body.email}' and password = '${req.body.password}'`)
    .then(response => {
      // console.log(response.rows)
      console.log("ENTRO")
      let respuesta = response.rowCount
      if (respuesta == "1") {
        let token = jwt.sign(user, "polloAsado")
        res.json({ "respuesta": token })
      } else {
        res.json({ "respuesta": "usuario invalido" })
      }

    })
    .catch(err => {
      console.log(err)
      res.send('error');
    })


});

router.post('/register', function (req, res, next) {
  const user = {
    "email": req.body.email,
    "password": req.body.password,
    "name": req.body.name,
  }



  db.query(`INSERT INTO usuario (email,password,name) VALUES ('${user.email}','${user.password}','${user.name}')`)
    .then(response => {
      console.log("ENTRO")
      let respuesta = response.rowCount
      if (respuesta == "1") {
        let token = jwt.sign(user, "polloAsado")
        res.json({ "respuesta": token })
      } else {
        res.json({ "respuesta": "No se puedo agregar" })
      }
    })
    .catch(err => {
      console.log(err)
      res.send('error');
    })


});

module.exports = router;



