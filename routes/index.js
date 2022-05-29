var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/x', function(req, res, next) {

  jwt.verify(req.token, 'polloAsado', (error, authData) => {
    if(error){
        res.sendStatus(403);
    }else{
        res.json({
                mensaje: "Post fue creado",
                authData
            });
    }
});
  res.send("hola")
});



module.exports = router;
