var express = require('express');
var router = express.Router();
var dataBaseModule = require('./pg-test_module_pool.js');
/* GET home page. */


router.post('',function(req, res, next){
    var nombreusuario=req.body.nombreusuario;

    var idusuarionuevo = '';
    var id =1;

    query = 'SELECT "name" FROM "player" WHERE "name" IN ({0});'
    query = query.replace('{0}', nombreusuario);

    try {
         dataBaseModule.execute(query,function(result){

             if(result == ''){
                   query = "INSERT INTO player (name) VALUES ('{0}');";
                   query= query.replace('{0}',name);

                    try {
                         dataBaseModule.execute(query,function(result){
                           res.send('se creo el jugador'));
                      });
                    } catch (e) {
                     //fin sexto try
                    }

                    query = "INSERT INTO playerdata (exp,lvl,money) VALUES ('{0}','{1}','{2}');";
                    query= query.replace('{0}',0);
                    query= query.replace('{1}',1);
                    query= query.replace('{2}',0);

                     try {
                          dataBaseModule.execute(query,function(result){
                            res.send(JSON.stringify(result));
                       });
                     } catch (e) {
                      //fin sexto try
                     }
                     query = "INSERT INTO activecar (car) VALUES ('{0}');";
                     query= query.replace('{0}',1);

                      try {
                           dataBaseModule.execute(query,function(result){
                             res.send(JSON.stringify(result));
                        });
                      } catch (e) {
                       //fin sexto try
                      }

                      query = "INSERT INTO playercars (carid,topspeed,accele,handling) VALUES ('{0}','{1}','{2}','{3}');";
                      query= query.replace('{0}',1);
                      query= query.replace('{1}',200);
                      query= query.replace('{2}',200);
                      query= query.replace('{3}',200);

                       try {
                            dataBaseModule.execute(query,function(result){
                              res.send(JSON.stringify(result));
                         });
                       } catch (e) {
                        //fin sexto try
                       }
             }else{
               res.send('ya existe un usuario con este nombre');
             }
      });
    } catch (e) {
     //fin sexto try
    }

// fin router post
});


module.exports = router;
